function calculatePackage(pkg, contract, cart = []) {
	const months =
		getCalculationMonths(
			pkg,
			contract,
			cart
		);
	let monthly = [];
    let activationFee = 0;
    for (let month = 1; month <= months; month++) {
        let price = 0;
        // składniki bazowe
        (pkg.components || []).forEach(component => {
            price += getPriceForMonth(
                component.priceSchedule,
                month
            );
        });
        // dodatki
        (pkg.options || []).forEach(option => {
            if(option.selected) {
                price += getPriceForMonth(
                    option.priceSchedule,
                    month
                );
            }
        });
        monthly.push(price);
    }
    // sumowanie aktywacji składników
    (pkg.components || []).forEach(component => {
        activationFee += component.activationFee || 0;
    });
    // aktywacje dodatków (jeżeli kiedyś będą)
    (pkg.options || []).forEach(option => {
        if(option.selected) {
            activationFee += option.activationFee || 0;
        }
    });
    // dodanie aktywacji do pierwszego miesiąca
    monthly[0] += activationFee;
    return {
        monthly,
        activationFee
    };
}

function getPriceForMonth(schedule, month) {
    if(!schedule){
        return 0;
    }
	const item = schedule.find(x =>
		month >= x.from &&
		(x.to === null || month <= x.to)
	);
    return item ? item.price : 0;
}

function groupMonths(values, indefinite = false) {
    let result = [];
    let start = 1;
    let previous = Number(values[0].toFixed(2));
    for(let i = 1; i < values.length; i++) {
        const current = Number(values[i].toFixed(2));
        if(current !== previous) {
            result.push({
                from: start,
                to: i,
                price: previous
            });
            start = i + 1;
            previous = current;
        }
    }
    result.push({
        from: start,
        to: indefinite ? null : values.length,
        price: previous
    });
    return result;
}

function getLowestGlobalFees(cart, months) {
    const fees = {};
    cart.forEach(item => {
        if (!item.offer || !item.offer.globalFees) {
            return;
        }
        item.offer.globalFees.forEach(fee => {
            if(!fee.id){
                return;
            }
            if(!fees[fee.id]){
                fees[fee.id] = Array(months).fill(null);
            }
            for(let month = 1; month <= months; month++){

                const scheduleItem = fee.priceSchedule?.find(x =>
                    month >= x.from &&
                    (x.to === null || month <= x.to)
                );
                // brak opłaty w tym miesiącu - pomijamy
                if(!scheduleItem){
                    continue;
                }

                const price = scheduleItem.price;
                const index = month - 1;

                if(
                    fees[fee.id][index] === null ||
                    price < fees[fee.id][index]
                ){
                    fees[fee.id][index] = price;
                }
            }
        });
    });
    return fees;
}

function calculateCart(cart, globalOptions = []) {
    const months = Math.max(
        ...cart.map(item => {
            const service =
                catalog.services.find(
                    x => x.id === item.serviceId
                );
            const contract =
                service.contracts.find(
                    x => x.id === item.contractId
                );
            return getCalculationMonths(
                item.package,
                contract,
                cart
            );
        }),
        getGlobalFeesCalculationMonths(cart),
        0
    );
    let total = Array(months).fill(0);
    let activation = 0;
    cart.forEach(item => {
        const service =
            catalog.services.find(
                x => x.id === item.serviceId
            );
        const contract =
            service.contracts.find(
                x => x.id === item.contractId
            );
        const calculation =
            calculatePackage(
                item.package,
                contract,
                cart
            );
        calculation.monthly.forEach(
            (price,index)=>{
                total[index] += price;
            }
        );
        activation += calculation.activationFee;
    });
    const globalFees =
        getLowestGlobalFees(
            cart,
            months
        );
    Object.values(globalFees)
        .forEach(feeMonthly=>{
            feeMonthly.forEach((price,index)=>{
                if(price !== null){
                    total[index] += price;
                }
            });
        });
    globalOptions
        .filter(option=>option.selected)
        .forEach(option=>{
            for(let i=0;i<months;i++){
                total[i]+=option.price;
            }
        });
    return {
        monthly: total.map(x=>Number(x.toFixed(2))),
        activationFee:Number(activation.toFixed(2))
    };
}

function calculateCartItem(item, cart = []){
    const service =
        catalog.services.find(
            x => x.id === item.serviceId
        );
    const contract =
        service.contracts.find(
            x => x.id === item.contractId
        );
	return calculatePackage(
		item.package,
		contract,
		cart
	);
}

function getCalculationMonths(pkg, contract, cart = []) {
    if(contract.months != null){
        return contract.months;
    }
    let maxContractMonths = 0;
    cart.forEach(item=>{
        const service =
            catalog.services.find(
                x=>x.id===item.serviceId
            );
        const itemContract =
            service?.contracts.find(
                x=>x.id===item.contractId
            );
        if(
            itemContract &&
            itemContract.months != null
        ){
            maxContractMonths = Math.max(
                maxContractMonths,
                itemContract.months
            );
        }
    });
    return Math.max(
        maxContractMonths + 1,
        2
    );
}
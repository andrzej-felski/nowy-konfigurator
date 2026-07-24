let currentConfiguration = null;
let cart = [];
let selectedClientTypeId = null;
let selectedServiceId = null;
let selectedContractId = null;
let selectedOfferId = null;
let selectedPackageId = null;
let selectedBundleInternetId = null;
let selectedBundleTvId = null;
let currentConfigurationId = null;
let currentStep = 1;
let editedCartItemId = null;
let openedCartItems = [];
let lastSelectedRadioByGroup = {};
let selectedGlobalOptions =
    structuredClone(catalog.globalOptions)
    .map(option=>({
        ...option,
        selected: option.selectedByDefault
    }));
let lockedClientTypeId = null;
let lockedContractId = null;

const stepContent =
    document.getElementById("stepContent");
const summaryContent =
    document.getElementById("summaryContent");
const backButton =
    document.getElementById("backButton");
const nextButton =
    document.getElementById("nextButton");
/*const clearButton =
    document.getElementById("clearButton");*/

function init(){
    renderStep();
}

function applyDefaultSelection(items){
    if(!items){
        return;
    }
    items.forEach(item=>{
        if(item.selected === undefined){
            item.selected = item.selectedByDefault ?? false;
        }
    });
}

function getDefaultId(items){
    return items.find(x => x.selectedByDefault)?.id ?? null;
}

function renderStep(){
    stepContent.innerHTML = "";
	const titles = {
		1: "Typ klienta",
		2: "Usługa",
		3: "Długość umowy",
		4: "Oferta",
		5: "Pakiet",
		6: "Dodatki"
	};
    stepContent.innerHTML += `
        <h2>
            ${titles[currentStep]}
        </h2>
    `;
	if (currentStep === 1) {
		renderClientTypes();
	}
	if (currentStep === 2) {
		renderServices();
	}
	if (currentStep === 3) {
		renderContracts();
	}
	if (currentStep === 4) {
		renderOffers();
	}
	if (currentStep === 5) {
		renderPackages();
	}
	if (currentStep === 6) {
		renderOptions();
	}
	renderSummary();
	updateNavigation();
}

function renderClientTypes() {
	if (lockedClientTypeId) {
		selectedClientTypeId = lockedClientTypeId;
	} else if (!selectedClientTypeId) {
		selectedClientTypeId = getDefaultId(catalog.clientTypes);
	}
    stepContent.innerHTML += `
        <div class="choice-list">
            ${
                catalog.clientTypes.map(type => `
                    <label class="choice-card ${ lockedClientTypeId && type.id !== selectedClientTypeId ? "choice-disabled" : "" }">
						<input
							type="radio"
							name="clientType"
							value="${type.id}"
							${selectedClientTypeId === type.id ? "checked" : ""}
							${lockedClientTypeId && type.id !== selectedClientTypeId ? "disabled" : ""}
						/>
                        <span class="choice-name">
                            ${type.name}
                        </span>
                    </label>
                `).join("")
            }
        </div>
    `;
    stepContent
        .querySelectorAll('input[name="clientType"]')
        .forEach(input => {
            input.addEventListener("change", () => {
                selectedClientTypeId = input.value;
                selectedServiceId = null;
                selectedContractId = null;
                selectedOfferId = null;
                selectedPackageId = null;
                selectedBundleInternetId = null;
                selectedBundleTvId = null;
                currentConfiguration = null;
                currentConfigurationId = null;

                renderStep();
            });
        });
}

function renderServices(){
	if(!selectedServiceId){
		selectedServiceId = getDefaultId(catalog.services);
	}
    stepContent.innerHTML += `
        <div class="choice-list">
            ${
				catalog.services.map(service => {
					const disabled =
						!hasAvailablePackages(service) ||
						(lockedContractId && !isServiceAvailable(service));
					return `
						<label class="choice-card ${disabled ? "choice-disabled" : ""}">
							<input
								type="radio"
								name="service"
								value="${service.id}"
								${selectedServiceId === service.id ? "checked" : ""}
								${disabled ? "disabled" : ""}
							>
							<span class="choice-name">
								${service.name}
							</span>
						</label>
					`;
				}).join("")
            }
        </div>
    `;
    stepContent
        .querySelectorAll('input[name="service"]')
        .forEach(input=>{
            input.addEventListener("change", ()=>{
                selectedServiceId = input.value;
                selectedContractId = null;
                selectedOfferId = null;
                selectedPackageId = null;
                selectedBundleInternetId = null;
                selectedBundleTvId = null;
                renderStep();
            });
        });
}

function isServiceAvailable(service) {
    if (!lockedContractId) {
        return true;
    }
    return service.contracts.some(
        contract => contract.id === lockedContractId
    );
}

function hasAvailablePackages(service) {
    return service.contracts.some(contract =>
        contract.offers.some(offer => {
            if(
                offer.clientTypes &&
                !offer.clientTypes.includes(selectedClientTypeId)
            ){
                return false;
            }
            if(offer.packages){
                return offer.packages.length > 0;
            }
            if(offer.internetPackages && offer.tvPackages){
                return (
                    offer.internetPackages.length > 0 &&
                    offer.tvPackages.length > 0
                );
            }
            return false;
        })
    );
}

function hasAvailablePackagesForContract(contract) {
    return contract.offers.some(offer => {
        if (
            offer.clientTypes &&
            !offer.clientTypes.includes(selectedClientTypeId)
        ) {
            return false;
        }
        if (offer.packages) {
            return offer.packages.length > 0;
        }
        if (offer.internetPackages && offer.tvPackages) {
            return (
                offer.internetPackages.length > 0 &&
                offer.tvPackages.length > 0
            );
        }
        return false;
    });
}

function renderContracts(){
    const service = getSelectedService();
    if(!service){
        return;
    }
	if (lockedContractId) {
		selectedContractId = lockedContractId;
	} else if (!selectedContractId) {
		selectedContractId = getDefaultId(service.contracts);
	}
    stepContent.innerHTML += `
        <div class="choice-list">
        ${
			service.contracts.map(contract => {
				const disabled =
					!hasAvailablePackagesForContract(contract) ||
					(lockedContractId && contract.id !== lockedContractId);
				return `
					<label class="choice-card ${disabled ? "choice-disabled" : ""}">
						<input
							type="radio"
							name="contract"
							value="${contract.id}"
							${selectedContractId === contract.id ? "checked" : ""}
							${disabled ? "disabled" : ""}
						/>
						<span class="choice-name">
							${contract.name}
						</span>
					</label>
				`;
			}).join("")
        }
        </div>
    `;
    stepContent
    .querySelectorAll('input[name="contract"]')
    .forEach(input=>{
        input.addEventListener("change", ()=>{
            selectedContractId = input.value;
            selectedOfferId = null;
            selectedPackageId = null;
			selectedBundleInternetId = null;
			selectedBundleTvId = null;
            renderStep();
        });
    });
}

function renderOffers(){
    const contract = getSelectedContract();
    if(!contract){
        return;
    }
	const offers = contract.offers.filter(offer =>
		!offer.clientTypes ||
		offer.clientTypes.includes(selectedClientTypeId)
	);
	if (!selectedOfferId || !offers.some(o => o.id === selectedOfferId)) {
		selectedOfferId = getDefaultId(offers);
	}
    stepContent.innerHTML += `
        <div class="choice-list">
            ${
                offers.map(offer=>`
                    <label class="choice-card">
                        <input 
                            type="radio"
                            name="offer"
                            value="${offer.id}"
                            ${selectedOfferId === offer.id ? "checked" : ""}
                        >
                        <span class="choice-name">
                            ${offer.name}
                        </span>
                    </label>
                `).join("")
            }
        </div>
    `;
    stepContent
    .querySelectorAll('input[name="offer"]')
    .forEach(input=>{
        input.addEventListener(
            "change",
            ()=>{
                selectedOfferId = input.value;
                selectedPackageId = null;
				selectedBundleInternetId = null;
				selectedBundleTvId = null;
                renderStep();
            }
        );
    });
}

function renderPackages(){
    const service = getSelectedService();
    if(service?.id === "packages"){
        renderBundlePackages();
    }else{
        renderSinglePackages();
    }
}

function renderSinglePackages(){
    const offer = getSelectedOffer();
    if(!offer){
        return;
    }
    if(!selectedPackageId){
        selectedPackageId = getDefaultId(offer.packages);
    }
    stepContent.innerHTML += `
        <div class="choice-list">
            ${
                offer.packages.map(pkg=>`
                    <label class="choice-card">
                        <input 
                            type="radio"
                            name="package"
                            value="${pkg.id}"
                            ${selectedPackageId === pkg.id ? "checked" : ""}
                        >
                        <span class="choice-name">
                            ${pkg.name}
                        </span>
                    </label>
                `).join("")
            }
        </div>
    `;
    stepContent
    .querySelectorAll('input[name="package"]')
    .forEach(input=>{
		input.addEventListener(
			"change",
			()=>{
				selectedPackageId = input.value;
				currentConfiguration = null;
				updateNavigation();
			}
        );
    });
}

function renderBundlePackages(){
    const offer = getSelectedOffer();
    if(!offer){
        return;
    }
    if(!selectedBundleInternetId){
        selectedBundleInternetId =
            getDefaultId(offer.internetPackages);
    }
    if(!selectedBundleTvId){
        selectedBundleTvId =
            getDefaultId(offer.tvPackages);
    }
    stepContent.innerHTML += `
        <h3>Internet</h3>
        <div class="choice-list">
            ${
                offer.internetPackages.map(pkg=>`
                    <label class="choice-card">
                        <input
                            type="radio"
                            name="bundleInternet"
                            value="${pkg.id}"
                            ${
                                selectedBundleInternetId === pkg.id
                                ? "checked"
                                : ""
                            }
                        >
                        <span class="choice-name">
                            ${pkg.name}
                        </span>
                    </label>
                `).join("")
            }
        </div>
        <h3>Telewizja</h3>
        <div class="choice-list">
            ${
                offer.tvPackages.map(pkg=>`
                    <label class="choice-card">
                        <input
                            type="radio"
                            name="bundleTv"
                            value="${pkg.id}"
                            ${
                                selectedBundleTvId === pkg.id
                                ? "checked"
                                : ""
                            }
                        >
                        <span class="choice-name">
                            ${pkg.name}
                        </span>
                    </label>
                `).join("")
            }
        </div>
    `;
    stepContent
    .querySelectorAll('input[name="bundleInternet"]')
    .forEach(input=>{
		input.addEventListener(
			"change",
			()=>{
				selectedBundleInternetId =
					input.value;
				currentConfiguration = null;
				updateNavigation();
			}
		);
    });
    stepContent
    .querySelectorAll('input[name="bundleTv"]')
    .forEach(input=>{
		input.addEventListener(
			"change",
			()=>{
				selectedBundleTvId =
					input.value;
				currentConfiguration = null;
				updateNavigation();
			}
		);
    });
}

function renderOptions(){
	let optionsList =
		document.getElementById("optionsList");
	if(optionsList){
		optionsList.remove();
	}
	const config = getCurrentConfiguration();
	if(!config){
		return;
	}
	if(
		!currentConfiguration ||
		currentConfigurationId !== config.id
	){
		currentConfiguration =
			structuredClone(config);
		currentConfigurationId = config.id;
	}
	if (!currentConfiguration.options || currentConfiguration.options.length === 0) {
		updateNavigation();
		return;
	}
	optionsList =
		document.createElement("div");
	optionsList.id = "optionsList";
	optionsList.className = "choice-list";
	stepContent.appendChild(optionsList);
	applyDefaultSelection(currentConfiguration.options);
	let changed;
	do {
		changed = false;
		currentConfiguration.options.forEach(option => {
			if(option.selected && !isOptionAllowed(option)){
				option.selected = false;
				changed = true;
			}
		});
	} while(changed);
	currentConfiguration.options.forEach(option=>{
		const enabled = isOptionAllowed(option);
		const dependencies =
			option.requires
				? option.requires
				: Array.isArray(option.dependsOn)
					? option.dependsOn
					: option.dependsOn
						? [option.dependsOn]
						: [];
		optionsList.innerHTML += `
		<label class="option-card ${dependencies.length && !enabled ? "option-disabled" : ""}">
			<input
				type="${option.group ? "radio" : "checkbox"}"
				${dependencies.length && !enabled ? "disabled" : ""}
				name="${option.group ? option.group : "option"}"
				data-id="${option.id}"
				${option.selected ? "checked" : ""}
			>
			<span class="option-name">
				${option.name}
			</span>
			<span class="option-price">
				${
					option.priceSchedule
						? option.priceSchedule
							.map(x => `${formatScheduleRange(x)} ${formatPrice(x.price)}`)
							.join("<br>")
						: `+${option.price || 0} zł`
				}
			</span>
		</label>
		`;
    });
	optionsList
	.querySelectorAll("input[data-id]")
	.forEach(input=>{
		input.addEventListener(
			"click",
			()=>{
				const option =
					currentConfiguration.options
					.find(
						x => x.id === input.dataset.id
					);
				if(!option){
					return;
				}
				if(input.type === "radio"){
					const group = input.name;

					if(
						lastSelectedRadioByGroup[group] === option.id
					){
						input.checked = false;
						option.selected = false;

						lastSelectedRadioByGroup[group] = null;

						renderOptions();
						updateNavigation();
						return;
					}

					lastSelectedRadioByGroup[group] =
						option.id;
				}
				option.selected =
					input.checked;
				if(option.group && input.checked){
					currentConfiguration.options
					.filter(x =>
						x.group === option.group &&
						x.id !== option.id
					)
					.forEach(x=>{
						x.selected = false;
					});
				}
				let changed;
				do {
					changed = false;
					currentConfiguration.options.forEach(option => {
						if(option.selected && !isOptionAllowed(option)){
							option.selected = false;
							changed = true;
						}
					});
				} while(changed);
				renderOptions();
				updateNavigation();
			}
		);
	});
}

function isOptionAllowed(option) {
	const dependencies =
		option.requires
			? option.requires
			: Array.isArray(option.dependsOn)
				? option.dependsOn
				: option.dependsOn
					? [option.dependsOn]
					: [];
	if (!dependencies.length) {
		return true;
	}
	return dependencies.some(id =>
		currentConfiguration.options.find(o => o.id === id)?.selected
	);
}

function formatScheduleRange(item){
    if(item.to === null){
        return `od ${item.from} miesiąca:`;
    }
    if(item.from === item.to){
        return `${item.from} miesiąc:`;
    }
    return `${item.from}-${item.to} miesiąc:`;
}

function renderSummary() {
    summaryContent.innerHTML = `
    ${
        getSelectedClientType()
        ? getSelectedClientType().name
        : "-"
    }
    ${
        getSelectedService()
        ? " - " + getSelectedService().name
        : ""
    }
    ${
        getSelectedContract()
        ? " - " + getSelectedContract().name
        : ""
    }
    ${
        getSelectedOffer()
        ? " - " + getSelectedOffer().name
        : ""
    }
    ${
        getCurrentConfiguration()
        ? " - " + getCurrentConfiguration().name
        : ""
    }
    `;
}

function getSelectedClientType() {
    return catalog.clientTypes.find(
        x => x.id === selectedClientTypeId
    );
}

function getSelectedService(){
    return catalog.services.find(
        x => x.id === selectedServiceId
    );
}

function getSelectedContract(){
    const service =
        getSelectedService();
    if(!service || !selectedContractId){
        return null;
    }
    return service.contracts.find(
        x => x.id === selectedContractId
    );
}

function getSelectedOffer() {
    const contract = getSelectedContract();
    if (!contract || !selectedOfferId) {
        return null;
    }
    return contract.offers.find(x =>
        x.id === selectedOfferId &&
        (
            !x.clientTypes ||
            x.clientTypes.includes(selectedClientTypeId)
        )
    );
}

function getCurrentConfiguration(){
    const service = getSelectedService();
    const offer = getSelectedOffer();
    if(!service || !offer){
        return null;
    }
    if(service.id === "packages"){
        if(
            !selectedBundleInternetId ||
            !selectedBundleTvId
        ){
            return null;
        }
        const internet =
            offer.internetPackages.find(
                x => x.id === selectedBundleInternetId
            );
        const tv =
            offer.tvPackages.find(
                x => x.id === selectedBundleTvId
            );
		return {
			id:
				internet.id + "_" + tv.id,
			name:
				internet.name + " + " + tv.name,
			internet,
			tv,
			components:[
				...(internet.components || []),
				...(tv.components || [])
			],
			options:[
				...(internet.options || []),
				...(tv.options || [])
			],
			globalFees:
				offer.globalFees || []
		};
    }
    if(!selectedPackageId){
        return null;
    }
	const pkg =
		offer.packages.find(
			x => x.id === selectedPackageId
		);

	return {
		...pkg,
		globalFees: offer.globalFees || []
	};
}

function renderGlobalOptions(){
    if(!catalog.globalOptions.length){
        return "";
    }
	 return `
	<div class="global-options">
	${
		selectedGlobalOptions.map(option=>`
			<label class="option-card" style="margin: 10px 0;">
				<input
					type="checkbox"
					data-global-id="${option.id}"
					${option.selected ? "checked" : ""}
				>
				<span class="option-name">
					${option.name}
				</span>
				<span class="option-price">
					${
						option.priceSchedule
						?
						option.priceSchedule
							.map(x => `${formatScheduleRange(x)} ${formatPrice(x.price)}`)
							.join("<br>")
						:
						(
							option.price > 0
							? "+" + formatPrice(option.price)
							: formatPrice(option.price)
						) + " / miesiąc"
					}
				</span>
			</label>
		`).join("")
	}
	</div>
	`;
}

function setupGlobalOptionsEvents(){
    document
    .querySelectorAll("[data-global-id]")
    .forEach(input=>{
        input.addEventListener(
            "change",
            ()=>{
                const option =
                    selectedGlobalOptions.find(
                        x => x.id === input.dataset.globalId
                    );
                if(option){
                    option.selected =
                        input.checked;
                }
                renderCart();
            }
        );
    });
}

function renderCart(){
    const cartDiv =
        document.getElementById("cart");
    cartDiv.innerHTML = "";
    cart.forEach(item=>{
        const service =
            catalog.services.find(
                x => x.id === item.serviceId
            );
        const contract =
            service.contracts.find(
                x => x.id === item.contractId
            );
        const offer =
            contract.offers.find(
                x => x.id === item.offerId
            );
		let calculation =
			calculateCartItem(item, cart);
		const packageOnly = structuredClone(item.package);
		(packageOnly.options || []).forEach(option => {
			option.selected = false;
		});
		const packageCalculation = calculatePackage(
			packageOnly,
			contract,
			cart
		);
		const packageMonthlyWithActivation =
			packageCalculation.monthly.map((price, index) =>
				index === 0
					? price + packageCalculation.activationFee
					: price
			);
		const groupedPackage = groupMonths(
			packageMonthlyWithActivation,
			contract.type === "indefinite"
		);
		const indefinite =
			contract.type === "indefinite";
		const monthlyWithActivation =
			calculation.monthly.map((price, index) =>
				index === 0
					? price + calculation.activationFee
					: price
			);
		let grouped = groupMonths(
			monthlyWithActivation,
			contract.type === "indefinite"
		);
		if (
			contract.type === "indefinite" &&
			calculation.activationFee > 0 &&
			grouped.length === 1
		) {
			grouped = [
				{
					from: 1,
					to: 1,
					price: grouped[0].price
				},
				{
					from: 2,
					to: null,
					price: Number(
						(grouped[0].price - calculation.activationFee).toFixed(2)
					)
				}
			];
		}
		const selectedOptions =
			(item.package.options || [])
			.filter(option => option.selected);
        cartDiv.innerHTML += `
        <div class="cart-item" data-id="${item.cartItemId}">
            <div class="cart-header" onclick="toggleCartItem(this)">
                <span class="cart-title">
                    ${item.package.name}
                </span>
                <span class="cart-actions">
                    <button 
                        onclick="event.stopPropagation(); editCartItem('${item.cartItemId}')">
                        Edytuj
                    </button>
                    <button 
                        style="background-color:#dd3333"
                        onclick="event.stopPropagation(); removeFromCart('${item.cartItemId}')">
                        Usuń
                    </button>
                </span>
            </div>
            <div class="cart-content">
                ${
                    offer.id !== "standard"
                    ?
                    `
                    <strong>Oferta:</strong>
                    ${offer.name}
                    <br>
                    `
                    :
                    ""
                }
                <strong>Umowa:</strong>
                ${contract.name}
                <br>
				<strong>Koszt usługi:</strong>
				<br>
				${
					groupedPackage.map((x, index) => {
						const basePrice =
							index === 0
								? x.price - packageCalculation.activationFee
								: x.price;
						let price = formatPrice(basePrice);
						if (index === 0 && packageCalculation.activationFee) {
							price += ` + ${formatPrice(packageCalculation.activationFee)} za aktywację`;
							price += ` = ${formatPrice(x.price)}`;
						}
						return `
							${formatMonthRange(x)}:
							${price}
							<br>
						`;
					}).join("")
				}
				<strong>Dodatki:</strong>
				${
					selectedOptions.map(option => {
						const optionMonths = getCalculationMonths(
							item.package,
							contract,
							cart
						);
						const optionMonthly = [];
						for(let month = 1; month <= optionMonths; month++){
							optionMonthly.push(
								getPriceForMonth(
									option.priceSchedule,
									month
								)
							);
						}
						if(option.activationFee){
							optionMonthly[0] += option.activationFee;
						}
						const groupedOption = groupMonths(
							optionMonthly,
							contract.type === "indefinite"
						);
						return `
							<div class="option-item">
								<div class="option-header" onclick="toggleOption(this)">
									<span>${option.name}</span>
									<span class="option-arrow">▼</span>
								</div>
								<div class="option-content">
									${
										groupedOption.map((x,index)=>{
											let price = formatPrice(x.price);
											if(index === 0 && option.activationFee){
												price =
													`${formatPrice(x.price - option.activationFee)}
													+ ${formatPrice(option.activationFee)} za aktywację
													= ${formatPrice(x.price)}`;
											}
											return `
												${formatMonthRange(x)}:
												${price}
												<br>
											`;
										}).join("")
									}
								</div>
							</div>
						`;
					}).join("")
				}
				<br>
				<strong>Harmonogram opłat miesięcznych:</strong>
				<br>
				${grouped.map((x,index)=>{
					const basePrice =
						index === 0
							? x.price - calculation.activationFee
							: x.price;
					let price = formatPrice(basePrice);
					if (index === 0 && calculation.activationFee) {
						price += ` + ${formatPrice(calculation.activationFee)} za aktywację`;
						price += ` = ${formatPrice(x.price)}`;
					}
					return `
						${
							formatMonthRange(x)
						}:
						${price}
						<br>
					`;
				}).join("")}
				${
					offer.regulations?.length
					?
					`
					<div class="regulations">
						<strong>Regulaminy:</strong>
						<br>
						${
							offer.regulations.map(regulation=>`
								<a 
									href="${regulation.url}" 
									target="_blank"
									rel="noopener noreferrer"
								>
									${regulation.name}
								</a>
								<br>
							`).join("")
						}
					</div>
					`
					:
					""
				}
            </div>
        </div>
        `;
    });
    if(cart.length === 0){
        return;
    }
    const summary =
        calculateCart(
            cart,
            selectedGlobalOptions
        );
	const summaryWithActivation =
		summary.monthly.map((price, index) =>
			index === 0
				? price + summary.activationFee
				: price
		);
	const summaryGrouped = groupMonths(
		summaryWithActivation,
		cart.some(item => {
			const service =
				catalog.services.find(x => x.id === item.serviceId);

			const contract =
				service.contracts.find(x => x.id === item.contractId);

			return contract.type === "indefinite";
		})
	);
    cartDiv.innerHTML += `
    <hr>
    `;
    cartDiv.innerHTML += renderGlobalOptions();
    cartDiv.innerHTML += `
    <hr>
    <h2>
        Podsumowanie
    </h2>
	<strong><span style="font-size:1.2em">Harmonogram opłat miesięcznych:</span></strong>
	<br>
	${summaryGrouped.map((x,index)=>{
		const basePrice =
			index === 0
				? x.price - summary.activationFee
				: x.price;
		let price = formatPrice(basePrice);
		if (index === 0 && summary.activationFee) {
			price += ` + ${formatPrice(summary.activationFee)} za aktywację`;
			price += ` = ${formatPrice(x.price)}`;
		}
		return `
			${
				formatMonthRange(x)
			}:
			${price}
			<br>
		`;
	}).join("")}
	<hr>
	<div class="price-details">
		<strong><span style="font-size:1.2em">Podane ceny zawierają:</span></strong>
		<br>
		${
			cart
			.flatMap(item => item.offer?.globalFees || [])
			.filter((fee,index,self)=>
				self.findIndex(x=>x.id===fee.id)===index
			)
			.map(fee=>`
				<div class="fee-item">
					<strong>${fee.name}</strong>
					<br>
					${
						getFeeSchedule(
							fee,
							summary.monthly.length,
							cart.some(item => {
								const service =
									catalog.services.find(
										x => x.id === item.serviceId
									);

								const contract =
									service.contracts.find(
										x => x.id === item.contractId
									);

								return contract.type === "indefinite";
							})
						)
						.map(x=>`
							${formatMonthRange(x)}:
							${formatPrice(x.price)}
							<br>
						`)
						.join("")
					}
				</div>
			`)
			.join("")
		}
		${
			selectedGlobalOptions
			.filter(option => option.selected)
			.map(option => `
				<div class="fee-item">
					<strong>${option.name}</strong>
					<br>
					${
						getFeeSchedule(
							option,
							summary.monthly.length,
							cart.some(item => {
								const service =
									catalog.services.find(
										x => x.id === item.serviceId
									);

								const contract =
									service.contracts.find(
										x => x.id === item.contractId
									);

								return contract.type === "indefinite";
							})
						)
						.map(x=>`
							${formatMonthRange(x)}:
							${formatPrice(x.price)}
							<br>
						`)
						.join("")
					}
				</div>
			`)
			.join("")
		}
	</div>
    <br>
    <button id="pdfButton">
        Zapisz PDF
    </button>
    `;
    setupGlobalOptionsEvents();
    const pdfButton =
        document.getElementById("pdfButton");
    if(pdfButton){
        pdfButton.addEventListener(
            "click",
            exportCartToPDF
        );
    }
    openedCartItems.forEach(id=>{
        const item =
            document.querySelector(
                `.cart-item[data-id="${id}"]`
            );
        if(!item){
            return;
        }
        const content =
            item.querySelector(".cart-content");
        if(!content){
            return;
        }
        item.classList.add("open");
        content.style.transition = "none";
        content.style.maxHeight =
            content.scrollHeight + "px";
        content.offsetHeight;
        content.style.transition = "";
    });
}

function toggleOption(header){
    const item = header.parentElement;
    const content = item.querySelector(".option-content");
    item.classList.toggle("open");
    if(item.classList.contains("open")){
        content.style.maxHeight = content.scrollHeight + "px";
    }else{
        content.style.maxHeight = "0";
    }
    const cartContent = item.closest(".cart-content");
    if(cartContent){
        content.addEventListener("transitionend", () => {
            cartContent.style.maxHeight =
                cartContent.scrollHeight + "px";
        }, { once:true });
    }
}

function formatMonthRange(item){
    if(item.to === null){
        return `od ${item.from} miesiąca`;
    }
    if(item.from === item.to){
        return `${item.from} miesiąc`;
    }
    return `${item.from}-${item.to} miesiąc`;
}

function addCurrentPackageToCart(){
	const wasEmpty = cart.length === 0;
    const packageCopy =
        structuredClone(currentConfiguration);
	const cartItem = {
		cartItemId:
			editedCartItemId
			? editedCartItemId
			: crypto.randomUUID(),
		serviceId:
			selectedServiceId,
		contractId:
			selectedContractId,
		offerId:
			selectedOfferId,
		offer:
			structuredClone(getSelectedOffer()),
		package:
			packageCopy
	};
    if(editedCartItemId){
        const index =
            cart.findIndex(
                x => x.cartItemId === editedCartItemId
            );
        cart[index] = cartItem;
    }else{
        cart.push(cartItem);
    }
	if (wasEmpty) {
		lockedClientTypeId = selectedClientTypeId;
		lockedContractId = selectedContractId;
	}
    editedCartItemId = null;
    renderCart();
    resetConfigurator();
}

function saveEditedPackage(){
    const index =
        cart.findIndex(
            x => x.cartItemId === editedCartItemId
        );
    if(index !== -1){
        cart[index].package =
            structuredClone(currentConfiguration);
        cart[index].offer =
            structuredClone(getSelectedOffer());
        cart[index].serviceId =
            selectedServiceId;
        cart[index].contractId =
            selectedContractId;
        cart[index].offerId =
            selectedOfferId;
    }
    editedCartItemId = null;
    renderCart();
    resetConfigurator();
}

function removeFromCart(id){
    cart =
        cart.filter(
            item =>
            item.cartItemId !== id
        );
    openedCartItems =
        openedCartItems.filter(
            x => x !== id
        );
    resetGlobalOptionsIfCartEmpty();
    renderCart();
	renderStep();
}

function resetGlobalOptionsIfCartEmpty(){
    if(cart.length === 0){
        selectedGlobalOptions.forEach(option=>{
            option.selected = false;
        });
        lockedClientTypeId = null;
        lockedContractId = null;
    }
}

function editCartItem(id){
    const item = cart.find(
        x => x.cartItemId === id
    );

    editedCartItemId = id;

    selectedPackageId = null;
    selectedBundleInternetId = null;
    selectedBundleTvId = null;

    selectedServiceId = item.serviceId;
    selectedContractId = item.contractId;
    selectedOfferId = item.offerId;
	if(
		item.serviceId === "packages" &&
		item.package.internet &&
		item.package.tv
	){
		selectedBundleInternetId =
			item.package.internet.id;

		selectedBundleTvId =
			item.package.tv.id;
	}else{
		selectedPackageId = item.package.id;
	}
    currentConfiguration =
        structuredClone(item.package);
    currentStep = 1;
    renderStep();
}

function resetConfigurator(){
    currentConfiguration = null;
	selectedClientTypeId = null;
    selectedServiceId = null;
    selectedContractId = null;
    selectedOfferId = null;
    selectedPackageId = null;
    selectedBundleInternetId = null;
    selectedBundleTvId = null;
	currentConfigurationId = null;
    openedCartItems = [];
	lastSelectedRadioByGroup = {};
    currentStep = 1;
    renderStep();
}

function getFeeSchedule(fee, months, indefinite = false){
	const monthly = [];
	for(let month = 1; month <= months; month++){
		let price = 0;
		if(fee.priceSchedule){
			price = getPriceForMonth(
				fee.priceSchedule,
				month
			);
		}else{
			price = fee.price || 0;
		}
		monthly.push(price);
	}
	return groupMonths(monthly, indefinite);
}

backButton.addEventListener(
"click",
()=>{
    if(currentStep > 1){
        currentStep--;
        renderStep();
    }
});

nextButton.addEventListener(
"click",
()=>{
    if(currentStep === 6){
        if(editedCartItemId){
            saveEditedPackage();
        } else {
            addCurrentPackageToCart();
        }
        return;
    }
    if(canGoNext()){
        currentStep++;
        renderStep();
    }
});

/*clearButton.addEventListener(
"click",
()=>{
    clearConfigurator();
});*/

function updateNavigation(){
    backButton.disabled =
        currentStep === 1;
    if(currentStep === 6){
        nextButton.disabled = false;
        nextButton.innerHTML =
            editedCartItemId
            ?
            "Zapisz zmiany"
            :
            "Dodaj pakiet";
        return;
    }
    nextButton.innerHTML =
        "Dalej →";
    nextButton.disabled =
        !canGoNext();
}

/*function clearConfigurator(){
    currentConfiguration = null;
    selectedServiceId = null;
    selectedContractId = null;
    selectedOfferId = null;
    selectedPackageId = null;
    selectedBundleInternetId = null;
    selectedBundleTvId = null;
    editedCartItemId = null;
	currentConfigurationId = null;
    lastSelectedRadioByGroup = {};
    currentStep = 1;
    renderStep();
}*/

function canGoNext() {
    if (currentStep === 1) {
        return selectedClientTypeId !== null;
    }
    if (currentStep === 2) {
        return selectedServiceId !== null;
    }
    if (currentStep === 3) {
        return selectedContractId !== null;
    }
    if (currentStep === 4) {
        return selectedOfferId !== null;
    }
    if (currentStep === 5) {
        const service = getSelectedService();
        if (service?.id === "packages") {
            return (
                selectedBundleInternetId !== null &&
                selectedBundleTvId !== null
            );
        }
        return selectedPackageId !== null;
    }
    if (currentStep === 6) {
        return true;
    }
    return false;
}

function saveOpenedCartItems(){
    openedCartItems = [
        ...document.querySelectorAll(".cart-item.open")
    ].map(item =>
        item.dataset.id
    );
}

function toggleCartItem(header){
    const item = header.parentElement;
    const content = item.querySelector(".cart-content");
    const isOpening = !item.classList.contains("open");
    document.querySelectorAll(".cart-item.open").forEach(openItem => {
        openItem.classList.remove("open");
        const openContent = openItem.querySelector(".cart-content");
        openContent.style.maxHeight = "0px";
        openItem.querySelectorAll(".option-item.open")
            .forEach(optionItem => {
                optionItem.classList.remove("open");
                const optionContent =
                    optionItem.querySelector(".option-content");
                if(optionContent){
                    optionContent.style.maxHeight = "0px";
                }
            });
    });
    if (isOpening) {
        item.classList.add("open");
        content.style.maxHeight =
            content.scrollHeight + "px";
        openedCartItems = [item.dataset.id];
    } else {
        openedCartItems = [];
    }
}

function getGlobalFeesCalculationMonths(cart){
    let max = 1;
    cart.forEach(item=>{
        const service =
            catalog.services.find(
                x => x.id === item.serviceId
            );
        const contract =
            service?.contracts.find(
                x => x.id === item.contractId
            );
        if(!contract){
            return;
        }
        if(contract.type === "indefinite"){
            const maxContractMonths = Math.max(
                ...cart.map(cartItem=>{
                    const service =
                        catalog.services.find(
                            x => x.id === cartItem.serviceId
                        );
                    const c =
                        service?.contracts.find(
                            x => x.id === cartItem.contractId
                        );
                    return c?.months ?? 0;
                })
            );
            max = Math.max(
                max,
                maxContractMonths + 1
            );
            return;
        }
        if(contract.months != null){
            max = Math.max(
                max,
                contract.months
            );
        }
    });
    return max;
}

function exportCartToPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFont("Roboto","normal");
    let y = 0;
	const logoBase64 = "data:image/png;base64,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";
	const pageWidth = doc.internal.pageSize.width;
	const imgWidth = pageWidth;
	const imgHeight = imgWidth * (534 / 2500);
	doc.addImage(
		logoBase64,
		"PNG",
		0,
		y,
		imgWidth,
		imgHeight
	);
	y += imgHeight + 5;
    cart.forEach((item)=>{
        const service =
            catalog.services.find(
                x => x.id === item.serviceId
            );
        const contract =
            service.contracts.find(
                x => x.id === item.contractId
            );
        const offer =
            contract.offers.find(
                x => x.id === item.offerId
            );
        const calculation =
            calculateCartItem(item);
		const options =
			(item.package.options || [])
			.filter(x=>x.selected);
        let rows = [];
        rows.push([
            {
                content:
                `${service.name} - ${offer.name} - ${item.package.name}`,
                colSpan:2,
                styles:{
					fillColor:[12,37,63],
					textColor:[255,255,255],
                    fontStyle:"bold",
					fontSize:11,
                    halign:"center",
					cellPadding:3
                }
            }
        ]);
        rows.push([
            "Umowa",
            contract.name
        ]);
		const packageOnly = structuredClone(item.package);
		(packageOnly.options || []).forEach(option => {
			option.selected = false;
		});
		const packageCalculation = calculatePackage(
			packageOnly,
			contract,
			cart
		);
		const packageMonthlyWithActivation =
			packageCalculation.monthly.map((price, index) =>
				index === 0
					? price + packageCalculation.activationFee
					: price
			);
		rows.push([
			{
				content: "Koszt usługi",
				colSpan: 2,
				styles: {
					fillColor: [224,243,255],
					textColor: [0,0,0],
					fontStyle: "bold",
					fontSize: 11,
					halign: "center",
					cellPadding: 1.5
				}
			}
		]);
		groupMonths(
			packageMonthlyWithActivation,
			contract.type === "indefinite"
		).forEach((x, index) => {
			const basePrice =
				index === 0
					? x.price - packageCalculation.activationFee
					: x.price;
			let price = formatPrice(basePrice);
			if (index === 0 && packageCalculation.activationFee) {
				price += ` + ${formatPrice(packageCalculation.activationFee)} za aktywację`;
				price += ` = ${formatPrice(x.price)}`;
			}
			rows.push([
				x.to === null
					? `od ${x.from} miesiąca`
					: x.from === x.to
						? `${x.from} miesiąc`
						: `${x.from}-${x.to} miesiąc`,
				price
			]);
		});
		rows.push([
			{
				content:"Dodatki",
				colSpan:2,
				styles:{
					fillColor:[224,243,255],
					textColor:[0,0,0],
					fontStyle:"bold",
					fontSize:11,
					halign:"center",
					cellPadding:1.5
				}
			}
		]);
		if(options.length === 0){
			rows.push([
				"brak",
				""
			]);
		}
		else {
			options.forEach(option => {
				rows.push([
					{
						content: option.name,
						colSpan:2,
						styles:{
							fontStyle:"bold"
						}
					}
				]);
				const optionMonths =
					getCalculationMonths(
						item.package,
						contract,
						cart
					);
				const optionMonthly = [];
				for(let month = 1; month <= optionMonths; month++){
					optionMonthly.push(
						getPriceForMonth(
							option.priceSchedule,
							month
						)
					);
				}
				if (option.activationFee) {
					optionMonthly[0] += option.activationFee;
				}
				groupMonths(
					optionMonthly,
					contract.type === "indefinite"
				)
				.forEach((x,index)=>{
					const basePrice =
						index === 0
							? x.price - (option.activationFee || 0)
							: x.price;
					let price = formatPrice(basePrice);
					if (index === 0 && option.activationFee) {
						price += ` + ${formatPrice(option.activationFee)} za aktywację`;
						price += ` = ${formatPrice(x.price)}`;
					}
					rows.push([
						x.to === null
						?
						`od ${x.from} miesiąca`
						:
						x.from === x.to
						?
						`${x.from} miesiąc`
						:
						`${x.from}-${x.to} miesiąc`,
						price
					]);
				});
			});
		}
        rows.push([
            {
                content:"Suma opłat",
                colSpan:2,
                styles:{
					fillColor:[224,243,255],
					textColor:[0,0,0],
                    fontStyle:"bold",
					fontSize:11,
					halign:"center",
					cellPadding:1.5
                }
            }
        ]);
		const monthlyWithActivation =
			calculation.monthly.map((price, index) =>
				index === 0
					? price + calculation.activationFee
					: price
			);
		groupMonths(
			monthlyWithActivation,
			contract.type === "indefinite"
		)
		.forEach((x,index)=>{
			const basePrice =
				index === 0
					? x.price - calculation.activationFee
					: x.price;
			let price = formatPrice(basePrice);
			if (index === 0 && calculation.activationFee) {
				price += ` + ${formatPrice(calculation.activationFee)} za aktywację`;
				price += ` = ${formatPrice(x.price)}`;
			}
			rows.push([
				x.to === null
				?
				`od ${x.from} miesiąca`
				:
				x.from === x.to
				?
				`${x.from} miesiąc`
				:
				`${x.from}-${x.to} miesiąc`,
				price
			]);
		});
        doc.autoTable({
            startY:y,
            theme:"grid",
            tableWidth:"auto",
            margin:{
                left:14,
                right:14
            },
            styles:{
                font:"Roboto",
                fontSize:10,
                cellPadding:1.5
            },
            body:rows
        });
        y =
        doc.lastAutoTable.finalY + 12;
        if(y > 250){
            doc.addPage();
            y = 20;
        }
    });
    const summary =
        calculateCart(
            cart,
            selectedGlobalOptions
        );
	const summaryWithActivation =
		summary.monthly.map((price, index) =>
			index === 0
				? price + summary.activationFee
				: price
		);
	const summaryGrouped =
		groupMonths(
			summaryWithActivation,
			cart.some(item => {
				const service =
					catalog.services.find(x => x.id === item.serviceId);
				const contract =
					service.contracts.find(x => x.id === item.contractId);
				return contract.type === "indefinite";
			})
		);
    if(y > 230){
        doc.addPage();
        y = 20;
    }
    let summaryRows = [];
    summaryRows.push([
        {
            content:
            "Ile zapłacisz w poszczególnych miesiącach",
            colSpan:2,
            styles:{
				fillColor:[12,37,63],
				textColor:[255,255,255],
                fontStyle:"bold",
				fontSize:11,
				halign:"center",
				cellPadding:3
            }
        }
    ]);
	summaryRows.push(
		...summaryGrouped.map((x,index)=>{
			const basePrice =
				index === 0
					? x.price - summary.activationFee
					: x.price;
			let price = formatPrice(basePrice);
			if (index === 0 && summary.activationFee) {
				price += ` + ${formatPrice(summary.activationFee)} zł za aktywację`;
				price += ` = ${formatPrice(x.price)} zł`;
			}
			return [
				x.to === null
				?
				`od ${x.from} miesiąca`
				:
				x.from === x.to
				?
				`${x.from} miesiąc`
				:
				`${x.from}-${x.to} miesiąc`,
				price
			];
		})
	);
	summaryRows.push([
		{
			content: "Podane ceny zawierają",
			colSpan: 2,
			styles: {
				fillColor: [224,243,255],
				textColor: [0,0,0],
				fontStyle: "bold",
				fontSize: 11,
				halign: "center",
				cellPadding: 1.5
			}
		}
	]);
	const globalFees = getLowestGlobalFees(
		cart,
		summary.monthly.length
	);
	Object.entries(globalFees).forEach(([id]) => {
		const fee = cart
			.flatMap(item => item.offer?.globalFees || [])
			.find(x => x.id === id);
		if (!fee) {
			return;
		}
		summaryRows.push([
			{
				content: fee.name,
				colSpan:2,
				styles:{
					fontStyle:"bold"
				}
			}
		]);
		getFeeSchedule(
			fee,
			summary.monthly.length,
			cart.some(item => {
				const service =
					catalog.services.find(
						x => x.id === item.serviceId
					);
				const contract =
					service.contracts.find(
						x => x.id === item.contractId
					);
				return contract.type === "indefinite";
			})
		)
		.forEach(x=>{
			summaryRows.push([
				formatMonthRange(x),
				formatPrice(x.price)
			]);
		});
	});
	selectedGlobalOptions
		.filter(option => option.selected)
		.forEach(option => {
			summaryRows.push([
				{
					content: option.name,
					colSpan: 2,
					styles:{
						fontStyle:"bold"
					}
				}
			]);
			getFeeSchedule(
				option,
				summary.monthly.length,
				cart.some(item => {
					const service =
						catalog.services.find(
							x => x.id === item.serviceId
						);
					const contract =
						service.contracts.find(
							x => x.id === item.contractId
						);
					return contract.type === "indefinite";
				})
			)
			.forEach(x => {
				summaryRows.push([
					formatMonthRange(x),
					formatPrice(x.price)
				]);
			});
		});
    doc.autoTable({
        startY:y,
        theme:"grid",
        tableWidth:"auto",
        margin:{
            left:14,
            right:14
        },
        styles:{
            font:"Roboto",
            fontSize:10,
            cellPadding:1.5
        },
        body:summaryRows
    });
	const pageCount = doc.internal.getNumberOfPages();

	for(let i = 1; i <= pageCount; i++){

		doc.setPage(i);

		doc.setFont("Roboto","normal");
		doc.setFontSize(9);
		doc.setTextColor(100);

		doc.text(
			`Strona ${i} z ${pageCount}`,
			doc.internal.pageSize.width / 2,
			doc.internal.pageSize.height - 10,
			{
				align:"center"
			}
		);
	}
	let fileName = prompt(
		"Podaj nazwę pliku:",
		"zamowienie"
	);
	if(fileName === null){
		return;
	}
	if(fileName.trim() === ""){
		fileName = "zamowienie";
	}
	fileName = fileName.replace(/[\\/:*?"<>|]/g, "");
	doc.save(
		`${fileName}.pdf`
	);
}

function formatPrice(value){
    return Number(value).toFixed(2) + " zł";
}

init();

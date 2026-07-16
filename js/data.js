const catalog = {
    globalOptions: [
        { id: "e_faktura", name: "Zgoda na e-fakturę",
            selectedByDefault: false,
            price: -5.00
        },
        { id: "house_fee",  name: "Opłata dla domów jednorodzinnych",
            selectedByDefault: false,
            price: 11.85
        }
    ],
	services: [
		{ id: "packages", name: "Pakiety",
			contracts: [
				{ id: "12", type: "fixed", months: 12, name: "12 miesięcy",
					offers: [
						{ id: "standard", name: "Super Box",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 56.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 72.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 77.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 20.72 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 108.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 20.72 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 54.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 88.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 113.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 199.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									],
								},
							]
						},
						{ id: "trzymaj_z_nami", name: "Trzymaj z nami",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 51.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 70.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 75.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.39 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 111.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.39 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 55.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 82.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 108.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 194.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									],
								},
							]
						},
						{ id: "stop_extra_net_i_tv", name: "STOP EXTRA NET I TV",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 22.57 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 28.78 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 26.18 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 51.04 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
							]
						},
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące",
					offers: [
						{ id: "oferta_letnia", name: "Oferta letnia TV + NET",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 20.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 21.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 20.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 36.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 20.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 51.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 30.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 39.12 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.25,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"dodatkowe_urzadzenie", name:"Dostęp do Usługi z wykorzystaniem dodatkowego urządzenia",
											selectedByDefault: false,
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.18 }
											]
										},
									],
								},
							]
						},
						{ id: "oferta_letnia_premium", name: "Oferta letnia TV + NET + Premium",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 20.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 20.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 20.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 40.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 30.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 35.12 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.25,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.25,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.25,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"dodatkowe_urzadzenie", name:"Dostęp do Usługi z wykorzystaniem dodatkowego urządzenia",
											selectedByDefault: false,
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.18 }
											]
										},
									],
								},
							]
						},
						{ id: "osiedlowa", name: "Oferta OSIEDLOWA",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 13.14 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 23.14 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 33.14 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "blue_box", name: "Blue Box",
									 components: [
										{ name: "Blue Box", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 30.98 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 46.98 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 66.98 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
						{ id: "standard", name: "Super Box",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 51.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 67.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 72.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 103.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 54.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 83.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 108.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 24.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 194.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
						{ id: "super_box_kdr", name: "Super Box KDR",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 64.12 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 69.12 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 98.12 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 52.54 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 79.54 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 103.54 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 185.54 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
						{ id: "blue_box_net", name: "Blue Box TV + NET",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 31.13 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 41.13 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 51.13 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "blue_box", name: "Blue Box",
									 components: [
										{ name: "Blue Box", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 46.39 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.00 },
											]
										},
									],
								},
							]
						},
						{ id: "blue_box_net_3x0", name: "Blue Box TV + NET 3x0",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from: 1, to: 3, price: 0.00 },
										{ from:4, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from: 1, to: 3, price: 0.00 },
										{ from:4, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 26.13 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 36.13 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 46.13 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 4.99 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "blue_box", name: "Blue Box",
									 components: [
										{ name: "Blue Box", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 41.39 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 5.00 },
											]
										},
									],
								},
							]
						},
						{ id: "dla_dwojga", name: "Dla Dwojga",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 57.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 62.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 67.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 103.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 37.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 63.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 89.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 175.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
							]
						},
						{ id: "trzymaj_z_nami", name: "Trzymaj z nami",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 46.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 65.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 70.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 106.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 51.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 77.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 103.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 189.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
						{ id: "trzymaj_z_nami_kdr", name: "Trzymaj z nami KDR",
							globalFees:[
								{
									id:"remote_support",
									name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{
									id:"telecom_fee",
									name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							internetPackages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 62.64 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 67.64 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 101.64 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
							],
							tvPackages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 49.39 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 74.39 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									components: [ 
										{ name: "L BOX",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 99.39 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 180.39 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
					]
				}
			]
		},
		{ id: "internet_swiatlowodowy", name: "Internet światłowodowy",  
			contracts: [
				{ id: "3", type: "fixed", months: 12, name: "3 miesiące", 
					offers: [
						{ id: "sezonowy", name: "Internet Sezonowy",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:3, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:3, price:4.99 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_50", name: "Internet 50 Mb/s",
									 components: [
										{ name: "Internet 50 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 3, price: 69.00 },
												{ from: 4, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_100", name: "Internet 100 Mb/s",
									 components: [
										{ name: "Internet 100 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 3, price: 79.00 },
												{ from: 4, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_150", name: "Internet 150 Mb/s",
									 components: [
										{ name: "Internet 150 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 3, price: 69.00 },
												{ from: 4, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 3, price: 79.00 },
												{ from: 4, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									 components: [
										{ name: "Internet 650 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 3, price: 89.00 },
												{ from: 4, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 3, price: 99.00 },
												{ from: 4, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
							]
						}
					]
				},
				{ id: "5", type: "fixed", months: 12, name: "5 miesięcy", 
					offers: [
						{ id: "sezonowy", name: "Internet Sezonowy",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:5, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:5, price:4.99 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_50", name: "Internet 50 Mb/s",
									 components: [
										{ name: "Internet 50 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 5, price: 59.00 },
												{ from: 6, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_100", name: "Internet 100 Mb/s",
									 components: [
										{ name: "Internet 100 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 5, price: 69.00 },
												{ from: 6, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_150", name: "Internet 150 Mb/s",
									 components: [
										{ name: "Internet 150 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 5, price: 59.00 },
												{ from: 6, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 5, price: 69.00 },
												{ from: 6, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									 components: [
										{ name: "Internet 650 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 5, price: 79.00 },
												{ from: 6, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 69.00,
											priceSchedule: [
												{ from: 1, to: 5, price: 89.00 },
												{ from: 6, to: 12, price: 10.00 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
							]
						}
					]
				},
				{ id: "10", type: "fixed", months: 10, name: "10 miesięcy", 
					offers: [
						{ id: "strzal_w_10", name: "Strzał w 10",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:10, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:10, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 29.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.18 },
												{ from: 2, to: 10, price: 46.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.09 },
												{ from: 2, to: 10, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 29.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.18 },
												{ from: 2, to: 10, price: 67.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.09 },
												{ from: 2, to: 10, price: 4.99 }
											]
										}
									],
								},
							]
						}
					]
				},
				{ id: "12", type: "fixed", months: 12, name: "12 miesięcy", 
					offers: [
						{ id: "studencki_raj", name: "Studencki Raj",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:9, price:3.69 },
										{ from:10, to:12, price:1.60 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 9, price: 41.12 },
												{ from: 10, to: 12, price: 11.60 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 9, price: 4.99 },
												{ from: 10, to: 12, price: 1.60 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 9, price: 51.11 },
												{ from: 10, to: 12, price: 21.60 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 9, price: 4.99 },
												{ from: 10, to: 12, price: 1.60 }
											]
										}
									],
								},
							]
						},
						{ id: "standard", name: "Super Net",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 45.14 },
												{ from: 2, to: 12, price: 56.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 10.36 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 77.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 10.36 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 82.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 113.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 15.54 }
											]
										}
									],
								},
							]
						},
						{ id: "trzymaj_z_nami", name: "Trzymaj z nami",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 51.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 75.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 80.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.39 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 116.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.39 }
											]
										}
									],
								},
							]
						},
						{ id: "stop_extra_net", name: "STOP EXTRA NET",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 33.87 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 44.23 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 4.99 }
											]
										}
									],
								},
							]
						}
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "strzal_w_10", name: "Strzał w 10",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 29.99,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.18 },
												{ from: 4, to: 24, price: 46.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.09 },
												{ from: 4, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 29.99,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.18 },
												{ from: 4, to: 24, price: 67.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.09 },
												{ from: 4, to: 24, price: 4.99 }
											]
										}
									],
								},
							]
						},
						{ id: "osiedlowa", name: "Oferta OSIEDLOWA",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 16.12 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 26.12 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									components: [ 
										{ name: "Internet 800 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 36.12 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										}
									],
								},
							]
						},
						{ id: "standard", name: "Super Net",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 40.14 },
												{ from: 2, to: 24, price: 51.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.36 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 67.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.36 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 72.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 15.54 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 103.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 15.54 }
											]
										}
									],
								},
							]
						},
						{ id: "net+hbo", name: "Kontynuacja Net + HBO",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 27.32 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 9.99 }
											]
										},
										{ id: "hbo_max", name: "Pakiet HBO Max",
											selectedByDefault: true,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.99 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 47.32 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 9.99 }
											]
										},
										{ id: "hbo_max", name: "Pakiet HBO Max",
											selectedByDefault: true,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.99 }
											]
										}
									],
								},
							]
						},
						{ id: "trzymaj_z_nami", name: "Trzymaj z nami",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_swiatlowodowy_120", name: "Internet 120 Mb/s",
									 components: [
										{ name: "Internet 120 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 46.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_300", name: "Internet 300 Mb/s",
									 components: [
										{ name: "Internet 300 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 65.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_650", name: "Internet 650 Mb/s",
									components: [ 
										{ name: "Internet 650 Mb/s",
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 70.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
								{ id: "internet_swiatlowodowy_800", name: "Internet 800 Mb/s",
									 components: [
										{ name: "Internet 800 Mb/s", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 106.99 }
											]
										}
									],
									options: [
										{ id: "modem", name: "Modem",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.39 }
											]
										}
									],
								},
							]
						},
					]
				}
			]
		},
		{ id: "internet_mobilny", name: "Internet mobilny",  
			contracts: [
				{ id: "12", type: "fixed", months: 12, name: "12 miesięcy", 
					offers: [
						{ id: "mobil_net", name: "Mobil NET",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_mobilny_10", name: "Mobil Net 10 GB",
									 components: [
										{ name: "Mobil Net 10 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 29.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_30", name: "Mobil Net 30 GB",
									 components: [
										{ name: "Mobil Net 30 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 39.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_100", name: "Mobil Net 100 GB + NOC 100 GB",
									 components: [
										{ name: "Mobil Net 100 GB + NOC 100 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 59.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_200", name: "Mobil Net 200 GB + NOC 200 GB",
									 components: [
										{ name: "Mobil Net 200 GB + NOC 200 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 79.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_500", name: "Mobil Net 500 GB",
									 components: [
										{ name: "Mobil Net 500 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 119.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
							]
						}
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "mobil_net", name: "Mobil NET",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "internet_mobilny_10", name: "Mobil Net 10 GB",
									 components: [
										{ name: "Mobil Net 10 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_30", name: "Mobil Net 30 GB",
									 components: [
										{ name: "Mobil Net 30 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_100", name: "Mobil Net 100 GB + NOC 100 GB",
									 components: [
										{ name: "Mobil Net 100 GB + NOC 100 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 44.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_200", name: "Mobil Net 200 GB + NOC 200 GB",
									 components: [
										{ name: "Mobil Net 200 GB + NOC 200 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 64.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
								{ id: "internet_mobilny_500", name: "Mobil Net 500 GB",
									 components: [
										{ name: "Mobil Net 500 GB", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 109.90 }
											]
										}
									],
									options: [
										{ id: "dzierzawa_modemu_lte", name: "Dzierżawa Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.00 }
											]
										},
										{ id: "zakup_modemu_lte", name: "Zakup Modemu LTE",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 250.00 }
											]
										}
									],
								},
							]
						}
					]
				},
			]
		},
		{ id: "telewizja_cyfrowa", name: "Telewizja cyfrowa",  
			contracts: [
				{ id: "12", type: "fixed", months: 12, name: "12 miesięcy", 
					offers: [
						{ id: "standard", name: "Super TV",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 55.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 98.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									]
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 124.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									]
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 215.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									]
								},
							]
						},
						{ id: "trzymaj_z_nami", name: "Trzymaj z nami",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 55.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 92.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									]
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 118.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									]
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 204.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 12, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									]
								},
							]
						},
						{ id: "stop_extra_tv", name: "STOP EXTRA TV",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 41.11 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 61.11 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 },
											]
										},
									]
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 81.11 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 0.00 }
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:12, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 },
											]
										},
									]
								},
							]
						}
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "standard", name: "Super TV",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 55.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 88.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 114.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 79.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 205.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.27 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
						{ id: "blue_box", name: "Blue Box",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "blue_box", name: "Blue Box",
									 components: [
										{ name: "Blue Box", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 42.51 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.00 },
											]
										},
									],
								},
							],
						},
						{ id: "kino", name: "KINO+",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "Start BOX", selectedByDefault: true,
									 components: [
										{ name: "Start BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 31.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: true,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: true,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: true,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
							],
						},
						{ id: "kibic", name: "KIBIC+",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "m_box", name: "M BOX", selectedByDefault: true,
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 67.50 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport",
											selectedByDefault:true,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: true,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 0.00 },
												{ from: 4, to: 24, price: 10.36 }
											]
										},
									],
								},
							],
						},
						{ id: "dla_dwojga", name: "Dla Dwojga",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 39.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 67.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 93.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 179.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
									],
								},
							]
						},
						{ id: "trzymaj_z_nami", name: "Trzymaj z nami",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "start_box", name: "START BOX",
									 components: [
										{ name: "START BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 55.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "m_box", name: "M BOX",
									 components: [
										{ name: "M BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 82.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
										{ id:"pakiet_sport", name:"Pakiet SPORT",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
										{ id:"pakiet_rozrywka", name:"Pakiet ROZRYWKA",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_odkrywcy", name:"Pakiet ODKRYWCY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 },
											]
										},
										{ id:"pakiet_bajki", name:"Pakiet BAJKI",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 },
											]
										},
										{ id:"pakiet_familijny", name:"Pakiet FAMILIJNY",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 },
											]
										},
									],
								},
								{ id: "l_box", name: "L BOX",
									 components: [
										{ name: "L BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 108.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
								{ id: "xxl_box", name: "XXL BOX",
									 components: [
										{ name: "XXL BOX", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 194.99 }
											]
										}
									],
									options: [
										{ id: "dekoder", name: "Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 4.99 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 5.00 },
											]
										},
										{ id:"eleven_sports", name:"Eleven Sports",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 },
											]
										},
										{ id:"cinemax", name:"Cinemax",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 },
											]
										},
										{ id:"canal_seriale", name:"CANAL+ Seriale i Filmy", group:"canal",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 },
											]
										},
										{ id:"canal_sport", name:"CANAL+ Super Sport", group:"canal",
											selectedByDefault:false,
											activationFee: 1.23,
											priceSchedule:[
												{ from:1, to:24, price:65.00 }
											]
										},
										{ id:"hbo_hd", name:"HBO HD",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 },
											]
										},
										{ id:"hbo_hd_max", name:"HBO Max", dependsOn:"hbo_hd",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 },
											]
										},
										{ id:"hbo_max", name:"HBO Max (solo)",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 },
											]
										},
										{ id:"tv_republika", name:"TV Republika",
											selectedByDefault: false,
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 },
											]
										},
										{ id:"eurosport", name:"Eurosport",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 },
											]
										},
										{ id:"eurosport_cinemax", name:"Eurosport + Cinemax",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 },
											]
										},
										{ id:"eurosport_eleven", name:"Eurosport + Eleven Sports",
											selectedByDefault: false,
											activationFee: 0.00,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 },
											]
										},
									],
								},
							]
						},
					],
				},
			]
		},
		{ id: "premium", name: "Premium TV",  
			contracts: [
				{ id: "12", type: "fixed", months: 12, name: "12 miesięcy", 
					offers: [
						{ id: "pakiety_tematyczne", name: "Pakiety tematyczne",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "pakiet_sport", name: "Pakiet SPORT",
									 components: [
										{ name: "Pakiet SPORT", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 }
											]
										}
									],
									options: [
									],
								},
								{ id: "pakiet_rozrywka", name: "Pakiet ROZRYWKA",
									 components: [
										{ name: "Pakiet ROZRYWKA", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 }
											]
										}
									],
									options: [
									]
								},
								{ id: "pakiet_odkrywcy", name: "Pakiet ODKRYWCY",
									 components: [
										{ name: "Pakiet ODKRYWCY", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 31.08 }
											]
										}
									],
									options: [
									]
								},
								{ id: "pakiet_bajki", name: "Pakiet BAJKI",
									 components: [
										{ name: "Pakiet BAJKI", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 15.54 }
											]
										}
									],
									options: [
									]
								},
								{ id: "pakiet_familijny", name: "Pakiet FAMILIJNY",
									 components: [
										{ name: "Pakiet FAMILIJNY", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 23.31 }
											]
										}
									],
									options: [
									]
								},
							]
						},
						{ id: "pakiety_premium", name: "Pakiety Premium",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "eleven_sports", name: "Eleven Sports",
									 components: [
										{ name: "Eleven Sports", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.90 }
											]
										}
									],
									options: [
									],
								},
								{ id: "cinemax", name: "Cinemax",
									 components: [
										{ name: "Cinemax", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 10.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "canal_seriale", name: "CANAL+ Seriale i Filmy",
									 components: [
										{ name: "CANAL+ Seriale i Filmy", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 25.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "canal_sport", name: "CANAL+ Super Sport",
									 components: [
										{ name: "CANAL+ Super Sport", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 65.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "hbo_hd", name: "HBO HD",
									 components: [
										{ name: "HBO HD", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 38.00 }
											]
										}
									],
									options: [
										{ 
											id: "hbo_hd_max", name: "HBO Max",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.90 }
											]
										}
									],
								},
								{ id: "hbo_max", name: "HBO Max",
									 components: [
										{ name: "HBO Max", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 34.90 }
											]
										}
									],
									options: [
									]
								},
								{ id: "tv_republika", name: "TV Republika",
									 components: [
										{ name: "TV Republika", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 5.40 }
											]
										}
									],
									options: [
									]
								},
								{ id: "eurosport", name: "Eurosport",
									 components: [
										{ name: "Eurosport", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										}
									],
									options: [
									]
								},
							]
						},
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "pakiety_tematyczne", name: "Pakiety tematyczne",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "pakiet_sport", name: "Pakiet SPORT",
									 components: [
										{ name: "Pakiet SPORT", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 }
											]
										}
									],
									options: [
									],
								},
								{ id: "pakiet_rozrywka", name: "Pakiet ROZRYWKA",
									 components: [
										{ name: "Pakiet ROZRYWKA", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 }
											]
										}
									],
									options: [
									]
								},
								{ id: "pakiet_odkrywcy", name: "Pakiet ODKRYWCY",
									 components: [
										{ name: "Pakiet ODKRYWCY", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.72 }
											]
										}
									],
									options: [
									]
								},
								{ id: "pakiet_bajki", name: "Pakiet BAJKI",
									 components: [
										{ name: "Pakiet BAJKI", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.36 }
											]
										}
									],
									options: [
									]
								},
								{ id: "pakiet_familijny", name: "Pakiet FAMILIJNY",
									 components: [
										{ name: "Pakiet FAMILIJNY", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 15.54 }
											]
										}
									],
									options: [
									]
								},
							]
						},
						{ id: "pakiety_premium", name: "Pakiety Premium",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "eleven_sports", name: "Eleven Sports",
									 components: [
										{ name: "Eleven Sports", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.90 }
											]
										}
									],
									options: [
									],
								},
								{ id: "cinemax", name: "Cinemax",
									 components: [
										{ name: "Cinemax", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 10.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "canal_seriale", name: "CANAL+ Seriale i Filmy",
									 components: [
										{ name: "CANAL+ Seriale i Filmy", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 25.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "canal_sport", name: "CANAL+ Super Sport",
									 components: [
										{ name: "CANAL+ Super Sport", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 65.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "hbo_hd", name: "HBO HD",
									 components: [
										{ name: "HBO HD", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.00 }
											]
										}
									],
									options: [
										{ 
											id: "hbo_hd_max", name: "HBO Max",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 1.90 }
											]
										}
									],
								},
								{ id: "hbo_max", name: "HBO Max",
									 components: [
										{ name: "HBO Max", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.90 }
											]
										}
									],
									options: [
									]
								},
								{ id: "tv_republika", name: "TV Republika",
									 components: [
										{ name: "TV Republika", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 5.40 }
											]
										}
									],
									options: [
									]
								},
								{ id: "eurosport", name: "Eurosport",
									 components: [
										{ name: "Eurosport", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 1, price: 0.00 },
												{ from: 2, to: 24, price: 10.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "eurosport_cinemax", name: "Eurosport + Cinemax",
									 components: [
										{ name: "Eurosport + Cinemax", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 17.00 }
											]
										}
									],
									options: [
									]
								},
								{ id: "eurosport_eleven", name: "Eurosport + Eleven Sports",
									 components: [
										{ name: "Eurosport + Eleven Sports", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 20.00 }
											]
										}
									],
									options: [
									]
								},
							]
						},
					]
				}
			]
		},
		{ id: "abonament_komorkowy", name: "Abonament komórkowy",  
			contracts: [
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "standard", name: "FON MOBIL",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "fon_s", name: "FON S",
									 components: [
										{ name: "FON S", 
											activationFee: 19.90,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_m", name: "FON M",
									 components: [
										{ name: "FON M", 
											activationFee: 19.90,
											priceSchedule: [
												{ from: 1, to: 24, price: 27.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_l", name: "FON L",
									 components: [
										{ name: "FON L", 
											activationFee: 19.90,
											priceSchedule: [
												{ from: 1, to: 24, price: 34.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_xl", name: "FON XL",
									 components: [
										{ name: "FON XL", 
											activationFee: 19.90,
											priceSchedule: [
												{ from: 1, to: 24, price: 49.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_euro", name: "FON EURO",
									 components: [
										{ name: "FON EURO", 
											activationFee: 19.90,
											priceSchedule: [
												{ from: 1, to: 24, price: 49.90 }
											]
										}
									],
									options: [
									],
								},
							]
						},
						{ id: "dwa_plus_jeden", name: "DWA PLUS JEDEN",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "fon_m", name: "FON M",
									 components: [
										{ name: "FON M", 
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.99 }
											]
										}
									],
									options: [
										{ id: "drugi_abonament", name: "Drugi abonament",
											selectedByDefault: false,
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.99 }
											]
										},
										{ id: "trzeci_abonament", name: "Trzeci abonament", dependsOn:"drugi_abonament",
											selectedByDefault: false,
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.99 }
											]
										},
										{ id: "czwarty_abonament", name: "Czwarty abonament", dependsOn:"trzeci_abonament",
											selectedByDefault: false,
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.99 }
											]
										}
									],
								},
								{ id: "fon_xl", name: "FON XL",
									 components: [
										{ name: "FON XL", 
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.99 }
											]
										}
									],
									options: [
										{ id: "drugi_abonament", name: "Drugi abonament",
											selectedByDefault: false,
											activationFee: 4.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 29.99 }
											]
										}
									],
								},
							]
						},
						{ id: "drugi_numer_za_50", name: "Drugi numer za 50%",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "fon_s", name: "FON S",
									 components: [
										{ name: "FON S", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 19.99 }
											]
										}
									],
									options: [
										{ id: "drugi_abonament", name: "Drugi abonament",
											selectedByDefault: false,
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 9.99 }
											]
										},
									],
								},
							]
						}
					]
				},
			]
		},
		{ id: "telefon_stacjonarny", name: "Telefon stacjonarny",  
			contracts: [
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "standard", name: "FON DOMOWY",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "fon_senior", name: "FON DOMOWY Senior",
									 components: [
										{ name: "FON DOMOWY Senior", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 1.23 },
												{ from: 4, to: 24, price: 5.05 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_startowy", name: "FON DOMOWY Startowy",
									 components: [
										{ name: "FON DOMOWY Startowy", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 1.23 },
												{ from: 4, to: 24, price: 10.09 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_150", name: "FON DOMOWY 150",
									 components: [
										{ name: "FON DOMOWY 150", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 1.23 },
												{ from: 4, to: 24, price: 17.22 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_500", name: "FON DOMOWY 500",
									 components: [
										{ name: "FON DOMOWY 500", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 1.23 },
												{ from: 4, to: 24, price: 39.90 }
											]
										}
									],
									options: [
									],
								},
								{ id: "fon_2000", name: "FON DOMOWY 2000",
									 components: [
										{ name: "FON DOMOWY 2000", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 3, price: 1.23 },
												{ from: 4, to: 24, price: 59.90 }
											]
										}
									],
									options: [
									],
								},
							]
						},
					]
				},
			]
		},
		{ id: "open_tv", name: "Open TV",  
			contracts: [
				{ id: "12", type: "fixed", months: 12, name: "12 miesiące", 
					offers: [
						{ id: "standard", name: "SMART TV",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "smart_s", name: "SMART S",
									 components: [
										{ name: "SMART S", 
											activationFee: 9.99,
											priceSchedule: [
												{ from:1 , to: 12, price: 13.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 8.28 },
											]
										},
									],
								},
								{ id: "smart_m", name: "SMART M",
									 components: [
										{ name: "SMART M", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 43.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 8.28 },
											]
										},
									],
								},
								{ id: "smart_l", name: "SMART L",
									 components: [
										{ name: "SMART L", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 12, price: 58.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 12, price: 8.28 },
											]
										},
									],
								},
							]
						},
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "standard", name: "SMART TV",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "smart_s", name: "SMART S",
									 components: [
										{ name: "SMART S", 
											activationFee: 9.99,
											priceSchedule: [
												{ from:1 , to: 24, price: 8.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
								{ id: "smart_m", name: "SMART M",
									 components: [
										{ name: "SMART M", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 38.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
								{ id: "smart_l", name: "SMART L",
									 components: [
										{ name: "SMART L", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 24, price: 53.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
							]
						},
					]
				},
				{ id: "indefinite", type: "indefinite", months:null, name: "Bez okresu zobowiązania", 
					offers: [
						{ id: "standard", name: "SMART TV",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:null, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:null, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "smart_s", name: "SMART S",
									 components: [
										{ name: "SMART S", 
											activationFee: 9.99,
											priceSchedule: [
												{ from:1 , to: null, price: 23.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: null, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: null, price: 8.28 },
											]
										},
									],
								},
								{ id: "smart_m", name: "SMART M",
									 components: [
										{ name: "SMART M", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: null, price: 48.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: null, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: null, price: 8.28 },
											]
										},
									],
								},
								{ id: "smart_l", name: "SMART L",
									 components: [
										{ name: "SMART L", 
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: null, price: 63.57 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: null, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: null, price: 8.28 },
											]
										},
									],
								},
							]
						},
					]
				},
			]
		},
		{ id: "internet_radiowy", name: "Internet radiowy",  
			contracts: [
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "standard", name: "Net Radiowy",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "radio_20", name: "Internet radiowy 20/4 Mb/s",
									 components: [
										{ name: "Internet radiowy 20/4 Mb/s", 
											activationFee: 49.75,
											priceSchedule: [
												{ from:1 , to: 24, price: 57.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "radio_40", name: "Internet radiowy 30/6 Mb/s",
									 components: [
										{ name: "Internet radiowy 30/6 Mb/s", 
											activationFee: 49.75,
											priceSchedule: [
												{ from: 1, to: 24, price: 77.99 }
											]
										}
									],
									options: [
									],
								},
							]
						},
					]
				},
			]
		},
		{ id: "dodatkowe_urzadzenia", name: "Dodatkowe urządzenia",  
			contracts: [
				{ id: "12", type: "fixed", months: 12, name: "12 miesięcy", 
					offers: [
						{ id: "dodatkowe_urzadzenie", name: "Dodatkowe Urządzenie",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "usluga_dodatkowe_urzadzenie", name: "Usługa z wykorzystaniem dodatkowego urządzenia",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia", 
											activationFee: 19.90,
											priceSchedule: [
												{ from:1 , to: 12, price: 17.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "usluga_dodatkowe_urzadzenie_mini", name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI", 
											activationFee: 9.90,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										}
									],
									options: [
									],
								},
							]
						},
						{ id: "dodatkowe_urzadzenie_stop", name: "Dodatkowe Urządzenie STOP",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:12, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:12, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "usluga_dodatkowe_urzadzenie", name: "Usługa z wykorzystaniem dodatkowego urządzenia",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia", 
											activationFee: 1.23,
											priceSchedule: [
												{ from:1 , to: 12, price: 17.99 }
											]
										}
									],
									options: [
									],
								},
								{ id: "usluga_dodatkowe_urzadzenie_mini", name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 12, price: 14.99 }
											]
										}
									],
									options: [
									],
								},
							]
						},
					]
				},
				{ id: "24", type: "fixed", months: 24, name: "24 miesiące", 
					offers: [
						{ id: "dodatkowe_urzadzenie", name: "Dodatkowe Urządzenie",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "usluga_dodatkowe_urzadzenie", name: "Usługa z wykorzystaniem dodatkowego urządzenia",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia", 
											activationFee: 19.90,
											priceSchedule: [
												{ from:1 , to: 24, price: 17.99 }
											]
										}
									],
									options: [
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 3, price: 3.73 },
												{ from: 4, to: 24, price: 7.49 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
								{ id: "usluga_dodatkowe_urzadzenie_mini", name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI", 
											activationFee: 9.90,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										}
									],
									options: [
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 3, price: 3.73 },
												{ from: 4, to: 24, price: 7.49 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
							]
						},
						{ id: "dodatkowe_urzadzenie_stop", name: "Dodatkowe Urządzenie STOP",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "usluga_dodatkowe_urzadzenie", name: "Usługa z wykorzystaniem dodatkowego urządzenia",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia", 
											activationFee: 1.23,
											priceSchedule: [
												{ from:1 , to: 24, price: 17.99 }
											]
										}
									],
									options: [
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 3, price: 3.73 },
												{ from: 4, to: 24, price: 7.49 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
								{ id: "usluga_dodatkowe_urzadzenie_mini", name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI",
									 components: [
										{ name: "Usługa z wykorzystaniem dodatkowego urządzenia MINI", 
											activationFee: 1.23,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										}
									],
									options: [
										{ id:"smart_tv", name:"SMART TV",
											selectedByDefault: false,
											activationFee: 9.99,
											priceSchedule: [
												{ from: 1, to: 3, price: 3.73 },
												{ from: 4, to: 24, price: 7.49 }
											]
										},
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV", dependsOn:"smart_tv",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
									],
								},
							]
						},
						{ id: "multiscreen", name: "Multiscreen N-MR",
							globalFees:[
								{ id:"remote_support", name:"Wsparcie zdalne usługi",
									priceSchedule:[
										{ from:1, to:24, price:10.19 }
									]
								},
								{ id:"telecom_fee", name:"Opłata telekomunikacyjna",
									priceSchedule:[
										{ from:1, to:24, price:3.69 }
									]
								}
							],
							packages: [
								{ id: "multiscreen_smart_tv", name: "MULTISCREEN SMART TV",
									 components: [
										{ name: "MULTISCREEN SMART TV", 
											activationFee: 9.99,
											priceSchedule: [
												{ from:1 , to: 3, price: 7.99 },
												{ from:4 , to: 24, price: 9.99 }
											]
										}
									],
									options: [
										{ id:"dekoder_smart_tv", name:"Dekoder SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 14.99 }
											]
										},
										{ id:"nieliniowe_smart_tv", name:"Dostęp do usług nieliniowych SMART TV",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 8.28 },
											]
										},
										{ id:"dekoder", name:"Dekoder",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 0.00 }
											]
										},
										{ id:"usluga_dodatkowe_urzadzenie", name:"Usługa z wykorzystaniem dodatkowego urządzenia",
											selectedByDefault: false,
											priceSchedule: [
												{ from: 1, to: 24, price: 7.99 }
											]
										},
									],
								},
							]
						},
					]
				},
			]
		},
	]
};

console.log("We are here.");

total_appliances = [
    {
        appliance: "",
        quantity: "",
        wattage: "",
        time: ""
    }
];


function clearAll() {

}

function solar_calculator(form) {
    console.log(total_appliances[0].appliance);
    for (i = 0; i < total_appliances.length; i++) {
        qty = form.amount.value;
        hrs = form.hour.value;
        wattage = form.kWh.value;
        times = qty * hrs;
        console.log(times);
    };
}
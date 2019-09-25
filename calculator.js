console.log("We are here.");

total_appliances = [
    {
        quantity: "",
        wattage: "",
        time: ""
    }
];
// let input_result = form.appliance;

function more_input() {
    let add_input = document.querySelector("#add_input");
    let add_content = add_input.content;
    document.querySelector("#inputs").appendChild(add_content);
    // console.log("we cool?");
    // let input = document.querySelector("#add_input");
    // document.querySelector("inputs").append(input);
}

// function clearAll() {

// }

// function solar_calculator() {
//     console.log(total_appliances[0].appliance);
//     for (i = 0; i < total_appliances.length; i++) {
//         qty = form.amount.value;
//         hrs = form.hour.value;
//         wattage = form.kWh.value;
//         times = qty * hrs;
//         console.log(times);
//     };
// }
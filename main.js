$(document).ready(function(){
    $('#email').on('focus',function(){
           
            $(this).animate({
                "width" : "320px"
            }, 500)
            $('#calc').animate({
                "left": "+=50"
            }, 500)
    })
    $('#email').on('blur',function(){
            console.log($(this))
            $(this).animate({
                "width" : "270px"
            }, 500)
            $('#calc').animate({
                "left": "-=50"
            }, 500)
    })

   
    let count = 2; 
    let total = 0;
    let report, details, residence, sunHours, panels, hourlyEnergyRequired, product;
    
    
    let obj = []

    let ratings = {
                    "LED Light Bulb":10,"CFL Light Bulb":14, "Incandescent Bulb":60,"LCD/LED TV/DISPLAY":90,"Plasma":150,
                    "CRT MONITOR":120, "Game Console":200, "Desktop(minus display)":300, "Laptop":60, "Wi-Fi Router":6,
                    "Printer":500, "DVR":30, "Cell Phone Charger":6, "Cordless Phone":3, "Alarm Clock Radio":2, "Electric Furnace":18000,
                    "Space Heater":1500, "Water Heater":4000, "Central Air Conditioner":3500, "Air Conditional":1500, "Washing Machine":1000,
                    "Clothes Dryer":3000, "Cooking Stove Top":1500, "Electric Oven":2400, "DishWasher":1800, "Freezer":100,
                    "Refrigerator":400, "Coffee Maker":800, "Microwave":1200, "Toaster":1200, "Hair Dryer":1500, "Iron":1100,"Vacuum":1400,
                    "Ceiling Fan":75
                 }
    let states = {
                    Abia :5,"Adamawa": 9,"Akwa Ibom": 5,"Anambra": 5.5,"Bauchi": 8.5,"Bayelsa": 5.5,"Benue": 7.5,"Borno": 11,"Cross River": 5,"Delta": 4.5,
                    "Ebonyi": 5.5, "Enugu": 5, "Edo": 6, "Ekiti": 5.5, "Gombe": 9.5, "Imo": 6, "Jigawa": 9.5, "Kaduna": 10.5, "Kano": 10.5, "Katsina": 11,
                    "Kebbi": 11,"Kogi": 7.5, "Kwara": 6.5, "Lagos": 6, "Nasarawa": 8.5, "Niger": 9, "Ogun": 5.5, "Ondo": 5, "Osun": 5, "Oyo": 5.5, "Plateau": 9,
                    "Rivers": 6, "Sokoto": 10.5, "Taraba": 10, "Yobe": 9.5, Zamfara: 10.5, "Abuja": 8 }
    
    const createRow =()=> {
        count++

    let newRow = `<div id="entry-${count}" class="entry"><select id="appliance-${count}" class="appliances" required>
                  <option value="" selected hidden>Select Appliance</option>
                </select>
                <input id="qty-${count}" class="qty" value="1" min="0" max="999" type="number">
                <input id="rating-${count}" value=0 class="watts" type=text disabled/>
                <input id="hours-${count}" class="hours" min="0" max="24" step="1" value="0" type="number">
                <input id="daily-${count}" class="daily" value="0" type=text>
                <button class="remove-row">Remove</button></div>`
       
                $('#entries').append(newRow)
                // let element =  $('.appliances')
                populateList(ratings, $('.appliances'))
            }

    const populateList =(array, element) =>{
        
        element.select2({
        data: Object.keys(array)
     })
    }

    populateList(states, $('#sunhours') )
    populateList(ratings, $('.appliances'))

    const recommendProduct = (hourlyEnergyRequired)=>{
        let offer='';
        switch(true){
            case hourlyEnergyRequired < 1000:
                    offer = "Muses 1kw Flexible Monocrystalline Solar Panels";
                    console.log('I am here 1')
                    break;
            case hourlyEnergyRequired < 5000:
                    offer = "Muses 2-5kw Foldable Solar Panels"
                    break;
            case hourlyEnergyRequired < 7000:
                    offer = "Muses 7kw Polycrystalline High Efficient Solar Panels";
                    break;
            case hourlyEnergyRequired < 10000:
                    offer = "Muses 10kw Polycrystalline Solar Panels";
                    break;
            default: 
                    offer = "Muses Industrial Workhorse Polycrystalline Solar Panels";
        }
        return offer;
    }
    
    $('#worksheet').on('change', '.appliances', function(){
    
       let sequence = this.id.split('-')[1]   
       let index = Object.keys(ratings).indexOf($(this).val());
       if(index >= 0){console.log(Object.values(ratings)[index])
        
            $(`#rating-${sequence}`).val(Object.values(ratings)[index])
        }else{
            $(`#rating-${sequence}`).val(0)

        }
     })

     $('#worksheet').on('change', 'input, select', function(){
        
         let sequence = this.id.split('-')[1]
           let perdevice= $(`#qty-${sequence}`).val() * $(`#rating-${sequence}`).val() * $(`#hours-${sequence}`).val() 
           parseFloat($(`#daily-${sequence}`).val(perdevice)).toFixed(2)
        
     })

     $('#sunhours').on('change', function(){
        
       residence = sunhours.value
       let index = Object.keys(states).indexOf(residence);
       if(index >= 0){console.log(Object.values(states)[index])
            $('#watts').val(Object.values(states)[index])
            sunHours = Object.values(states)[index]
        }
     })

     $('#add-Row').on('click', function(){
        
         createRow(ratings)
     })

     $('#worksheet').on('click', '.remove-row', function(){
            
            $(this).closest('div').remove()
     })

     $('#calc-02').on('click', function(){
         
       if(residence !== undefined){
             
        $('.appliances').each(function(index, value){
            obj[index] = {};
            obj[index].appliances = ($(this).val())
        })

        $('.qty').each(function(index, value){
            obj[index].quantity = ($(this).val())
        })

        $('.watts').each(function(index, value){
            obj[index].rating = ($(this).val())
        })

        $('.hours').each(function(index, value){
            obj[index].hours = ($(this).val())
        })

        $('.daily').each(function(index, value){
            obj[index].consumptionPerDevice = ($(this).val())
            total += +($(this).val())
            hourlyEnergyRequired = (total / sunHours).toFixed(2)
            panels = Math.ceil(hourlyEnergyRequired / 320)
            
        })
        product = recommendProduct(hourlyEnergyRequired)
        details = `Dear <b>${email}</b>,
              Your daily energy need is <strong>${total}</strong> wattshr. The average sun-hours in <b>${residence}</b> is <b>${sunHours}</b>hours. Hence, you will need <b>${panels}</b> solar panel(s) to provide an average of <b>${hourlyEnergyRequired}</b> watts per sun-hour. Armed with this information, we would like to recommend our <b>${product}</b>.`
    
              $('#analysis').html(details)
       }else{
           console.log('fill')
           $('#guide').html('<p style="color:red; font-weight:bold; font-size:1.5em;">Please enter your location</p>')
       }
     })

     

     let obj1 = [{appliances: "Space Heater", quantity: "5", rating: "1500", hours: "1", consumptionPerDevice: "7500"}, {appliances: "CFL Light Bulb", quantity: "5", rating: "14", hours: "1", consumptionPerDevice: "70"},{appliances: "Iron", quantity: "4", rating: "1100", hours: "1.5", consumptionPerDevice: "6600"}]
        let dataEntry_appliances = [];
        let dataEntry_powerConsumption = [];
        let  dataEntry_states = []
        let dataEntry_sunhours = []
        for (let i=0; i<obj.length; i++){
            // console.log(dataEntry[i].appliances, dataEntry[i].consumptionPerDevice)
            dataEntry_appliances.push(obj[i].appliances)
            dataEntry_powerConsumption.push(obj[i].consumptionPerDevice)
        }

        for(key in states){
            dataEntry_states.push(key)
            dataEntry_sunhours.push(states[key])
        }

        // createCharts('myChart_P','bar',dataEntry_appliances,dataEntry_powerConsumption, 'Your Power Consumption by Appliance' )
        // createCharts('myChart_S','line',dataEntry_states,dataEntry_sunhours, 'Sun Hours by State' )

        let email = JSON.parse(localStorage.getItem('userData'))|| '';
        $('.loading').on('click', function(){
            
            email = $('#email').val()
            if(email){
                localStorage.setItem('userData', JSON.stringify(email))
                console.log(email)
                window.location.href = "index2.html"
            }else{
                $('#email').addClass('error')
                $('#errorMessage').html("<span class='errMessage' style='color: red;'>Please Enter Your Email<span>")
                 
            }
    })

    $('#reset').on('click', function(){
        
        $("input[type=text], input[type=number]").val("0");
        $('#analysis').html('');
        // $('#appliance-0').val($('#appliance-0').prop('selected'));
        // $('select').val('');
    
    })



function createCharts(element, choice, xArray, yArray, title){
    var ctx = document.getElementById(element).getContext('2d');
    console.log(choice, xArray, yArray)
        var myChart = new Chart(ctx, {
        type: choice, 
        data: {
            labels: xArray, 
            datasets: [{
                label: title,
                data: yArray, 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}



    
})
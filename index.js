console.log('script linked')

// Global Vars
const convertInputVal = document.getElementById("convert-value")
//console.log(convertInputVal.value)
    // lookup textChange(IDFK?) event listen to capture text input value changes

const convertBtn = document.getElementById("convert-btn")
//console.log(convertBtn)

// for each p element with the conversion strings
let lengthConversion = document.getElementById("length-conversion")
//console.log(lengthConversion)
let volumeConversion = document.getElementById("volume-conversion")
//console.log(volumeConversion)
let massConversion = document.getElementById("mass-conversion")
//console.log(massConversion)

// Unit Conversion Math

/*

1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

*/

// Functionality | Interactivity

// when input text changes capture input value
convertInputVal.addEventListener("change", function(){
    console.log(`This in the new input value ${convertInputVal.value}`)
})

convertBtn.addEventListener('click', function(){
    let convertVal = convertInputVal.value
    
    //Length
    lengthConversion.textContent = `${convertVal} meters = ${(convertVal * 3.281).toFixed(3)} feet | ${convertVal} feet = ${(convertVal / 3.281).toFixed(3)} meters`
    
    
    // lengthConversion.textContent = `${convertVal} meters = ${Math.round((convertVal * 3.281)* 1000)/1000} feet | ${convertVal} feet = ${Math.round((convertVal / 3.281)* 1000)/1000} meters`
    
    //Volume
    volumeConversion.textContent = `${convertVal} liters = ${(convertVal * 0.264).toFixed(3)} gallons | ${convertVal} gallons = ${(convertVal / 0.264).toFixed(3)} liters`
    
    // volumeConversion.textContent = `${convertVal} liters = ${Math.round((convertVal * 0.264)* 1000) / 1000} gallons | ${convertVal} gallons = ${Math.round((convertVal / 0.264)* 1000) / 1000} liters`
    
    //Mass
    massConversion.textContent = `${convertVal} kilos = ${(convertVal * 2.204).toFixed(3)} pounds | ${convertVal} pounds = ${(convertVal / 2.204).toFixed(3)} kilos`
    
    // massConversion.textContent = `${convertVal} kilos = ${Math.round((convertVal * 2.204)*1000) / 1000} pounds | ${convertVal} pounds = ${Math.round((convertVal / 2.204) * 1000) / 1000} kilos`

})


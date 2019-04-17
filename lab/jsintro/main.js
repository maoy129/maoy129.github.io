var nyTemp = 55;
var bjTemp = 77;
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
var bjHour = new Date().getHours()+12;
var bjMinute = new Date().getMinutes();

function Celsius(f) {
  return (5/9) * (f-32);
}
console.log("The temperature in New York City is "+Celsius(nyTemp)+"C at "+currentHour+":"+currentMinute);
console.log("The temperature in Beijing is "+Celsius(bjTemp)+"C at "+ bjHour+":"+bjMinute);
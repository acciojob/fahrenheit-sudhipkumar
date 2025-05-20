function toFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;
  
  // Return the result rounded to two decimal places
  return fahrenheit.toFixed(2);
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));


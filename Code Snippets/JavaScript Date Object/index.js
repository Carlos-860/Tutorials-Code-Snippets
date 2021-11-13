let d;

/*-----------------------------*/

// 1. Constructing date objects

/*-----------------------------*/

d = new Date(); // creates a new instance of the date constructor object.

d = new Date(1162211006456); // creates a new instance of date object from the amount of milleseconds that passed since "1 Jan 1970 0:00:00"

// Using the ISOMetric Format is not recommended

d = new Date(2021, 10, 14, 0, 38, 30, 0); // (Year, Month*Index format(0-11), Day, Hour, Minutes, Seconds, Milleseconds) * Year & Month is just required

console.log(d.toString());

/*-----------------------------*/

// 2. Getting Date Object Methods

/*-----------------------------*/

console.log(d.getFullYear()); // Returns the year of the Date instance.

console.log(d.getMonth()); // ! Returns the month index.

console.log(d.getDate());

console.log(d.getHours());

console.log(d.getMinutes());

console.log(d.getSeconds());

/*-----------------------------*/

// 3. Setters for the Date Object

/*-----------------------------*/

console.log(d.setMinutes(10));

console.log(d.setDate(5));

console.log(d.toString());

/*-----------------------------*/

// 4. Formatting and Displaying the Date Object

/*-----------------------------*/

console.log(d.toISOString()); // used to make callls to external API's

console.log(
  d.toLocaleString('en-ZA', {
    timeZone: 'America/Los_Angeles',
  })
);
console.log(d.toLocaleString('en-AU'));
console.log(d.toLocaleString('en-UK'));
console.log(d.toLocaleString('en-US'));

console.log(
  JSON.stringify({
    myDate: d,
  })
);

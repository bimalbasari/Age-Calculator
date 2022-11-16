//---TODAY DATE STORE IN A VARIABLE
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
// CALCULATION FUNCTION  WHEN CLICK SUBMIT BUTTON
function myFunction() {
  // STORE DATA USER INTUT AS NUMBER
  let userName = document.getElementById("name").value;
  let userday = parseInt(document.getElementById("days").value);
  let usermonth = parseInt(document.getElementById("month").value);
  let useryear = parseInt(document.getElementById("year").value);
  // USER DOB  CONVERT DATE FORMAT
  let input = `${usermonth}-${userday}-${useryear}`;
  let dob = new Date(input);
  let oldyear = dob.getFullYear();
  let oldmonth = dob.getMonth();
  let olddate = dob.getDate();
  let ageyear;

  // Using  Conditional Statements for perform  subtraction
  if (oldmonth > month) {
    ageyear = year - oldyear - 1;
  } else {
    ageyear = year - oldyear;
  }
  let agemonth;
  if (olddate > day) {
    agemonth = month - oldmonth - 1;
  } else {
    agemonth = month - oldmonth;
  }
  let agedate;
  if (olddate > day) {
    let x;
    x = 30 - olddate;
    agedate = day + x;
  } else {
    agedate = day - olddate;
  }

  // Given result to user 
  let userage =`Hi  ${userName}, your age is  ${ageyear} Years ${agemonth} Months ${agedate} Days older as of today. `
   
  document.getElementById("age").innerHTML = userage;
}

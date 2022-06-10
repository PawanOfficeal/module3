import WebDev,{Manager}  from '/modules1.js'

const dev11 = new WebDev("Rohan","Frontend","123");
const dev12 = new WebDev("Jazz","Data Analytics","111");
console.log(dev11);
console.log(dev12);
const div1 = document.getElementById('div1');
div1.innerHTML = dev11.webDevinfo();

//export class function:
console.log(dev12.webDevinfo());

//export get/set :
dev11.idN = "444";
console.log(dev11);

//instances of sub-class 'Manager' :
const managerA = new Manager("Mohit","Team Manager","AB12","Main Office");
const managerB = new Manager("Kaali","Branch Manager","YZ12","City Office");
console.log(managerA);

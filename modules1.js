export default class WebDev{
	constructor(name,job,idNumber){
		this.name = name;
		this.job = job;
		this.idNumber = idNumber;
	}
	//get
	get idN(){
		const html1 = `Name: ${this.name} <br> ID: ${this.idNumber}`;
		div1.innerHTML = html1;
		return  html1;
	}
    //set
    set idN(value){
    	this.idNumber = value;
    }
    //webDevInfo
     webDevinfo(){
    	const html2 = `Developer NAME: ${this.name} <br> JOB: ${this.job}`;
    	div2.innerHTML = html2;
		return html2;
    }
}

//sub class:
export class Manager extends WebDev{
	constructor(name,job,idNumber,office){
		super(name,job,idNumber);
		this.office = office;
	}
	managerInfo(){
		const html3 = `Manager Info: ${this.name} Office: ${this.office}`;
		div3.innerHTML = html3;
	}
}
const makeChange = (c) => {
  // your name here
	let qua = 0;
	let dime = 0;
	let nickel = 0;
	let penny =0;
	qua = Math.floor(c/25);
	c%=25;
	dime = Math.floor(c/10);
	c%=10;
	nickel= Math.floor(c/5);
	c%=5;
	penny=c;
	return{q: qua, d: dime,n: nickel,p:penny};
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

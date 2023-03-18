function invalidNumber(number)
{
	if(checkIsEmpty(number)== true) return false;
	return isNaN(number);//.match(/^[0-9]+$/)==null);
}


//this function will say that variable is empty or not
function checkIsEmpty(enter)
{
    if(enter=="") return true;
	
	return false;
}

//this function will return table of the number which you are provide.

function printTable(n)
{
	if(checkIsEmpty(n)) return "invlide";

  let text = '';

  for (let i = 1; i<=10;  i++) {
    text += n + " x " + (i) + " = " + " " + (n*i) + "<br>";
  }
  
  return text;
}


//this function will return sum of two numbers

function add (n1,n2)
{
	return parseInt(n1) + parseInt(n2);
}

function operation(n1,n2, operator)
{
	if(n1=="" || n2 =="") return "Please enter number";
	
	n1 = parseInt(n1);
	n2 = parseInt(n2);
	
	if(operator=="+")
	{
		return n1 + n2;
	}else if(operator=="-")
	{
		return n1- n2
	}else if (operator=="*")
	{
		return n1*n2;
	}
		
	return "Please enter valid opertor ";
}



//this is the exmple of function that take the input/ argument/ parameter /but not retrurn any value
function maxNumber(numb,type='max')
{
	  var num = numb[0];
	  for (var i = 1; i < numb.length; i++) 
	  {
		if ((type=="min" && num > numb.length) || (num < numb.length ) ) 
		{
		  num = numb[i];
		}
	  }
	  document.write(num+"<br>");
}
	

//4
// function with paremeter with return type
// func with paremeter with no return type
// function without paremeter with return type
// func without paremeter with no return type
// default parameter
// function calling


function areaOfCicrcle(radius)
{
	area = 3.14 * square(radius);
	return area;
}


function square(n)
{
	return n*n;
}

function average(n,m,o,p,q,w,e)
{
	var list_of_number = [n,m,o,p,q,w,e];
   total = sum(list_of_number);
   ant = total/list_of_number.length;
   return ant.toFixed(3);
}

function sum(n) {
	var sum = 0;
   	for (let i = 0; i < n.length; i++) {
	  sum = n[i] + sum;
	}
	
	return sum;
}
/////////////////////////////////

/*this function will return simple interest
//@principle amount you have to pass
*/
function simpleinterest(principle,rate,time) {
	if(rate=='') return "Please provide me rate";
	var si = principle * rate * time;
	var into = si/100;
	return into;
}


/*print counting */
function printCounting(n)
{
	if(n=='') return "Please provide valide number";
	if(typeof(n)=="string") return "Please give me valid number";
	var text ='';
	for(var i=1; i<=n; i++)
	{
		text += i + "<br/>"; 
	}
	
	return text;
}


//length_of_otp 10

//generate OTP number
function generateOTP(length_of_otp)
{
	if(checkIsEmpty(length_of_otp)=="false") return "Please provide lenth of otp";
    let pad = "1";
	var after_pad = pad.padEnd(parseInt(length_of_otp)+1,"0");//10000000000
	console.log(after_pad);
	var hhis = Math.floor(Math.random() * after_pad);//4.565656565*100= 456666
	return hhis;
}


//this function will tell is given thing is a number or not

function check_number(no) 
{
   if(typeof(no)== "number" ) {
	   return "true";
   } else if(typeof(no)=="string") {
	   return "false";
   }
}



//this function will tell the no. is positive or negative

function checkPveNve(numbr)
{
	if(checkIsEmpty(numbr)) return "Empty";
	if(invalidNumber(numbr)) return "please enter a valid number";
	 
		if(numbr < 0) {
			return "the number is negative";
	    } else if(numbr > 0) {
			return "the number is positive";
		} else if(numbr == 0) {
			return "zero";
		}
	
}

//this function will tell number is divisible by 7 or not

function isDivisible(diiv)
{
//diiv =6
//if(null)//false
	if(checkIsEmpty(diiv)) return "Empty";
	if(invalidNumber(diiv)) return "please enter a valid number";
	if(diiv%7 == 0) return "this number is divisible by 7";
    
	return "this number is not divisible by 7";

   
}

//this function will return addition
//121 =
/*
929/10 = 92
92/10 = 1
9/10  = 9

*/ 
//929%10 = 9
//92%10  = 2
//9%10   = 9
///
//
function addDigit(digit)
{
	var sum = 0;
	while(digit!=0)
	{
		sum += (digit%10);
		digit = Math.floor(digit/10);
	}
	return sum;
	
}

//this function will return sq and sum both 

function squareOf(digit) 
{
	var sum = 0;
	while(digit!=0)
	{
		sum += square(digit%10);//123%10 = 3
		digit = Math.floor(digit/10);
	}
	return sum;
}

//this function will return reverse string

function reverse(entVal) 
{
	var splitString = entVal.split("");
	let splitted = splitString.reverse();
	let reversed = splitted.join("");
	return reversed;
}

//x to the power n
//x = 2
//n = 8 

function exponents(vals,numn) 
{
	var exp = 1;
	
	//while(numn!=0)//6!=0
	for (var i = 1; i<=numn; i++)
	{
		exp = vsls * exp;
	
	}
	return exp;
}

//this function will tell the entered number is prime or not 

function primeNumbr(pNumber)
{

	if(pNumber==0 || pNumber==1) return "this is not a Prime number";
	
	for (let i = 2; i < pNumber; i++) {
		if(pNumber % i == 0) return "this number is a not Prime Number";
	}
	
	return "this is a Prime number";
}

//this function will tell the 

function checkLeapYear(year)
{
	if((year%4 ==0 && year%100!=0) /*&& (year%400==0)*/) return "Leap Year";
	
	return false;
}


//1998
//2020
//year%400==0 it is leap year , 2020%400 = 
//
//true && true ==true

//this function will tell email is valid or not 

function checkEmail(email)
{
	if(checkIsEmpty(email)) return false;
	var validation = /^([a-zA-z0-9_\-\.]+)@([a-zA-Z0-9]+.)([a-z]+)(.[a-z]+)$/
	if(email.match(validation)) return true;
	return false;
}



function swap(x,y)
{
	var temp = '';
	temp = x;//100 -> 10
	x = y;//y =102 , x = 102
	y = temp;//y =100
	
	
}

//this function will check url is valid or not

function check_Url(enterurl)
{
	if(invalidNumber(enterurl) == false) return "Please enter a valid url";
	var validurl = /^(https:\/\/)[a-zA-Z0-9\$\-]+(.[a-z])$/
	if(enterurl.match(validurl)) return "email is verified";
	return "email is not verified";
}

//this function will tell zip code is correct or not 

function check_Zipcode(zip)
{
	if(invalidNumber(zip) == true) return "empty";
	var zipcode = /^([0-9]{6})$/ 
	if(zip.match(zipcode)) return "zipcode verified";
	return "wrong zipcode";
}

//this function will check phoneNumber is valid or not;

function phoneNumber(numBer)
{
	if(invalidNumber(numBer)) return false;
	var numbercode = /^(\+91[0-9]{10})$/
	if(numBer.match(numbercode)) return true;
	return false;
}

//this function will check the name is valid or not

function check_name(naMe)
{
	if(checkIsEmpty(naMe)) return false;
	var infoName = /^[a-zA-z]+$/
	if(naMe.match(infoName)) return true;// "Your Name is verified";
	return false;
}

//this function will check password is correct or not

function check_password(pwd)
{
	if(checkIsEmpty(pwd)) return false;
	var infopwd = /^([a-zA-z0-9]{8})$/
	if(pwd.match(infopwd)) return true;// "Your password is verified"
	return false;
}

//this function will validate a Checkbox

function checkbox_validate()
function validateform()
{
	var invalid_data = true;
	var  email_value = document.getElementById('email').value;
	
	console.log(email_value);
	
	//email value  = value is valid email id exist
	//!false = true
	if(!checkEmail(email_value))
	{		
		document.getElementById('emailerror').classList.remove("d-none");
		invalid_data = false;
	}else{
			document.getElementById('emailerror').classList.add("d-none");
	}
	//if(true) invalid_data = false;
	
	//return invalid_data;
	
	var invalid_pwd = true;
	var  pwrd = document.getElementById('pwd').value;
	if(!check_password(pwrd))
	{		
		document.getElementById('pwderror').classList.remove("d-none");
		invalid_pwd = false;
	}else{
			document.getElementById('pwderror').classList.add("d-none");
	}
	//if(true) invalid_data = false;
	
	//return invalid_pwd;
	//console.log(pwrd)
	//console.log(invalid_pwd)
	
    var invalid_mob = true;
	var mob_value = document.getElementById('contact').value;
	if(!phoneNumber(mob_value))
	{		
		document.getElementById('conterror').classList.remove("d-none");
		invalid_mob = false;
	}else{
	    document.getElementById('conterror').classList.add("d-none");
	}
	
	var invalid_checkbox = true;
	var check_box = document.getElementById("checkbox");
	if(check_box.checked)
    {
		document.getElementById('checkMe').classList.add("d-none");
		invalid_checkbox = false;
	}else{
		document.getElementById('checkMe').classList.remove("d-none");
	}
	 return invalid_checkbox;
}

function validatepwd()
{
	
}


function result(data)
{
	document.getElementById('result').innerHTML = data;
}


function changeBgColor()
{
}


function validateMob(data)
{
	
}
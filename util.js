/**
 * Checks if a given value is empty or not.
 * @function checkIsEmpty
 * @param {string} enter - The value to be checked for emptiness.
 * @returns {boolean} - Returns true if the value is empty, false otherwise.
 */
function checkIsEmpty(enter)
{
    if(enter=="") return true;
	
	return false;
}

function invalidNumber(number)
{
	if(checkIsEmpty(number)== true) return false;
	return isNaN(number);
}


function add (n1, n2) 
{
    if (checkIsEmpty(n1)) return 'Please etner non empty value ';
    return n1+n2;
}



function array_search(data_array, find_element)
{
    
}
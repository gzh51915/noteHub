const isPhone = (phonenumber)=> {
    if(!(/^1[3456789]\d{9}$/.test(phonenumber)))  return false; 
    return true
}
module.exports = {
	isPhone
}
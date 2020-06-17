export const isPhone = (phonenumber)=> {
    if(!(/^1[3456789]\d{9}$/.test(phonenumber)))  return false; 
    return true
}
export const isEmail = (email) => {
    if(!(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)))  return false; 
    return true
}

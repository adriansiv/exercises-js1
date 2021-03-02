function checkUserName(userName, userType) {
    if (userType === "admin" || userType === "manager"){
        return "Username Valid";
    }
    else if (userName.length >= 5 && userName.length <= 10) {
        return "Username valid";
    } 
    else  {
        return "Username Invalid";
    }
}
console.log(checkUserName("Adr", "admin"))
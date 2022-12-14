export  function ValidateCreditCardNumber(ccNum) {
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    // var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    if (visaRegEx.test(ccNum) === false && mastercardRegEx.test(ccNum) === false && amexpRegEx.test(ccNum) === false){ // Visa validation
        return false
    }else{
        return true
    }
}
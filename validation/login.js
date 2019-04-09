const Validator = require('validator');
      isEmpty = require('./isEmpty');



module.exports = function validateLoginInput(data) {
    let errors = {};

    // first check to see if name field is empty, and if so, set to empty string
    
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    

    

    
    
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Please specify a valid email address';
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Please specify an email address';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password cannot be empty';
    }
    
    
    

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}
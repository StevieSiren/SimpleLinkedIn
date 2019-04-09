const Validator = require('validator');
      isEmpty = require('./isEmpty');



module.exports = function validateRegisterInput(data) {
    let errors = {};

    // first check to see if name field is empty, and if so, set to empty string
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name cannot be empty.';
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Please specify an email address';
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Please specify a valid email address';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password cannot be empty';
    }
    if(!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be longer than 6 characters and shorter than 30!';
    }
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Please re-enter your password';
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password = 'Provided passwords do not match. Please make sure to re-enter the same password.';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}
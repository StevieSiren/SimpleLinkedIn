const Validator = require('validator');
      isEmpty = require('./isEmpty');



module.exports = function validateExperienceInput(data) {
    let errors = {};

    // first check to see if name field is empty, and if so, set to empty string
    
    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';
    

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required.';
    }

    if(Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required.';
    }

    if(Validator.isEmpty(data.from)) {
        errors.from = 'Date field is required.';
    }
    
    
    

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}
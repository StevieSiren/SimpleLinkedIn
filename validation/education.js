const Validator = require('validator');
      isEmpty = require('./isEmpty');



module.exports = function validateEducationInput(data) {
    let errors = {};

    // first check to see if name field is empty, and if so, set to empty string
    
    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';
    data.from = !isEmpty(data.from) ? data.from : '';
    

    if(Validator.isEmpty(data.school)) {
        errors.school = 'Please specify a school or university.';
    }

    if(Validator.isEmpty(data.degree)) {
        errors.degree = 'Please specify your degree earned';
    }

    if(Validator.isEmpty(data.fieldOfStudy)) {
        errors.fieldOfStudy = 'Please specify your field of study';
    }

    if(Validator.isEmpty(data.from)) {
        errors.from = 'Date field is required.';
    }
    
    
    

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}
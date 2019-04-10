const Validator = require('validator');
      isEmpty = require('./isEmpty');



module.exports = function validatePostInput(data) {
    let errors = {};

    // first check to see if name field is empty, and if so, set to empty string
    
    data.text = !isEmpty(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, { min: 10, max: 380 })) {
        errors.text = 'Post must be a minimum of 10 characters and a maximum of 380';
    }
    
    if(Validator.isEmpty(data.text)) {
        errors.text = 'Text field cannot be empty.';
    }
    
    
    

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}
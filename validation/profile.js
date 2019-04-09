const Validator = require('validator');
      isEmpty = require('./isEmpty');



module.exports = function validateProfileInput(data) {
    let errors = {};

    // first check to see if name field is empty, and if so, set to empty string
    
    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';

    if(!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = 'Handle should be between 2 and 40 characters';
    }
    if(Validator.isEmpty(data.handle)) {
        errors.handle = 'Please choose a profile handle';
    }

    if(Validator.isEmpty(data.status)) {
        errors.status = 'Status is required';
    }

    if(Validator.isEmpty(data.skills)) {
        errors.skills = 'Please add at least one skill.';
    }

    if(!Validator.isEmpty(data.website)) {
        if(!Validator.isURL(data.website)) {
            errors.website = 'Please enter a valid URL';
        }
    }

    // if(!Validator.isEmpty(data.youtube)) {
    //     if(!Validator.isURL(data.youtube)) {
    //         errors.youtube = 'Please enter a valid URL';
    //     }
    // }
    // if(!Validator.isEmpty(data.facebook)) {
    //     if(!Validator.isURL(data.facebook)) {
    //         errors.facebook = 'Please enter a valid URL';
    //     }
    // }
    // if(!Validator.isEmpty(data.twitter)) {
    //     if(!Validator.isURL(data.twitter)) {
    //         errors.twitter = 'Please enter a valid URL';
    //     }
    // }
    // if(!Validator.isEmpty(data.linkedIn)) {
    //     if(!Validator.isURL(data.linkedIn)) {
    //         errors.linkedIn = 'Please enter a valid URL';
    //     }
    // }


    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}
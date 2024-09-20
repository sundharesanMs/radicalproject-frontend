function validation(values) {
    let errors = {}; 
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (values.name === '') {
        errors.name = "Name is required"; 
    }

    if (values.email === '') {
        errors.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        errors.email = "Email does not match format";
    }

    if (values.password === '') {
        errors.password = 'Password should not be empty';
    }

    return errors; 
}

export default validation;

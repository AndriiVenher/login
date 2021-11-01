import { SignUpData } from "../UseForm";




export default function validate(values: SignUpData) {
    let errors = {
        firstName: '',
        emailAddress: '',
        password: '',
        confirmPassword: ''
    };
  
    if (!values.firstName.trim()) {
      errors.firstName = 'Username required';
    }
    else if (!/^[A-Za-z]+/.test(values.firstName.trim())) {
      errors.firstName = 'Enter a valid name';
    }
  
    if (!values.emailAddress) {
      errors.emailAddress = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
      errors.emailAddress = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  }
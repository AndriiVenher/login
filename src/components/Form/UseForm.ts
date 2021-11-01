import React, { useState, useEffect } from 'react';

interface FormErrors {
    firstName: string;
    emailAddress: string;
    password: string,
    confirmPassword: string,
}
export interface SignUpData {
    firstName: string;
    emailAddress: string;
    password: string,
    confirmPassword: string,
  }

  

const useForm = (callback: any, validate: any) => {
  const [values, setValues] = useState <SignUpData >({}as SignUpData);
  const [errors, setErrors] = useState <FormErrors >({}as FormErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();

    setErrors(validate(values));
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
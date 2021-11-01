
import validate from './helpers/validate';
import useForm from './UseForm';
import './Form.css';

const FormSignup = ({ submitForm }: any) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );
   console.log(submitForm);
   
  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='firstName'
            placeholder='Enter your username'
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='emailAddress'
            placeholder='Enter your email'
            value={values.emailAddress}
            onChange={handleChange}
          />
          {errors.emailAddress && <p>{errors.emailAddress}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='confirmPassword'
            placeholder='Confirm your password'
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
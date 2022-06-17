import { useRef } from 'react';
import classes from './sign-in-form.module.css';

const SignInForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef()

  const signInFormSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log(enteredEmail, enteredPassword);
  }

  return (
    <form className={classes.formControl} onSubmit={signInFormSubmitHandler}>
      <p>Sign In has no effect right now</p>
      <div>
        <label htmlFor='email'>
          <b>Email</b>
        </label>
      </div>
      <div>
        <input
          type='email'
          placeholder='Enter Email'
          name='email'
          ref={emailInputRef}
          required
        />
      </div>
      <div>
        <label htmlFor='password'>
          <b>Password</b>
        </label>
      </div>
      <div>
        <input
          type='password'
          placeholder='Enter Password'
          name='password'
          ref={passwordInputRef}
          required
        />
      </div>

      <button type='submit'>Sign In</button>
    </form>
  );
};

export default SignInForm;

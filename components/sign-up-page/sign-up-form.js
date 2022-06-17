import { useRef,useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import classes from './sign-up-form.module.css';

const SIGN_UP_USER = gql`
  mutation AddUser($inputUser: InputUser!) {
    addUser(inputUser: $inputUser)
  }
`;

const SignUpForm = () => {
  const [notification, setNotification] = useState();
  const [signUpUser, { data, loading, error }] = useMutation(SIGN_UP_USER);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordRepeatInputRef = useRef();

  const signUpFormSubmitHandler = (event) => {
    event.preventDefault();

    const enterdFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredRepeatPassword = passwordRepeatInputRef.current.value;

    if (enteredPassword === enteredRepeatPassword) {
      const newUser = {
        firstName: enterdFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        password: enteredPassword,
      };

      signUpUser({
        variables: {
          inputUser: {
            ...newUser,
          },
        },
      });

      setNotification('Signed Up, See MongoDB user Collection for user Creation');
    } else {
      console.log("Passwor didn't matched");
    }
  };
  return (
    <div>
      <form className={classes.formControl} onSubmit={signUpFormSubmitHandler}>
        <h3>Sign Up</h3>
        <div>
          <label htmlFor='firstNme'>
            <b>First Name</b>
          </label>
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter First Name'
            name='firstNme'
            ref={firstNameInputRef}
            required
          />
        </div>
        <div>
          <label htmlFor='lastName'>
            <b>Last Name</b>
          </label>
        </div>
        <div>
          <input
            type='text'
            placeholder='Enter Last Name'
            name='lastName'
            ref={lastNameInputRef}
            required
          />
        </div>
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

        <div>
          <label htmlFor='password-repeat'>
            <b>Repeat Password</b>
          </label>
        </div>
        <div>
          <input
            type='password'
            placeholder='Repeat Password'
            name='password-repeat'
            ref={passwordRepeatInputRef}
            required
          />
        </div>

        <button type='submit'>Sign Up</button>
      </form>
      <div>{notification && <p>{notification}</p>}</div>
    </div>
  );
};

export default SignUpForm;

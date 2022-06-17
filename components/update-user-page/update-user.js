import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import classes from './update-user.module.css';

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $inputUser: InputUser!) {
    updateUser(_id: $id, inputUser: $inputUser)
  }
`;

const UpdateUser = (props) => {
  const { user } = props;
  const initialUserData = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
  };
  const [userData, setUserData] = useState(initialUserData);
  const [notification, setNotification] = useState();

  const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

  const updateUserFormSubmitHandler = (event) => {
    event.preventDefault();

    updateUser({
      variables: {
        id: user._id,
        inputUser: {
          ...userData,
        },
      },
    });

    setNotification('User Information Updated, see MongoDB users Collection for updated data for reload the index/home page');
  };
  return (
    <div className={classes.updateUser}>
      <form
        className={classes.formControl}
        onSubmit={updateUserFormSubmitHandler}
      >
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
            value={userData.firstName}
            onChange={(event) =>
              setUserData({ ...userData, firstName: event.target.value })
            }
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
            value={userData.lastName}
            onChange={(event) =>
              setUserData({ ...userData, lastName: event.target.value })
            }
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
            value={userData.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
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
            placeholder='Enter New Password'
            name='password'
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
          />
        </div>

        <button type='submit'>Updat Info</button>
      </form>
      <div>
        {notification && <p>{notification}</p>}
      </div>
    </div>
  );
};

export default UpdateUser;

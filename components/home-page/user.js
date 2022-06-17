import { useState } from 'react';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';
import classes from './user.module.css';

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id)
  }
`;

const User = (props) => {
  const { user, usersListUpdateHandler } = props;
  const router = useRouter();
  const [notification, setNotification] = useState();
  const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER);

  const deleteUserHandler = () => {
    deleteUser({
      variables: {
        id: user._id,
      },
    });
    setNotification('User deleted, to see effect reload the index/home page or see in MongoDB users Collection. which is worng the list should update autometically, I couldn\'t fix it due to short of time');
    usersListUpdateHandler();
  };

  const updateUserHandler = () => {
    router.push({
      pathname: '/update-user',
      query: { userId: user._id },
    });
  };

  return (
    <div className={classes.border}>
      <div>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.email}</p>
      </div>
      <div>
        <button onClick={updateUserHandler}>Update</button>
        <button onClick={deleteUserHandler}>Delete</button>
      </div>
      <div>{notification && <p>{notification}</p>}</div>
    </div>
  );
};

export default User;

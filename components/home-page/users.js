import { Fragment, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import User from './user';

import classes from './users.module.css';

const ALL_USERS = gql`
  query {
    users {
      _id
      firstName
      lastName
      email
    }
  }
`;

const Users = () => {
  const [usersListIsUpdated, setUsersListIsUpdated] = useState(false);
  const { loading, error, data } = useQuery(ALL_USERS);

  const usersListUpdateHandler = () => {
    setUsersListIsUpdated(!usersListIsUpdated);
  };

  console.log('Users component Called ...');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Fragment>
      <h3 className={classes.users}>All User Information</h3>
      <ol>
        {data?.users?.map((user) => (
          <li key={user._id}>
            <User user={user} usersListUpdateHandler={usersListUpdateHandler} />
          </li>
        ))}
      </ol>
    </Fragment>
  );
};

export default Users;

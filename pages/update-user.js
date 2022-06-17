import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import UpdateUser from '../components/update-user-page/update-user';

const USERS = gql`
  query User($id: ID!) {
    user(_id: $id) {
      _id
      firstName
      lastName
      email
    }
  }
`;

const UpdateUserPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { loading, error, data } = useQuery(USERS, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data) {
    return (
      <div>
        <h2>Update User Page</h2>
        <UpdateUser user={data.user} />;
      </div>
    );
  }

  return <h2>Update User Page</h2>;
};

export default UpdateUserPage;

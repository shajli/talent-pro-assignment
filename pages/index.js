import Head from 'next/head';
import { Fragment } from 'react';
import { gql } from '@apollo/client';
import apolloClient from '../apollo/apollo-client';
import Users from '../components/home-page/users';
import classes from '../styles/home-page.module.css';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Talent Pro Assignment</title>
        <meta name='description' content='Assignment Project for Talent Pro' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Users />
      </main>
    </Fragment>
  );
};

export default HomePage;

// I left following code to show you, we can
// fetch the data this way also

// export async function getStaticProps() {

//   const { data } = await apolloClient.query({
//     query: gql`
//       query {
//         users {
//           _id
//           firstName
//           lastName
//           email
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       users: data.users,
//     },
//   };
// }

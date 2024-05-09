import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query queryAllUsers {
    users {
      username
      id
      age
    }
  }


`;
const DisplayData = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
};

export default DisplayData;

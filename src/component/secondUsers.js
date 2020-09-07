import React from 'react'
import { useFetchUsersData } from '../store/fetchUsers';
export default function User2() {
  const { users, loading } = useFetchUsersData();
  console.log(users)
  return (
    loading ? <p>loading...</p> :  (<ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>)
  );
}

import { useFetchData } from "../store/useFetchData";
import React from 'react'
import { useFetchPostData } from "../store/fetchPosts";
export default function Posts() {
    const { listPosts, loading } = useFetchPostData();

  console.log(listPosts)
  return (
    loading ? <p>loading...</p> :  (<ul>
        {listPosts.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>)
  );
}

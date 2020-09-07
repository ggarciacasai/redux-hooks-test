import { useFetchData } from "./useFetchData";
import { useEffect } from "react";
import { getPostsAction } from "./actions/postAction";

const postsSelector = ({ posts }) => {
  return {
    listPosts: posts.list,
    loading: posts.loading,
  };
};

export function useFetchPostData(args) {
  const { listPosts, loading, fetchData } = useFetchData(
    getPostsAction,
    postsSelector
  );

  useEffect(() => {
    if (listPosts.length < 1) fetchData();
  }, [fetchData, listPosts, args]);

  return { listPosts, loading, fetchData };
}

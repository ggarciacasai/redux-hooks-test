import { useFetchData } from "./useFetchData";
import { useEffect } from "react";
import { getUsers } from "./actions/usersAction";

const usersSelector = ({ users }) => {
  return {
    users: users.users,
    loading: users.loading,
  };
};

export function useFetchUsersData(args) {
  const { users, loading, fetchData } = useFetchData(
    getUsers,
    usersSelector
  );

  useEffect(() => {
    if (users.length < 1) fetchData();
  }, [fetchData, users, args]);

  return { users, loading, fetchData };
}

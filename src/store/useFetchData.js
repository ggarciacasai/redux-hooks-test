import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


export function useFetchData(action, stateSelector) { 
  const dispatch = useDispatch();
  const selectorStates = useSelector(stateSelector, shallowEqual);

  const boundAction = useCallback((args) => {
    return dispatch(action(args !== undefined && args));
  }, [action, dispatch]);

  return {
    ...selectorStates,
    fetchData: boundAction,
  };
}

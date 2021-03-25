import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  catLoadingSelector,
  catsArraySelector,
  catsErrorSelector,
} from "./redux/cats/reducer";
import { getCatsThunks } from "./redux/cats/thunk";
interface CatsProps {
  children: (props: {
    cats: ReturnType<typeof catsArraySelector>;
    error?: string;
    loading: boolean;
  }) => React.ReactElement;
}

export const Cats: React.FC<CatsProps> = ({ children }) => {
  const dispatch = useDispatch();
  const cats = useSelector(catsArraySelector);
  const loading = useSelector(catLoadingSelector);
  const error = useSelector(catsErrorSelector);

  const loadCats = () => dispatch(getCatsThunks());

  useEffect(() => {
    loadCats();
  }, []);
  return children({ cats, loading, error });
};

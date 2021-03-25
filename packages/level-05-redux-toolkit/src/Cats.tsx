import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  catLoadingSelector,
  catsSelector,
  catsErrorSelector,
} from "./redux/cats/slice";
import { getCatsThunks } from "./redux/cats/thunk";
interface CatsProps {
  children: (props: {
    cats: ReturnType<typeof catsSelector>;
    error?: string;
    loading: boolean;
  }) => React.ReactElement;
}

export const Cats: React.FC<CatsProps> = ({ children }) => {
  const dispatch = useDispatch();
  const cats = useSelector(catsSelector);
  const loading = useSelector(catLoadingSelector);
  const error = useSelector(catsErrorSelector);

  const loadCats = () => dispatch(getCatsThunks());

  useEffect(() => {
    loadCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return children({ cats, loading, error });
};

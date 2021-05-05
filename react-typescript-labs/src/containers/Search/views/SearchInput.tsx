import React, { FC, useEffect, useState } from 'react';
import { Avatar } from 'primereact/avatar';
import '../styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../store';
import { getResultsRequest } from '../action';
// import logo from '../../../assets/logo.svg';

type Props = {};

const SearchInput: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryLimit, setSearchQueryLimit] = useState(0);

  const isLoading = useSelector<ApplicationState, boolean>(
    (s) => s.search.isLoading
  );

  const onSearchQueryChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    setSearchQuery(val);
  };

  const onSearchHandler = () => {
    dispatch(
      getResultsRequest({
        query: searchQuery,
        limit: searchQueryLimit,
      })
    );
  };

  useEffect(() => {
    setSearchQueryLimit(25);
  }, []);

  return (
    <div className="search-input-container">
      <Avatar label="P" className="p-mr-2" size="xlarge" />
    </div>
  );
};

export { SearchInput };

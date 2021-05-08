import React, { FC, useEffect, useState } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import '../styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../store';
import { getResultsRequest } from '../action';
import logo from '/src/assets/logo.svg';

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

  // @ts-ignore
  // @ts-ignore
  return (
    <div className="search-input-container">
      {/*@ts-ignore*/}
      <Avatar image={logo} size="xlarge" shape="circle" />
      {/*InputGroup*/}
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-md-4">
          <div className="p-inputgroup">
            <InputText
              placeholder="Keyword"
              value={searchQuery}
              onChange={onSearchQueryChangeHandler}
            />
            <Button
              icon="pi pi-search"
              loading={isLoading}
              onClick={onSearchHandler}
              className="p-button-warning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SearchInput };

import React, { FC, useEffect, useRef } from 'react';
import './styles.css';
import { Toast } from 'primereact/toast';
import { SearchInput } from './views/SearchInput';
import { useSelector } from 'react-redux';
import { Search as SearchModel } from './types';
import { ApplicationState } from '../../store';
import { CustomError } from '../../utils/api-helper';
import { Results } from './views/Results';

type Props = {};

const Search: FC<Props> = (props: Props) => {
  const toast = useRef(null);

  const results = useSelector<ApplicationState, SearchModel | null>(
    (s) => s.search.results
  );
  const searchError = useSelector<ApplicationState, CustomError | null>(
    (s) => s.search.errors.results
  );

  useEffect(() => {
    if (searchError) {
      /*@ts-ignore*/
      toast.current.show({
        severity: 'success',
        summary: 'Success Message',
        detail: searchError.message,
      });
    }
  }, [searchError]);

  return (
    <div className="container">
      <Toast ref={toast} />
      {!results ? <SearchInput /> : <Results />}
    </div>
  );
};

export { Search };

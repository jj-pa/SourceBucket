import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../../store';
import { resetResults } from '../action';
import { Search } from '../types';
import { Button } from 'primereact/button';
import { ResultListItem } from '../../../components/ResultListItem/ResultListItem';
import logo from '../../../assets/logo.svg';

type Props = {};

const Results: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const results = useSelector<ApplicationState, Search | null>(
    (s) => s.search.results
  );

  const onResetResultsHandler = () => {
    dispatch(resetResults());
  };

  return (
    <div>
      <div className="result-header">
        <Button
          icon="pi pi-chevron-left"
          onClick={() => onResetResultsHandler()}
        />
      </div>
      <div>Search Results</div>
      <div />
      {!results || results.data.children.length === 0 ? (
        <div className="no-results-container">No results found</div>
      ) : (
        <div className="results-container">
          {/*@ts-ignore*/}
          {results.data.children.map((result, index) => (
            <ResultListItem
              key={index}
              title={result.data.title}
              imageURL={
                result.data.thumbnail === 'self' ? logo : result.data.thumbnail
              }
              sourceURL={result.data.permalink}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Results };

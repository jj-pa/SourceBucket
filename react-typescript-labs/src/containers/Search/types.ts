import { CustomError } from '../../utils/api-helper';

export interface Result {
  title: string;
  thumbnail: string;
  permalink: string;
}

export interface SearchResults {
  after: string;
  dist: number;
  modhash: string;
  children: {
    kind: string;
    data: Result;
  };
  before?: any;
}

// reddit API response Model
export interface Search {
  kind: string;
  data: SearchResults;
}

// Search Query interface
export interface SearchQuery {
  query: string;
  limit: number;
}

// Search action types
export enum SearchActionTypes {
  GET_RESULTS_REQUEST = '@@search/GET_RESULTS_REQUEST',
  GET_RESULTS_SUCCESS = '@@search/GET_RESULTS_SUCCESS',
  GET_RESULTS_ERROR = '@@search/GET_RESULTS_ERROR',

  RESET_RESULTS = '@@search/RESET_RESULTS',
}

interface Errors {
  results: CustomError | null;
}

// Search redux state
export interface SearchState {
  isLoading: boolean;
  results: Search | null;
  errors: Errors;
}

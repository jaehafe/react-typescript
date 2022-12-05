import { ActionType } from '../actions-types';
import { Action } from '../actions';

interface Repositories {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: Repositories, action: Action): Repositories => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;

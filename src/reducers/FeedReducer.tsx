import{ActionType,FEED_FETCH_BEGIN,FEED_FETCH_FALIURE,FEED_FETCH_SUCCESS} from "../actions/ActionTypes";
 

export interface FeedState{
    items:any[];
    loading:boolean;
    error:any;
}

const initialState:FeedState = {
    items: [],
    loading: true,
    error: null,
  };
  
  /********
   * Takes an initial state and an action type
   *******/
  export function feedReducer(state:FeedState = initialState, action:ActionType):FeedState {
    switch (action.type) {
      case FEED_FETCH_BEGIN:
        // The request started, so set loading to "true", show a spinner or something
        // reset any errors
        return {
          ...state,
          loading: true,
        };
  
      case FEED_FETCH_SUCCESS:
        // The request finnished, so set loading to "false".
        // replace items with the ones from the action (server)
        return {
          ...state,
          items: action.payload,
          loading: false,
        };
  
      case FEED_FETCH_FALIURE:
        //  The request failed, so set loading to "false".
        //  Save the error and display it somewhere.
        //  Set items to empty
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      // ALWAYS have a default case in a reducer
      default:
        return state;
    }
  }
  
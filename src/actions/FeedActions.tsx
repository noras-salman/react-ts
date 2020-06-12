import {Action,ActionType,FEED_FETCH_BEGIN,FEED_FETCH_FALIURE,FEED_FETCH_SUCCESS} from "./ActionTypes"
import{listFeedApi} from "../api";
import { Dispatch,AnyAction } from 'redux';





  /******
Actions responsible for fetching data from API, according to actions
then
DISPATCHING DATA TO REDUCER by the created objects
******/

export const fetchFeed=()=>{
 
  
    return (dispatch: Dispatch<AnyAction>) => {

      
      dispatch(fetchFeedBegin());
      listFeedApi.then((response) => {
          // handle success
          dispatch(fetchFeedSuccess(response.data));
        })
        .catch(function (error) {
          // handle error
          dispatch(fetchFeedError(error.data));
        })
        .then(function () {
          // always executed
        });
    };

  }
  

  /******
  BEGIN fetch : Fetching started
******/
 const fetchFeedBegin=():ActionType=>{
  return Action(FEED_FETCH_BEGIN,null)
}

/******
   SUCCESS fetch : setting recevied data to action state
  ******/
 const fetchFeedSuccess=(payload:any):ActionType=>{
  return Action(FEED_FETCH_SUCCESS,payload)
}

/******
   FAILED fetch : setting action state to error
  ******/
 const fetchFeedError=(error:any):ActionType=>{
  return Action(FEED_FETCH_FALIURE,error)
}
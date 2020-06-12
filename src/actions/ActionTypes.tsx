 

export interface ActionType {
    type:string;
    payload:any;
 
}

export const Action =(type:string,payload:any):ActionType=>{
    return {type,payload}
}

export const FEED_FETCH_BEGIN="FEED_FETCH_BEGIN";
export const FEED_FETCH_SUCCESS="FEED_FETCH_SUCCESS";
export const FEED_FETCH_FALIURE="FEED_FETCH_FALIURE";
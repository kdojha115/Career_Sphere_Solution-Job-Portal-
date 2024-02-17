import { FIND_JOB_BY_ID_FAILURE, FIND_JOB_BY_ID_REQUEST, FIND_JOB_BY_ID_SUCCESS, FIND_JOB_BY_JOBTITLE_FAILURE, FIND_JOB_BY_JOBTITLE_REQUEST, FIND_JOB_BY_JOBTITLE_SUCCESS } from "./ActionType"

const initialState={
    products:[],
    product:null,
    loading:false,
    error:null
}

const userJobReducer=(state=initialState, action)=>{

    switch(action.type){
        case FIND_JOB_BY_JOBTITLE_REQUEST:
        case FIND_JOB_BY_ID_REQUEST:
            return {...state, loading:true, error:null}


        case FIND_JOB_BY_JOBTITLE_SUCCESS:
            return {...state, loading:false, error:null, jobs:action.payload}

        case FIND_JOB_BY_ID_SUCCESS:
            return {...state, loading:false,error:null, jobs:action.payload}

        case FIND_JOB_BY_JOBTITLE_FAILURE: 
        case FIND_JOB_BY_ID_FAILURE:
            return {...state, loading:false, error:action.payload}

        default:
            return state;
    }
}
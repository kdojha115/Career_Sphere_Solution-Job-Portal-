import { FIND_JOB_BY_ID_FAILURE, FIND_JOB_BY_ID_REQUEST, FIND_JOB_BY_ID_SUCCESS, FIND_JOB_BY_JOBTITLE_FAILURE, FIND_JOB_BY_JOBTITLE_REQUEST, FIND_JOB_BY_JOBTITLE_SUCCESS } from "./ActionType";

export const findJobsById = (reqData)=>async(dispatch)=>{
    dispatch({type:FIND_JOB_BY_JOBTITLE_REQUEST })
    const {jobId,jobTitle, salary, location, startDate, endDate} = reqData;

    try {
        const {data}=api.get(`/job/jobId=${jobId}`)
    
        dispatch({type:FIND_JOB_BY_JOBTITLE_SUCCESS,payload:data})
     } catch (error) {
        dispatch({type:FIND_JOB_BY_JOBTITLE_FAILURE,payload:error.message})
    }
};

export const findJobs = (reqData)=>async(dispatch)=>{
    dispatch({type:FIND_JOB_BY_ID_REQUEST })
    const {jobId,jobTitle, salary, location, startDate, endDate} = reqData;

    try {
        const {data}=api.get(`/job/jobtitle=${jobTitle}&salary=${salary}&location=${location}&startDate=${startDate}&endDate=${endDate}`)
    
        dispatch({type:FIND_JOB_BY_ID_SUCCESS,payload:data})
     } catch (error) {
        dispatch({type:FIND_JOB_BY_ID_FAILURE,payload:error.message})
    }
};
import axios from "axios";

const REST_API_JOBID_URL = 'http://localhost:8080/job';

const REST_API_BASE_URL = 'http://localhost:8080/job/alljobs';

const REST_API_ADDJOB_URL = 'http://localhost:8080/job/add';

export const listJobs = () =>  axios.get(REST_API_BASE_URL );

export const createJob = (job) => axios.post(REST_API_ADDJOB_URL, job);

export const getJob = (jobId) => axios.get(REST_API_JOBID_URL + '/' + jobId);

export const updateJob = (jobId, job) => axios.put(REST_API_JOBID_URL + '/' + jobId, job);

export const deleteJob = (jobId) => axios.delete(REST_API_JOBID_URL + '/' + jobId);
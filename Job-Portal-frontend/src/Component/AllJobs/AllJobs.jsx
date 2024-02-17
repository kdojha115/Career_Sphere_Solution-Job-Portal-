// import { Button } from 'react-bootstrap';
// import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import './AllJobs.css';
import { deleteJob, listJobs } from '../../services/JobService';
import { useEffect, useState } from 'react';

const AllJobs = () => {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getAllJobs();
  }, [])

  function getAllJobs() {
    listJobs().then((response) =>{
      setJobs(response.data);
    }).catch(error =>{
      console.error(error);
    })
  }

  function addNewJob(){
    navigate('/createnewjob')
  }

  function updateJob(jobId){
    navigate(`/edit-job/${jobId}`)
  }

  function removeJob(jobId){
    console.log(jobId);

    deleteJob(jobId).then((response) => {
      getAllJobs();
    }).catch(error =>{
      console.error(error);
    })
  }
  return (

    <div className='container'>

      <h2 className='text-center'>List of Jobs</h2>
      <button className='btn btn-primary mb-2' onClick={addNewJob} >Add Job</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>
              Job Id
            </th>
            <th>
              Job Title
            </th>
            <th>
              Salary
            </th>
            <th>
              Start Date
            </th>
            <th>
              End Date
            </th>
            <th>
              Location
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {
            jobs.map(job =>
            <tr>
              <td> {job.jobId} </td>
              <td> {job.jobtitle} </td>
              <td> {job.salary} </td>
              <td> {job.startDate} </td>
              <td> {job.endDate} </td>
              <td> {job.location} </td>
              <td>
                <button className='btn btn-info' onClick={() => updateJob(job.jobId)}> Update </button>
                <button className='btn btn-danger' onClick={() => removeJob(job.jobId)}> Delete </button>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>

    // <ListGroup as="ol" >
    //   <ListGroup.Item
    //     as="li"
    //     className="d-flex justify-content-between align-items-start"
    //   >
    //     <div className="jobsdetails ms-2 w-[80%] me-auto">
    //       <div className="fw-bold w-[40%]">{job.jobtitle}</div>
    //       <div>{job.salary} LPA</div>
    //       <div>{job.location}</div>
    //       <div>{job.startDate}</div>
    //       <div>{job.endDate}</div>
    //     </div>
    //     <Button variant="warning" onClick={handleNewJob} >Edit</Button>
    //     <Button variant="danger">Delete</Button>
    //   </ListGroup.Item>
    // </ListGroup>
  );
}

export default AllJobs;
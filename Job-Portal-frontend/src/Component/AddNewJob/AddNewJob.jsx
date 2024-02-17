import React, { useEffect, useState } from 'react';
import './AddNewJob.css';
import { createJob, getJob, updateJob } from '../../services/JobService';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddNewJob() {

    const [jobtitle, setJobTitle] = useState('')
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const navigator = useNavigate();

    const {jobId} =  useParams();
 
    const [errors, setErrors] = useState({
        jobtitle: '',
        location: '',
        salary: '',
        startDate: '',
        endDate: ''
    })

    useEffect(() =>{

        if(jobId){
            getJob(jobId).then((response) => {
                setJobTitle(response.data.jobtitle);
                setLocation(response.data.location);
                setSalary(response.data.salary);
                setStartDate(response.data.startDate);
                setEndDate(response.data.endDate);
            }).catch(error =>{
                console.error(error);
            })
        }
    }, [jobId])

    function saveOrUpdateJob(e) {

        e.preventDefault();

        if (validateForm()) {

            const job = { jobtitle, location, salary, startDate, endDate }
            console.log(job)

            if(jobId){
                updateJob(jobId, job).then((response) => {
                    console.log(response);
                    navigator('/alljobs');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createJob(job).then((response) => {
                    console.log(response.data);
                    navigator('/alljobs')
                }).catch(error => {
                    console.error(error);
                })
            }

            
        }


    }

    function validateForm() {

        let valid = true;

        const errorCopy = { ...errors }

        if (jobtitle.trim()) {
            errorCopy.jobtitle = '';
        } else {
            errorCopy.jobtitle = 'JobTitle is required';
            valid = false;
        }

        if (location.trim()) {
            errorCopy.location = '';
        } else {
            errorCopy.location = 'Location is required';
            valid = false;
        }

        if (salary.trim()) {
            errorCopy.salary = '';
        } else {
            errorCopy.salary = 'Salary is required';
            valid = false;
        }

        if (startDate.trim()) {
            errorCopy.startDate = '';
        } else {
            errorCopy.startDate = 'Start Date is required';
            valid = false;
        }

        if (endDate.trim()) {
            errorCopy.endDate = '';
        } else {
            errorCopy.endDate = 'End Date is required';
            valid = false;
        }

        setErrors(errorCopy);

        return valid;
    }

    function pageTitle(){
        if(jobId){
            return <h2 className='text-center mt-2 border-b-2'>Update Job details</h2>
        } else {
            return <h2 className='text-center mt-2 border-b-2'>Add Job details</h2>
        }
    }

    return (
        <div className='card'>
            {
                pageTitle()
            }
            <div class="card-body container">
                <form class="mainform" id="signup1" method="post">
                    <div class="fields">

                        <div class="form-group mb-2 Fname">
                            <label className='form-label'>Job Title *</label>
                            <input 
                            type="text" name="fname" value={jobtitle} 
                            onChange={(e) => setJobTitle(e.target.value)} id="fname" 
                            className={`form-control ${errors.jobtitle ? 'is-invalid': ''}`}
                            placeholder="job title" required />

                            { errors.jobtitle && <div className='invalid-feedback'>{errors.jobtitle}</div>}
                        </div>

                        <div class="form-group mb-2 Lname">
                            <label className='form-label'>Location *</label>
                            <input 
                            type="text" name="lname" id="lname" value={location} 
                            onChange={(e) => setLocation(e.target.value)} 
                            className={`form-control ${errors.location ? 'is-invalid': ''}`}
                            placeholder="current location" required />

                            { errors.location && <div className='invalid-feedback'>{errors.location}</div>}
                        </div>

                        <div class="form-group mb-2 phone">
                            <label className='form-label'>Salary *</label>
                            <input 
                            type="number" name="sal" id="sala" value={salary} 
                            onChange={(e) => setSalary(e.target.value)} 
                            className={ `form-control ${errors.salary ? 'is-invalid': ''}`}
                            placeholder="salary in LPA" required />

                            { errors.salary && <div className=' invalid-feedback'>{errors.salary}</div>}

                        </div>
                        <div class="form-group mb-2 start_date">
                            <label className='form-label'>Start Date *</label>
                            <input 
                            type="date" placeholder="Start Date" value={startDate} 
                            onChange={(e) => setStartDate(e.target.value)} 
                            className={`form-control ${errors.startDate ? 'is-invalid': ''}`}
                            name="sdate" id="stdate" required />

                            { errors.startDate && <div className='invalid-feedback'>{errors.startDate}</div>}
                        </div>

                        <div class="form-group mb-2 end_date">
                            <label className='form-label'>End Date *</label>
                            <input 
                            type="date" name="edate" id="endate" value={endDate} 
                            onChange={(e) => setEndDate(e.target.value)} 
                            className={`form-control ${errors.endDate ? 'is-invalid': ''}`}
                            placeholder="end date" required />

                            { errors.endDate && <div className='invalid-feedback'>{errors.endDate}</div>}
                        </div>

                        <div class="submit1">
                            <button type="submit" class="submitbtn text-bg-success" onClick={saveOrUpdateJob} id="submitButton" >Save & Continue</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
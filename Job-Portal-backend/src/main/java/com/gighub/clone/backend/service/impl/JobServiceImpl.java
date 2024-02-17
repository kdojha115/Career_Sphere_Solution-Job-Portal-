package com.gighub.clone.backend.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gighub.clone.backend.model.Job;
import com.gighub.clone.backend.repo.JobRepository;
import com.gighub.clone.backend.service.JobService;


@Service
public class JobServiceImpl implements JobService {
	
	@Autowired
    private JobRepository JR;
  
    @Override
    public Job addJob(Job job) {
        return this.JR.save(job);
    }

    @Override
    public Job updateJob(Job job) {
        return this.JR.save(job);
    }

    @Override
    public Set<Job> getJob() {
        return new HashSet<>(this.JR.findAll());
    }

    @Override
    public Job getJob(Long jobId) {
        return this.JR.findById(jobId).get();
    }

//    @Override
//    public void deleteJob(Long jobId) {
//    	Job job = new Job(null);
//        job.setJobId(jobId);
//        this.JR.delete(job);
//    }
    
    @Override
    public void deleteJob(Long jobId) {
        Job job = this.JR.findById(jobId).orElse(null);
        if (job != null) {
            this.JR.delete(job);
        } else {
            // Handle case where job with given ID is not found
            throw new IllegalArgumentException("Job with ID " + jobId + " not found");
        }
    }


    @Override
    public Job get(Long jobsId) {
       return this.JR.getOne(jobsId);
    }

	@Override
	public List<Job> getAllJobs() {
		// TODO Auto-generated method stub
		return this.JR.findAll();
	}

}

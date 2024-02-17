package com.gighub.clone.backend.service;

import java.util.List;
import java.util.Set;

//import com.exam.model.exam.Question;
//import com.exam.model.exam.Quiz;
import com.gighub.clone.backend.model.Job;

public interface JobService {
	
	  public Job addJob(Job job);

	    public Job updateJob(Job job);

	    public Set<Job> getJob();

	    public Job getJob(Long jobId);

	    public void deleteJob(Long jobId);

	    public Job get(Long jobId);

		public List<Job> getAllJobs();

}

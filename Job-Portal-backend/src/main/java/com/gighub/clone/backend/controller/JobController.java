package com.gighub.clone.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gighub.clone.backend.model.Job;
import com.gighub.clone.backend.service.JobService;

@RestController
@CrossOrigin("*")
@RequestMapping("/job")
public class JobController {
	 @Autowired
	    private JobService service;
	 
	 @PostMapping("/add")
	    public ResponseEntity<Job> add(@RequestBody Job job) {
	        return ResponseEntity.ok(this.service.addJob(job));
	    }
	 
	 @PutMapping("/")
	    public ResponseEntity<Job> update(@RequestBody Job job) {
	        return ResponseEntity.ok(this.service.updateJob(job));
	    }

	 @PutMapping("/{jobId}")
	 public ResponseEntity<Job> updateById(@PathVariable Long jobId, @RequestBody Job updatedJob) {
	     Job existingJob = service.getJob(jobId);
	     if (existingJob != null) {
	         updatedJob.setJobId(jobId);
	         return ResponseEntity.ok(service.updateJob(updatedJob));
	     } else {
	         return ResponseEntity.notFound().build();
	     }
	 }

	 
	    @GetMapping("/{jobId}")
	    public Job get(@PathVariable("jobId") Long jobId) {
	        return this.service.getJob(jobId);
	    }
	    
	    
	    @DeleteMapping("/{jobId}")
	    public void delete(@PathVariable("jobId") Long jobId) {
	        this.service.deleteJob(jobId);
	    }
	    
	    
	    @GetMapping("/alljobs")
		public ResponseEntity<?> getAllJobs(){
				List<Job> jobdetails=service.getAllJobs();
				return new ResponseEntity<List<Job>>(jobdetails,HttpStatus.OK);
			
		}
	    

	    
	    

}

package com.gighub.clone.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gighub.clone.backend.model.Job;

public interface JobRepository extends JpaRepository<Job, Long> {

}

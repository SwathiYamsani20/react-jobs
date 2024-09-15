import React from 'react';
import jobs from '../jobs';
import JobListings from "../components/JobListings/JobListings"

function JobsPage({jobslist}) {
  return (
    <div>
 
<JobListings jobslist={jobslist}/>
    </div>
  )
}

export default JobsPage
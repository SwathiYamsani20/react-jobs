import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from "../jobs";
import "../App.css";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function JobPage({jobslist}) {
    const {id}=useParams();
    const parsedId=parseInt(id,10);
    const foundJob=jobslist.find(val=>val.id===parsedId)
    
  return (
    <div >
        <div className='back-btn'>
            <a href='/jobs' className='back-btn' ><ArrowBackIcon />Back to Job Listings</a></div>
        <div className='job-container'>
       <div className='first-section'>
        <div className='job-primary'>
<div>
    {foundJob.type}
</div>
<h2>{foundJob.title}</h2>
<div>{foundJob.location}</div>
</div>
<div className='job-secondary'>
    <h3>Job Description</h3>
    <p>{foundJob.description}</p>
    <h3>
        Salary
    </h3>
    <p>{foundJob.salary}</p>
</div>
</div>
<div className='side-bar'>
    <div className='company-info'>
    <h3>Company Info</h3>
    <h2>{foundJob.company.name}</h2>
    <p>{foundJob.company.description}</p>
    <hr/>
    <h3 >Contact Email:</h3>
    <p className='contact'>{foundJob.company.contactEmail}</p>
    <h3>Contact Phone:</h3>
    <p className='contact'>{' '}{foundJob.company.contactPhone}</p>
    </div>
    <div className='manager'>
        <h3 style={{textAlign:'center'}}>Manage Job</h3>
        <Link to={`/edit-job/${foundJob.id}`} className='edit-btn'>Edit Job</Link>
        <button className='del-btn'>Delete Job</button>
    </div>

</div>
</div>


    </div>
  )
}

export default JobPage
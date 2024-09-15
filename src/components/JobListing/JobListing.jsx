import React from 'react';
import { Link } from 'react-router-dom';
import './JobListing.css';
import { useState } from 'react';

function JobListing({job}) {

const[showFullDescription,setShowFullDescription]=useState(false);
let description=job.description;
if(!showFullDescription){
    description=description.substring(0,90)+"..."
}
  return (
    <div className='job-list'>
        <div>{job.type}</div>
        <h3>{job.title}</h3>
        
        <div className='description'>{description}</div>
        <button className="more-btn" onClick={()=>setShowFullDescription((prev)=>!prev)}>{showFullDescription?"less":"More"}</button>
        <h3>{job.salary}</h3>
        <div className='location'>{job.location}</div>
        <Link to={`/jobs/${job.id}`} className='readmore-btn' style={{color:"white"}}>Read More</Link>



        </div>
  )
}

export default JobListing
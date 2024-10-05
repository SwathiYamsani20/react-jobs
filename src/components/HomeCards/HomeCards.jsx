import React from 'react'
import "./HomeCards.css"
import { Link } from 'react-router-dom'
function HomeCards() {
  return (
    <section className='home-cards'>
    <div className='first-card'>
        <h3>
For Developers
        </h3>
        <p>Browse our React jobs and start your career today</p>
        <Link to='/jobs'><button className='browse-btn button' >Browse Jobs</button></Link>
    </div>
    <div className='second-card'>
        <h3>
For Employers
        </h3>
        <p>
        List your job to find the perfect developer for the role
        </p>
       <Link to='/add-job'><button className='addjob-btn button'>Add Job</button></Link> 
    </div>
    </section>
  )
}

export default HomeCards
import React from 'react'
import "./HomeCards.css"
function HomeCards() {
  return (
    <section className='home-cards'>
    <div className='first-card'>
        <h3>
For Developers
        </h3>
        <p>Browse our React jobs and start your career today</p>
        <a href='/jobs'><button className='browse-btn button' >Browse Jobs</button></a>
    </div>
    <div className='second-card'>
        <h3>
For Employers
        </h3>
        <p>
        List your job to find the perfect developer for the role
        </p>
       <a href='add-job'><button className='addjob-btn button'>Add Job</button></a> 
    </div>
    </section>
  )
}

export default HomeCards
import React from 'react';
import HomeCards from '../components/HomeCards/HomeCards';
import Hero from '../components/Hero/Hero';
import JobListings from '../components/JobListings/JobListings';

function HomePage({jobslist}) {
  return (
    <div>
        <Hero />
        <HomeCards />
        <JobListings jobslist={jobslist} />
    </div>
  )
}

export default HomePage
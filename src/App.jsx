import React from 'react';
import MainLayout from './Layouts/MainLayout.jsx'
import HomePage from './Pages/HomePage.jsx'
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import JobsPage from './Pages/JobsPage.jsx';
import JobPage from './Pages/JobPage.jsx';
import AddJobPage from './Pages/AddJobPage.jsx';
import jobs from "../src/jobs.js"
import { useState } from 'react';
import JobListings from './components/JobListings/JobListings.jsx';

function App() {
  const [jobslist, setJobslist] = useState(jobs);

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage jobslist={jobslist}/>} />
        <Route path='/jobs' element={<JobsPage jobslist={jobslist}/>} />
        <Route path='/jobs/:id' element={<JobPage jobslist={jobslist}/>} />
        <Route path='/add-job' element={<AddJobPage jobslist={jobslist} setJobslist={setJobslist}/>} />
  
      </Route>
    )
  );
  
  
  return <RouterProvider router={router} />
}

export default App
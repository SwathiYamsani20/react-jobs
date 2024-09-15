import React from "react";
import JobListing from "../JobListing/JobListing";
import jobs from "../../jobs";
import "./JobListings.css";
import SearchBar from "../search/SearchBar";
import { useState } from "react";

function JobListings({ jobslist }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSorted,setIsSorted]=useState(false)

  const filteredJobs = jobslist.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  function getLowerBoundary(salaryRange){
    const match=salaryRange.match(/(\d+)K/);
    if(!match)
      return 0;
    return parseInt(match[1],10)*1000;
  }
  const sortedJobs=[...filteredJobs].sort((a,b)=>{
   const salaryA=getLowerBoundary(a.salary);
   const salaryB=getLowerBoundary(b.salary);
   return salaryA-salaryB;
  })
  function sortJobsBySalary(){
    setIsSorted(!isSorted);
  }
  
  return (
    <section className="jobs-container">
      <div>
        <h1 className="heading">Browse Jobs</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search jobs"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={sortJobsBySalary}>{isSorted?"unsort by salary":"sort by salary"}</button>
      </div>
      <div className="jobs-list">
        {!searchQuery
          ? (isSorted?sortedJobs:jobslist).map((job) => <JobListing key={job.id} job={job} />)
          : (isSorted?sortedJobs:filteredJobs).map((val) => <JobListing key={val.id} job={val} />)}
      </div>
    </section>
  );
}

export default JobListings;

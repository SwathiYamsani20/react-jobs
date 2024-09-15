import React from "react";
import { useState } from "react";
import jobs from "../jobs";
import {useNavigate} from "react-router-dom"

function AddJobPage({jobslist,setJobslist}) {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate=useNavigate();

  function handleAddJob(event) {
    event.preventDefault();
    const newJob = {
        id:jobslist.length+1,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    const updatedJobList = [...jobslist, newJob];
    setJobslist(updatedJobList);
    navigate('/jobs')
  }

  return (
    <div className="form-container">
      <form onSubmit={handleAddJob}>
        <h2>Add Job</h2>
        <div>
          <label htmlFor="type">Job Type</label>
          <select
            id="type"
            name="type"
            className="job-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option></option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Remote</option>
            <option>Internship</option>
          </select>
        </div>
        <div>
          <label>Job Listing Name</label>
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            placeholder="eg.Beautiful Apartment in Miami"
            className="job-list-name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Add any job duties, expectations, requirements, etc"
            className="description-text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="type">Salary</label>
          <select
            id="salary"
            name="salary"
            className="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          >
            <option></option>
            <option value="Under $50K">Under $50K</option>

            <option value="$50K - 60K">$50K - $60K</option>
            <option value="$60K - 70K">$60K - $70K</option>
            <option value="$70K - 80K">$70K - $80K</option>
            <option value="$80K - 90K">$80K - $90K</option>
            <option value="$90K - 100K">$90K - $100K</option>
            <option value="$100K - 125K">$100K - $125K</option>
            <option value="$125K - 150K">$125K - $150K</option>
            <option value="$150K - 175K">$150K - $175K</option>
            <option value="$175K - 200K">$175K - $200K</option>
            <option value="Over $200K">Over $200K</option>
          </select>
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Company Location"
            className="com-location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <h3>Company Info</h3>
        <div>
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            className="com-name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company_description">Company Description</label>
          <textarea
            id="company_description"
            name="company_description"
            rows="4"
            placeholder="What does your company do?"
            className="com-description"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="contact_email">Contact Email</label>
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            placeholder="Email address for applicants"
            className="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact_phone">Contact Phone</label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            placeholder="Optional phone for applicants"
            className="phone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="add-job-btn">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJobPage;

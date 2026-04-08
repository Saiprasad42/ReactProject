import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

let authenticated = true;
const IssueDetailPage = () => {
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!authenticated) {
      confirm("Not, hence redirecting back....");
      navigate('/');
    }
    else {
      confirm("Are you sure you want view to this details?")
    }
  }, []);
  return (
    <div>
      <h1>Issue Details</h1>
      <label>
      <p><b>Issue Description: </b>{params.IssueDescription}</p>
      </label>
		<h3><Link to="/">Back</Link></h3>
    </div>
     
  );
}

export default IssueDetailPage;
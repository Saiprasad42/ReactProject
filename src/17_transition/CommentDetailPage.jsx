import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import ReactRouterPrompt from "react-router-prompt";
import { Link } from 'react-router-dom';

let authenticated = true;
const CommentDetailPage = () => {
  let params = useParams();
  const navigate = useNavigate();

  //const [ confirm, setConfirm] = useState(false);
  //const handleInput = (e) => setConfirm(true);

  useEffect(() => {
    
    if (!authenticated) {
      confirm("Not, hence redirecting back....");
      navigate('/');
    }
    else {
      confirm("Are you sure you want view to this details?")
    }
  }, []);
//console.log("sai", useEffect);
  return (
    <div>
      <h2>Comment Details</h2>
      <label>
      <h3>Author: {params.author}</h3>
      </label>
				<h4><Link to="/">Back</Link></h4>
    </div>
     
  );
}

export default CommentDetailPage;
import React from 'react';
import { useParams } from 'react-router-dom'; // useParams is a React Hook from react-router-dom

const CommentDetailPage = () => {
  let params = useParams();
  let commentid = params.id;
  
  return (
    <div>
      <h2> Param Passed = {params.id} </h2>
    </div>
  );
}

export default CommentDetailPage;
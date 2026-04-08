import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
// Presentation Component - No interaction with store or model

const CommentForm = ({ errors, touched}) => (
    <div>
        <h1>Add Comment</h1>
        <Form >
            <div>
            <label>Author: 
                <Field type="text"
                    name="myauthor" placeholder="Enter Issue Description" />
                {touched.myauthor && errors.myauthor && <span style={{ color: 'red' }}>{errors.myauthor}</span>}
            </label>
            </div>
            <br />
            <label>Comment: 
                <Field type="text"
                    name="mycomment" placeholder="Enter Issue Description" />
                {touched.mycomment && errors.mycomment && <span style={{ color: 'red' }}>{errors.mycomment}</span>}
            </label>
            <br />
            <button type="submit">Submit</button>
        </Form>
    </div>
)
const FormikCommentForm = withFormik({
    mapPropsToValues({ Author, Comment }) {
        return {
            myauthor: Author || '',
            mycomment : Comment || ''
        }
    },
    validationSchema: Yup.object().shape({
        myauthor: Yup.string().required('Name is required'),
      //  mycomment: Yup.string().oneOf(["minor", "major", "critical"], "Invaild Severity").required("Please Select Severity"),
        mycomment: Yup.string().required("Please select status"),
    }),
    handleSubmit(values ,{props, setSubmitting}){
       // values.preventDefault(); // To avoid page reload
        props.onSubmit(values);
        setSubmitting(false);
    }
})(CommentForm)
export default  FormikCommentForm 


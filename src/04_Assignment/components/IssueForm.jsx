import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

const IssueForm = ({ errors, touched}) => (
    <div>
        <h1>Add Issue</h1>
        <Form >
            <div>
            <label>Description: 
               <Field type="text"
                    name="IssueDescription" placeholder="Enter Issue Description" 
                    style={{ width:'30%',outlineColor:'black'}} />
                {touched.IssueDescription && errors.IssueDescription && <span style={{ color: 'red'}}>{errors.IssueDescription}</span>}
            </label>   
            </div>
            <br />
            <div>
            <label>Severity: 
                <Field as="select" name="Severity"
                style={{ width:'10%',outlineColor:'black'}} >    
                <option value = "minor"> Minor</option>
                <option value = "major"> Major</option>
                <option value = "critical"> Critical</option>
                </Field>
               {/* {touched.Severity && errors.Severity && <span style={{ color: 'red' }}>{errors.Severity}</span>}*/}
            </label>
            </div>
            <br />  
            <div>
                <label>Status:
                    <Field type="radio" name="Status" value="Open" />Open
                    <Field type="radio" name="Status" value="In Progress"/>In Progress
                    <Field type="radio" name="Status" value="Closed"/>Closed
                   {/* {touched.Status && errors.Status && <span style={{ color: 'red' }}>{errors.Status}</span>}*/}
                </label>
            </div>
            <br />
            <button type="submit">Submit</button>
        </Form>
    </div>
)
    
const FormikIssueForm = withFormik({
    mapPropsToValues({ Description, Severity, Status }) {
        return {
            IssueDescription: Description || '',
            Severity : Severity || '',
            Status: Status || ''
        }
    },
    validationSchema: Yup.object().shape({
        IssueDescription: Yup.string().required('IssueDescription is required'),
        Severity: Yup.string().oneOf(["minor", "major", "critical"], "Invaild Severity").required("Please Select Severity"),
        Status: Yup.string().required("Please select status"),
    }),
    handleSubmit(values, { props, resetForm, setSubmitting, setErrors }) {
        props.onSubmit(values); 
        setSubmitting(false);     
    }
   
})(IssueForm)
export default FormikIssueForm;

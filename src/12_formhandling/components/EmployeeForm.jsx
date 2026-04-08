import React from 'react'
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'

const EmployeeForm = ({ errors, touched, isSubmitting }) => (
    <div>
        <h1>Employee Form</h1>
        <Form>
            <div>
            <label>employee:            
                <Field type="text" name="empname" placeholder="Empname"    />
                {touched.empname && errors.empname && <span style={{ color: 'red' }}>{errors.empname}</span>}
            </label>
            </div>
            <br />
            <div>
            <label>Severity: 
                <Field as="select" name="severity" >
                <option value = ""> Select a severity</option>
                <option value = "minor"> Minor</option>
                <option value = "major"> Major</option>
                <option value = "critical"> Critical</option>
                </Field>
                
            </label>
            </div>
            <br />
            
            <div>
                <label>Status:
                    <Field type="radio" name="myRadio" value="option1" /> Open
                    <Field type="radio" name="myRadio" value="option2" /> In Progress
                    <Field type="radio" name="myRadio" value="option3" /> Closed
                   
                </label>
            </div>
            <br />
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
)

const FormikEmployeeForm = withFormik({
    mapPropsToValues({ employeename, bSeverity, aStatus }) {
        return {
            empname: employeename || '',
            severity : bSeverity || '',
            myRadio: aStatus || ''
        }
    },
    validationSchema: Yup.object().shape({
        empname: Yup.string().required('Name is required'),
        //severity: Yup.string().oneOf(["minor", "major", "critical"], "Invaild Severity").required("Please Select Severity"),
        //myRadio: Yup.string().required("Please select status"),
    }),
    handleSubmit(values, { props, resetForm, setSubmitting, setErrors }) {
//      console.log(values);
        props.onSubmit(values); // Pass the submitted values to the parent component, "App"
        setSubmitting(false);
/*        
        setTimeout(() => {
            if (values.empname === 'God') {
                setErrors({ empname: 'You cannot add God as an employee' })
            } else {
                alert(JSON.stringify(values));
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
*/        
    }
})(EmployeeForm)

export default FormikEmployeeForm
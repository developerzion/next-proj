// Import Packages 
import { Formik, Form } from "formik"
import * as Yup from 'yup'
import axios from "axios"
import Router, { useRouter } from "next/router"

// Imported components 
import Navbar from "../Components/hoc/Navbar/navbar"
import Template from "../Components/FormTemplate/template"

const Create =()=> {
    
    const router = useRouter()

    const schema = Yup.object({
        name: Yup.string().required("Required"),        
        email: Yup.string().email("Not a valid email address").required("Required"),
        password: Yup.string().min(5).required("Required"),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords do not match").required("Required")
    
    })

    return (
        <>
            <Navbar />  
            <Formik
                initialValues={{
                    name: "",                                     
                    email: "",
                    password: "",
                    confirmpassword: ""
                }}

                validationSchema = {schema}

                onSubmit = {
                    values => {
                        
                        const user = {
                            "name": values.name,
                            "email": values.email,
                            "password": values.password
                        }

                        axios.post("http://localhost:3000/api/users", user)
                        .then(() => router.push('/login'))
                        .catch(err => console.error(err))
                    }                   
                }

            >
                {
                    formik => {
                        return (
                            <div className="container py-4">
                                <div className="row d-flex justify-content-center px-2">
                                    <div className="col-lg-6 shadow p-4">
                                        <h5 className="text-center">Sign Up Page</h5>

                                  
                                        <Form>
                                            
                                            <Template type="text" placeholder="Enter your name" name="name" />                                           
                                            <Template type="text" placeholder="Enter a valid email address" name="email" />
                                            <Template type="password" placeholder="**************" name="password" />
                                            <Template type="password" placeholder="Confirm Password" name="confirmpassword" />

                                            <div className="d-flex justify-content-center">
                                                <button type="submit" className="btn btn-success btn-block m-3">Register Account</button>                           
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Formik>               
        </>
    )
}

export default Create
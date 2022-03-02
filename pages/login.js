import { Formik, Form } from "formik"
import * as Yup from 'yup'
import axios from "axios"
import { useState, useEffect } from "react"



import Navbar from "../Components/hoc/Navbar/navbar"
import Template from "../Components/FormTemplate/template"
import { useRouter } from "next/router"


const Login =()=> {

    const [auth, setAuth] = useState()
    const [msg, setMsg] = useState("")

    const router = useRouter()    

    useEffect(() => {          
      if(auth){
        router.push("/dashboard")
      }
    })
      


    const validate = Yup.object({
        email: Yup.string().email().required("Provide your email"),
        password: Yup.string().required("Provide your password")
    })

    return(
        <>        
            <Navbar /> 
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                                
                validationSchema = { validate }

                onSubmit = {
                    values => {
                        axios.post("http://localhost:3000/api/login", values, {withCredentials: true})
                        .then(response => {
                            setMsg(response.data.msg) 
                            setAuth(response.data.isAuth) 
                        })  
                    }
                }
            >
                {
                    formik => {
                        return (
                            
                            <Form>                  
                                <div className="container theme-spacelab theme-compact">
                                    <div style={{height: "70px"}} className="hidden-print"></div>

                                    <div className="row">	
                                        <div className="col-md-6 ">
                                            <h3> Login page</h3>
                                           

                                            <div className="panel panel-success">	
                                                    {
                                                        auth === false ?  
                                                            <div className="alert alert-danger alert-dismissable">
                                                                {msg}
                                                            </div>
                                                        : 
                                                        null
                                                    }				
                                                <div className="panel-body">

                                                    <Template type="email" name="email" placeholder="Enter your email address" />
                                                    <Template type="password" name="password" placeholder="Enter your password" />

                                                    <button type="submit" className="btn btn-success mt-3">Click to Login</button>
                                                    <div className="form-group mt-3">
                                                        Already have an account ? Click <a href="index.php">here</a> to Enter className
                                                    </div>                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Form>
                        )
                    }
                }
            </Formik> 
        </>
    )
}
export default Login
import { useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"

const Dashboard =()=> {

    const router = useRouter()

    useEffect(()=> {   
        
        try {
            const resp= axios.get("http://localhost:3000/api/profile", {withCredentials: true})
            .then(response => {                
                console.log(response.data)
                if(!response.data.isAuth){
                    router.push("/login")
                }

             })            
        } catch (error) {            
            console.log(error)            
        }
    })    
    return(
        
        <>
            dashboard
        </>
    )
}

export default Dashboard
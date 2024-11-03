import 'bootstrap/dist/css/bootstrap.css';
import { FaGoogle } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import {googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
function App() {

   const [user,setUser]=useState([])
   const [profile,setProfile]=useState()
   const login=useGoogleLogin({
    onSuccess:(codeResponse)=>setUser(codeResponse),
    onerror:(error)=>console.log('Login Failed',error)
   })
   useEffect(
    ()=>{
      if(user){
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
          }
      })
        .then((res)=>setProfile(res.data))
        .catch((err)=>console.log(err));
      }}
    ,[user])
   const logOut=()=>{
googleLogout()
setProfile(null)
   }
    return (
        <>
          
            {profile ? (
                <div >
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (<div>
               <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">
                            <div className="col-15 mb-5 mb-lg-0">
        
                            <h3 className="mb-4">SADAK SURAKSHA SATHI</h3>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
          <span style={{color:"black"}}>SADAK SURAKSHA SATHI</span> support will help more drivers understand 
road safety guidelines, reducing accidents and violations. Drivers can quickly understand emergency alerts in their native language, allowing faster and safer actions.
          </p>
        </div>
                                <h3 className="mb-4">Login with your Account</h3>


                                <button
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    className="btn btn-lg btn-block btn-primary"
                                    style={{ backgroundColor: '#dd4b39' }}
                                    onClick={() => login()}
                                >
                                    <i className="fab fa-google me-2"></i> Continue with Google <FaGoogle />
                                </button>

                <br />  <br />             
            <div>
              <p className="mb-0">
   
   By continuing, you agree to Sadak Suraksha Sathi <span style={{color:"brown"}}>Terms of Use</span> and <span style={{color:"brown"}}>Privacy Policy</span>.
              </p>
            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                </div>
            )}
        </>
    )
}
export default App;

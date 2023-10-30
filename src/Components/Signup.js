import React, { useState } from 'react';

const Signup = () => {
  const [Cred, setCred] = useState({name:"",email:"",password:""});
  const handleSub=async (e)=>{
    e.preventDefault();
    let response=await fetch("http://localhost:5000/api/auth/createuser",{
      method:"POST",
      mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    body: JSON.stringify({name: Cred.name, email: Cred.email,password: Cred.password})
    });
    let data=await response.json();
    console.log(data);
  }
  const onChange=(e)=>{
    setCred({...Cred,[e.target.name]: e.target.value})
  }
  return (
    <div style={{alignItems: "center"}}>
      <div className="form1" >
      <form onSubmit={handleSub}>
        <h1>Kitty: Store And Oragnise Your Thoughts.</h1>
        <hr />
      <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" name="name" value={Cred.name}onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={Cred.email} onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={Cred.password} onChange={onChange}/>
  </div>
  <button type="submit" className="btn">Sign Up</button>
</form>
</div>
    </div>
  );
}

export default Signup;

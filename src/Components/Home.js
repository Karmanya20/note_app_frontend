import React,{useState} from 'react';
// import NoteCon from '../context/NoteContext';
import '../App.css'
const Home = () => {
  const [cred, setCred] = useState({email: "",password:""});
  const handleSub=async (e)=>{
    e.preventDefault()
      let response=await fetch('http://localhost:5000/api/auth/login',{
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    body: JSON.stringify({email: cred.email,password: cred.password})
    });
    let jsn=await response.json();
    console.log(jsn);
    
    
    
    }
    const onChange=(e)=>{
      setCred({...cred,[e.target.name]: e.target.value})
    }

  return (
    <div>
      <div className="container">
      <div className="img">
        <div className="content">
        <p className="text">Hello Folks! Want a trsutworthy friend whom you can share all your thoughts? Well, Kitty is just that for you. Have a friend with whom you can share and organise your thoughts securely.</p>
        <button className="btn" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign in</button>
        </div>
      </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Sign in</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSub}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={cred.email} id="exampleInputEmail1" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={cred.password} id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <label className="form-check-label" htmlFor="exampleCheck1">New user?  <a href="/signup">Sign Up</a></label>
  </div>
  <button type="submit" className="btn">Submit</button>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
< div className="des">
      <div className="body">
      <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://media.istockphoto.com/id/1161705492/vector/network-programming-security-concept-with-code-program-and-server-safe-icon-vector.jpg?s=612x612&w=0&k=20&c=2lSFIaQ6dUEa7H1tFeG9cehFQt6JeVfh1yvNucNwzWQ=" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">Your data is safe and secured with us and not shared to anyone.</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIDylA5xJ_O8J0uq2y_s0WvcKQa9f1WzsD0eAi5gl_wl2ghLmJ4KMBx8xPvg-k6PN_Hk&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">Your notes will be saved in the cloud.</p>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://freefrontend.com/assets/img/css-login-forms/2023-colorlib-reg-form-v26.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">Sign up and log in to create and access your notes.</p>
      </div>
    </div>
  </div>
</div>
      </div>
      <img src="https://i.pinimg.com/originals/8b/3e/e1/8b3ee1cd0b8069da00ffb8e872880a82.gif" className='img' alt="" />
      </div>
    </div>
  );
}

export default Home;

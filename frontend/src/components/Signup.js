import React,{useState}from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';



export default function Signup() {
    const [credentials,setcredentials]=useState({name:"",email:"",password:"",dob:""}) ;
    const [showAlert, setShowAlert] = useState(false); 
    const handleSubmit =async (e)=>{
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/newUser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,dob:credentials.dob})
        })
        console.log('======'+response)
        const json = await response.json()
        console.log(json);

        if (json.success) {
          setShowAlert(true);
          alert("Enter Valid Credentials"); 
        }
    }
const onChange=(event)=>{
  setcredentials({...credentials,[event.target.name]:event.target.value})
}
    return (
    <>
    
    <div className='container'>
    <h1 className='jj'>SignUp </h1>
    <form onSubmit={handleSubmit} className='d1'>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" name='dob' value={credentials.dob} onChange={onChange} id="exampleInputPassword1"/>
  </div>
 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success" >Submit</button>
  
  <Link to='/' className='m-3 btn btn-danger'>Already a user</Link>
</form>
{showAlert &&
          <div className="alert alert-success mt-3" role="alert">
            Registration successful!
          </div>
        }

</div>
    </>
  )
}












import React, { useState } from 'react'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [values, setvalues] = useState({
    name: '',
    email: '',

  });
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/student", values)
      .then((res)=>{
        setvalues(res.data); 
        navigate('/')
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='d-flex vh-100 vw-100 justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
        <h3 className='text-success text-center text-bold'>create Student</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" onChange={(e) => setvalues({ ...values, name: e.target.value })} id="exampleFormControlInput1" placeholder="enter your name" />

          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" class="form-control"
              onChange={(e) => setvalues({ ...values, email: e.target.value })} id="exampleFormControlInput1" placeholder="enter your email" />
          </div>
          <button className='btn btn-success'>submit</button>
        </form>
      </div>
    </div>


  )
}

export default CreateBook
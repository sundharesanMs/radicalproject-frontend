import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/update/' + id) // HTTP ஐ சேர்க்கவும்
      .then(res => {
        console.log(res);
        setStudent({ ...values, name: res.data[0].name, email: res.data[0].email });
      })
      .catch(err => console.log(err));
  }, []);
  const [values, setvalues] = useState({
    name: '',
    email: ''
  })
  const navigate = useNavigate();
  const handleupdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8000/update/' + id, values)
      .then(res => {
        console.log(res)
        navigate('/')
      })
  }
  return (
    <div className='d-flex vh-100 vw-100  justify-content-center align-items-center'>
      <div className="w-50 bg-white rounded p-3">
      <h4 className='text-primary text-bold text-center'>Update student </h4>
        <form onSubmit={handleupdate}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control"
               onChange={(e) => setvalues({ ...values, name: e.target.value })} id="exampleFormControlInput1" placeholder="name@example.com" />

          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" class="form-control"
               onChange={(e) => setvalues({ ...values, email: e.target.value })} id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <Link to="/" className="btn btn-primary p -3 m-2">Back</Link>
          <button className='btn btn-success'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateBook
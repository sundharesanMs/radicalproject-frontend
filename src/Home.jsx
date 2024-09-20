import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                console.log(res.data); // Log the response
                // Assuming the API returns an array directly
                setdata(res.data);
              
            })
            .catch(err => console.log(err));
    }, []);
    // handel dlete....
    const handleDelete = (id) => {
        axios.delete('http://localhost:8000/delete/' + id)
            .then(res => {
                setdata(data.filter(student => student.id !== id));
            })

            
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 vw-100 justify-content-center align-items-center '>
            <div className='w-50 bg-white rounded p-3'>
                <h4 className='text-primary text-bold text-center'>Student Management</h4>
                <div className='d-flex justify-content-end mb-2'>
                    <Link to="/create" className="btn btn-success">Create</Link>
                </div>
                <table className = "table table-hover table-striped p-3">
                    <thead className='table-dark pt-2'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {data.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td className='m-3 '>
                                    <Link to={`/read/${student.id}`} className='btn bg-info m-2'>Read</Link>
                                    <Link to={`/edit/${student.id}`} className='btn bg-info'>Edit</Link>
                                    <button onClick={() => handleDelete(student.id)} className='btn bg-danger m-2'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;

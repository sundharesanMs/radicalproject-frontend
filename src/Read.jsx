import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/read/' + id)
            .then(res => {
                console.log(res);
                setStudent(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='d-flex vh-100 vw-100 justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded ml-3'>
                <h3 className="text-center text-danger text-bold">Read</h3>
                <div className='p-3'>
                    <h4>ID: {student.id}</h4>
                    <h4>Name: {student.name}</h4>
                    <h4>Email: {student.email}</h4>
                </div>
                <div className='p-3'>
                    <Link to="/" className="btn btn-primary m-1">Back</Link>
                    <Link to={`/edit/${student.id}`} className='btn btn-info'>Edit</Link>
                </div>
            </div>
        </div>
    );
}

export default Read;




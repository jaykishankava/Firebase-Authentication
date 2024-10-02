import React, { useEffect } from 'react'
import Header from '../Component/Header'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser , deleteUser } from '../Redux/Action/action'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {
    const navigate = useNavigate(); // useNavigate hook inside the component
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewUser())
    },[])

    const users = useSelector(state => state.crud.user)

    const deleteRecord = (id) => {
        dispatch(deleteUser(id))
        toast.error("record delete...")
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto mt-5">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Hobby</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((val) => {
                                        console.log(val);
                                        return (
                                            <tr key={val.id}>
                                                <td>{val.id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.task}</td>
                                                <td>{val.gender}</td>
                                                <td>{val.hobby}</td>                                                
                                                <td>{val.city}</td>                                                
                                                <td>
                                                    <button onClick={() => deleteRecord(val.id)} className='btn btn-sm btn-danger me-2 '>Delete</button>
                                                    
                                                    <button className='btn btn-success btn-sm' onClick={()=> navigate('/edit',{state : val})}>Edit</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

<ToastContainer />
        </div>
    )
}

export default View

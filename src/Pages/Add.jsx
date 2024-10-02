import React, { useState } from 'react'
import Header from '../Component/Header'
import "./Add.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/Action/action'
const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [task , setTask] = useState("")
    const [gender, setGender] = useState("")
    const [hobby, setHobby] = useState([])
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            id:Math.floor(Math.random()*10000),
            name : name,
            email : email,
            task : task,
            gender : gender,
            hobby : hobby,
            city : city,
            
        }

        dispatch(addUser(obj))
        alert("sucessfully add.")
        navigate('/view')
    }

    const handleCheckboxchange = (e) => {
        const {value} = e.target
        setHobby((preHobbys) => {
            if(preHobbys.includes(value)){
                return preHobbys.filter((hobby) => hobby !== value)
            }
            else{
                return [...preHobbys,value]
            }
        })
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="bg col-lg-7 mb-5 mx-auto mt-5 p-3 shadow">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name || ""} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Task</label>
                                <input type="text" className="form-control" onChange={(e) => setTask(e.target.value)} value={task || ""} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Gender</label><br></br>
                                <input type="radio" className='form-label px-2 py-1 rounded' onChange={(e) => setGender(e.target.value)} value="Male" checked={gender == "Male"}/>Male<br></br>
                                <input type="radio" className='form-label px-2 py-1 rounded' onChange={(e) => setGender(e.target.value)} value="Female" checked={gender == "Female"}/>Female
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Hobiy</label><br></br>
                                <input type="checkbox" className='form-label px-2 py-1 rounded' onChange={handleCheckboxchange} value="traweling" checked={hobby.includes("traweling")}/>traweling 
                                <input type="checkbox" className='form-label px-2 py-1 rounded ms-2' onChange={handleCheckboxchange} value="writing" checked={hobby.includes("writing")}/> writing
                                <input type="checkbox" className='form-label px-2 py-1 rounded ms-2' onChange={handleCheckboxchange} value="reading" checked={hobby.includes("reading")}/> reading
                                <input type="checkbox" className='form-label px-2 py-1 rounded ms-2' onChange={handleCheckboxchange} value="geming" checked={hobby.includes("geming")}/> geming
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCity(e.target.value)} value={city || ""} />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Add

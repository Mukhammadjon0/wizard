import React, { useContext } from 'react'
import "./processing.css"
import { StateContext } from '../../context'
import { useNavigate } from "react-router-dom"
function Processing() {
    const navigate = useNavigate()
    const { user } = useContext(StateContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/data")

    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Do you agree to the processing of personal data?</h2>
            <label htmlFor="">
                Email address
                <input type="email" disabled value={user.email} />
            </label>
            <label htmlFor="" className='check'>
                <input type="checkbox" name="" id="" required />
                Yes, I agree
            </label>
            <label htmlFor="" className='check'>
                <input type="checkbox" name="" id="" required />
                Site uses cookie agreement
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Processing
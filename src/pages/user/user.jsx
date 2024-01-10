import React, { useContext } from 'react'
import "./user.css"
import { useNavigate } from "react-router-dom"
import { StateContext } from '../../context'
function User() {
    const { setUser, user } = useContext(StateContext)
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setUser((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));
    };
    const handleNext = (e) => {
        e.preventDefault()
        navigate("/payment")
    }
    return (
        <div>
            <h2>Enter your personal data</h2>
            <form onSubmit={handleNext}>
                <label htmlFor="firstName">
                    First name
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="lastName">
                    Last name
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        value={user.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="middleName">
                    Middle name (optional)
                    <input
                        type="text"
                        name="middleName"
                        id="middleName"
                        placeholder="Middle name (optional)"
                        value={user.middleName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="birthday">
                    Birthday (optional)
                    <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        value={user.birthday}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        value={user.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="gender">
                    Select your gender
                    <select
                        name="gender"
                        id="gender"
                        value={user.gender}
                        onChange={handleChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <div className="age">
                    <input
                        type="checkbox"
                        id="isOver18"
                        name="isOver18"
                        checked={user.isOver18}
                        onChange={handleChange}
                    />
                    <span>I'm older than 18</span>
                </div>
                <button>Next</button>
            </form>
        </div>
    )
}

export default User
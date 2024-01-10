import React, { useContext } from 'react'
import "./data.css"
import { StateContext } from '../../context'
function Data() {
    const { user } = useContext(StateContext)
    return (
        <form>
            <h1>Here is your data</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis repellendus quis vitae voluptatum quisquam molestias laboriosam assumenda quas, consequuntur beatae.</p>
            <label htmlFor="firstName">
                First name
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    value={user.firstName}
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
                />
            </label>
            <label htmlFor="birthday">
                Birthday (optional)
                <input
                    type="date"
                    name="birthday"
                    id="birthday"
                    value={user.birthday}
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
                />
            </label>
            <label htmlFor="gender">
                Your gender
                <select
                    name="gender"
                    id="gender"
                    value={user.gender}
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <label htmlFor="gender">
                Your card number
                <input
                    type="text"
                    maxLength={19}
                    value={user.cardNumber}
                    placeholder="Enter your card number"
                    required
                />
            </label>
        </form>
    )
}

export default Data
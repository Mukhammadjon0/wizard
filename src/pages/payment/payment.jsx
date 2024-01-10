import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { StateContext } from '../../context';
function Payment() {
    const { setUser } = useContext(StateContext)
    const navigate = useNavigate()
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const formatCreditCardNumber = (input) => {
        return input.replace(/(\d{4})/g, '$1 ').trim();
    };
    const handleInputChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '');
        const formattedValue = formatCreditCardNumber(inputValue);
        setCreditCardNumber(formattedValue);
    };
    const handleNext = (e) => {
        e.preventDefault();
        setUser((prevUser) => ({
            ...prevUser,
            cardNumber: creditCardNumber,
        }));
        navigate("/processing");
    };

    return (
        <form onSubmit={handleNext}>
            <label>Credit Card Number</label>
            <input
                type="text"
                maxLength={19}
                value={creditCardNumber}
                placeholder="Enter your card number"
                onChange={handleInputChange}
                required
            />
            <button>Next</button>
        </form>
    )
}

export default Payment
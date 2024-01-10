import React, { useContext, useState } from 'react'
import "./plan.css"
import { subscriptionPlans } from '../../data';
import { useNavigate } from "react-router-dom"
import { StateContext } from '../../context';
function Plan() {
    const { setUser } = useContext(StateContext)
    const navigate = useNavigate()
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const handleNext = () => {
        if (selectedPlan) {
            navigate("/user");
            setUser(prevUser => ({ ...prevUser, plan: selectedPlan.name }));
        }
    }
    return (
        <div className='subscription'>
            <h2>Choose a Subscription Plan</h2>
            <div className='plans'>
                {subscriptionPlans.map((plan) => (
                    <div key={plan.id} className={selectedPlan === plan ? 'selected' : 'plan'} onClick={() => handleSelectPlan(plan)}>
                        <h3>{plan.name}</h3>
                        <p>${plan.price}/month</p>
                        <ul>
                            {plan.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Plan
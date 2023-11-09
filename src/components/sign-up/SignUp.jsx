import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const handleChange = (event) =>{
        event.preventDefault();
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Sign Up with your Email and Password.</h1>

            <form action="">
                <label>Display Name:</label>
                <input required type="text" onChange={handleChange} name='displayNName' value={displayName}/>

                <label>Email:</label>
                <input required type="email" onChange={handleChange} name='email' value={email}/>

                <label>Password:</label>
                <input required type="password" onChange={handleChange} name='password' value={password}/>

                <label>Confirm Password:</label>
                <input required type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                <button type="button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;

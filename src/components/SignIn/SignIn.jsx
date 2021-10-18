import React, {useState} from 'react'
import './SingInStyles.scss';
import FormInput from '../FormInput/FormInput';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className="sign-in" onSubmit={(e)=>handleSubmit(e)}>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span> 

            <form>
                <FormInput label="Email" name="email" type="email" value={email} handleChange={(e)=>setEmail(e.target.value)} required />
                <FormInput label="Password" name="password" type="password" handleChange={(e)=>setPassword(e.target.value)} value={password} required />
                <input type='submit' value="Submit Form" />
            </form>

        </div>
    )
}

export default SignIn

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";



export const Login = () => {
    const { register, formState: { errors }, handleSubmit} = useForm();
    const onSubmit = (event) => {
       
        if(email === 'admin@gmail.com' && password === 'admin'){
            navigate('/createUsers')
        } else {
            navigate('/usersList')
        }
        // event.stopPropagation();
        // event.preventDefault();
    }
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div className="login_page">
            <h1 style={{marginLeft: '108px'}}>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email", { required: true, maxLength: 20, minLength: 2 })} 
                        aria-invalid={errors.email ? "true" : "false"} 
                        onChange={handleEmailChange} 
                        value={email}/>
                {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
                <input type='password' {...register("password", { required: true, maxLength: 30, minLength: 5 })} 
                        aria-invalid={errors.password ? "true" : "false"}
                        onChange={handlePasswordChange}
                        value={password}/>
                {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                <input type='submit' value={'Sign In'}/>
            </form>
        </div>
    )
}
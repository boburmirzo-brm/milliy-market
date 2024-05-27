import React, { useState, useEffect } from 'react'
import loginimg from '../../assets/images/login/login-img.png'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username.trim() || !password.trim()) {
            return
        }
    }

    return (
        <>
            <div className="login">
                <img src={loginimg} alt="login image" />
                <div className="login__right">
                    <p className='login__title'>Log in to Exclusive</p>
                    <p className='login__content'>Enter your details below</p>
                    <form onSubmit={handleSubmit} className='loging'>
                        <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Email or Phone Number' />
                        <div className="paswword">
                            <input required value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Password' />
                            {
                                password &&
                                <button className='paswword__button' onClick={() => setShowPassword(p => !p)} type='button'>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            }
                        </div>
                        <Button className='login__button' type='submit' variant="outlined">Log In</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
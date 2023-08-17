import React, { useState } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';


export function Home(props) {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const handleSubmit = (e) => {
        alert("submitting");
     console.log("submitted");   
        
    }
    return (
            <div className="container loginbody">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <img src="https://ik.imagekit.io/qmm9bxxcw/IOT/OBI_Logo.png?updatedAt=1691582029328" style={{ "width": "80px", "height": "80px" }} />
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" placeholder="User name / Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <Link to="/dashboard" >
                            <button className="button login__submit" type="submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            </Link>				
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>		
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
        )
    }

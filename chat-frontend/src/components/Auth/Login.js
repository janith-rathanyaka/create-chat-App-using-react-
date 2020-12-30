import React from 'react'
import loginImage from '../../assets/images/login.svg'

import './Auth.scss'
const Login = () =>{
     return (
         <div id="auth-container">
              <div id="auth-card">
                    <div>
                         <div id="image-section">
                             <img src={loginImage} alt="login"           />
                         </div>

                         <div id="form-section">
                             <h2>Welcome back</h2>
                             <form>
                                  <div className="Input-fleld mb-1">
                                        <input placeholder="Email" />
                                  </div>
                                  <div className="Input-fleld mb-2">
                                        <input placeholder="Password" />
                                  </div>
                                  <button>LOGIN</button>
                             </form>
                             <p>Don't have an account Register</p>
                         </div>
                    </div>
              </div>

         </div>
     );
}
export default Login
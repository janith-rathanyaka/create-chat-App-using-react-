import React from 'react'
import RegisterImage from '../../assets/images/register.svg'

import './Auth.scss'
const Register = () =>{
     return (
      <div id="auth-container">
      <div id="auth-card">
            <div>
                 <div id="image-section">
                     <img src={RegisterImage} alt="Register"           />
                 </div>

                 <div id="form-section">
                     <h2>Create an account</h2>
                     <form>
                          <div className="Input-fleld mb-1">
                                <input placeholder="First name" />
                          </div>
                          <div className="Input-fleld mb-1">
                                <input placeholder="Last name" />
                          </div>
                          <div className="Input-fleld mb-1">
                                <input placeholder="Email" />
                          </div>
                          <div className="Input-fleld mb-1">
                              <select>
                                 <option value='male'>Male</option>
                                 <option value='female'>Female</option>
                              </select>
                          </div>
                          <div className="Input-fleld mb-2">
                                <input placeholder="Password" />
                          </div>
                          <button>REGISTER</button>
                     </form>
                     <p>If you have account LOGIN </p>
                 </div>
            </div>
      </div>

 </div>
     );
}

export default Register
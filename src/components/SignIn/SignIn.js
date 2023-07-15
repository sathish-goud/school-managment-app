import React from 'react';
import '../../styles/SignIn.css';
import '../../styles/SignUp.css';
const SignIn = () => {
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;

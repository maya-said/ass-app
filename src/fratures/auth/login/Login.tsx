import "./Login.scss";

const Login = () => {
    return (

    <div className="form-container">
        <div className="form-header">
            <h3>Log In</h3>
        </div>
        <div className="input-container">
            <input type="text" placeholder="username" required /> 
            <input type="password" placeholder="password" required /> 
        <div className="forgot-password">
            <a href="#">Forgot password</a> 
        </div>    
        <div className="botton">
            <button className="submit" type="submit">LOG IN</button> 
        </div>  
        <div className="signup">
            Don't Have An Account?<a href="signup.html"> sign up</a>  
        </div>
    </div>
    </div>
    );
}   
export default Login;
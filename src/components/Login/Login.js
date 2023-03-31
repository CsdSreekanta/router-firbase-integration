import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h3>Please Login!!</h3>
            <button onClick={signInWithGoogle} style={{margin: '20px', color:'goldenrod', background:'black', padding:'10px', borderRadius:'4px'}}>Google SignIn</button>
            <form>
               
                <input type="email" name="" id="" placeholder='Enter your email'/>
                <br />
                <input type="password" name="" id="" placeholder='Enter your password'/>
                <br />
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;
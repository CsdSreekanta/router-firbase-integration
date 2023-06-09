import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>Current user is:</h1>
            <p>{user? user.displayName: 'nobody is their'}</p>
        </div>
    );
};

export default Home;
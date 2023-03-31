import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h2>Who is their</h2>
            <p> {user? user.displayName: "Voot is here"}</p>
            
        </div>
    );
};

export default Products;
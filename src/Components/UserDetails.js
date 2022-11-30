import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userId } = useParams();
    // const userId = params.userId;
    return ( 
        <>
            <h2>This is User Deatils Page {userId}</h2>
        </>
     );
}
 
export default UserDetails;
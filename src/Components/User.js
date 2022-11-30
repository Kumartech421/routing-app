import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function User(){
        const navigation = useNavigate();
        return (
            <>
                <Outlet />
                <h1 onClick={() => navigation('userDetails')}>User 1</h1>
            </>
         );
    }
 
export default User;
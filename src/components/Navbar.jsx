import React from 'react';
import { Link } from 'react-router-dom';
import useIcon from"../assets/user.png"

const Navbar = () => {

    return (
        <div className='flex justify-between items-center'> 
            
            <div className=""></div>
            <div className="nav space-x-6">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-4 items-center">
                <div className="">
                    <img src={useIcon} alt="" />
                </div>
                <div className="">
                    <button className='btn btn-neutral rounded-none'>Login</button>
                </div>
            </div>





         </div>
    );
};

export default Navbar;
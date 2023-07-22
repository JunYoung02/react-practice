import React from 'react';
import mainLogo from '../img/mainlogo.png';
import user from '../img/user.png';
import "./Header.css";
import {Link, Outlet} from 'react-router-dom';

function Header(){
    return(
        <div>
            <div className="img">
                <Link to="/"><img className='logo' src={mainLogo} alt="메인 로고"/></Link>
                <img className='user' src={user} alt="유저이미지"/>
                
            </div>
            <div className="nav-line"></div>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default Header;
import React from 'react';
import style from './NavBar.module.scss'
import Logo from '../../public/g.svg'
import Image from 'next/image';
import Link from 'next/link';
const NavBar = () => {
    return (
        <>
            <nav className={style.NavBar}>
                
                <div className={style.Logo}>
                    <span  className={style.img}><Image  src={Logo} alt="#" /></span>
                    <p>Gallery</p>
                    <i className="ri-arrow-drop-left-line"></i>
                </div>
                
                <ul>
                    <li><b>Main sections</b></li>
                    <li className={style.active}><i className="ri-layout-2-fill"></i><p>Gallery</p></li>
                    <li><i className="ri-landscape-line"></i>  <p>All Galleries</p></li>
                    <li><i className="ri-user-smile-line"></i> <p>All Users</p></li>
                </ul>
                <ul>
                    <li><b>More sections</b></li>
                    <li><i className="ri-user-heart-line"></i><p>Followers</p></li>
                    <li><i className="ri-notification-badge-fill"></i> <p>Notifications</p></li>
                    <li><i className="ri-star-smile-line"></i><p>Weekly top</p></li>
                </ul>
                <div className={style.user}>
                    <span className={style.UserImg}></span>
                    <p className={style.UserName}>YefersonRuzon</p>
                    <span className={style.Btn}>
                        <i className="ri-more-2-fill"></i>
                    </span>
                </div>
            </nav>

        </>
    );
}

export default NavBar;

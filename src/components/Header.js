import React from 'react'
import "./css/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import gmailLogo from "../assets/logo_gmail_lockup_default_1x_r2.png"
import { IconButton, Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../utils/firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

  return (
    <div className="header">
        
        <div className="header__left">       
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src={gmailLogo} alt="" />
        </div>

        <div className="header__middle">
            <SearchIcon />
            <input placeholder="Search mail" type="text" />
            <ArrowDropDownIcon className="header__inputCaret" />
        </div>

        <div className="header__right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <Avatar onClick={signOut} src={user?.photoUrl} />
        </div>

    </div>
  )
}

export default Header
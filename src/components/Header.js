import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/logo.png'
import { LogoDiv, ImageLogo } from './style';
import { useHistory } from 'react-router-dom';


function Header() {
    const history = useHistory();
    const handleClick = () => history.push('/');
    return (
        <AppBar style={{ background: '#1a2437' }}>
            <Toolbar>
                <LogoDiv onClick={handleClick}>
                    <ImageLogo src={logo} alt="logo" />
                </LogoDiv>
            </Toolbar>
        </AppBar>
    );
}
export default Header;
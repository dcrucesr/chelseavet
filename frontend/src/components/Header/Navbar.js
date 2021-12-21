import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import './Navbar.scss';

export const Navbar = () => {

    //Puede usarse para desaparece un boton en caso este registrado
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();  
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        ChelseaVet <i className='fab da-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Servicios
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Productos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/iniciar-sesion' className='nav-links' onClick={closeMobileMenu}>
                            <Button variant="outlined" className="navbar-bLogin">
                                Iniciar Sesión
                            </Button>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/registrarse' className='nav-links' onClick={closeMobileMenu}>
                            <Button variant="outlined" className="navbar-bRegister">
                                Registrarse
                            </Button>
                            </Link>
                        </li> 
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}



import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
      // window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar__container container'>
            <Link to='/' className='navbar__logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar__icon' />
              Barcelona
            </Link>
            <div className='navbar__menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
              <li className='navbar__item'>
                <Link to='/' className='navbar__links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='navbar__item'>
                <Link
                  to='/services'
                  className='navbar__links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='navbar__item'>
                <Link
                  to='/products'
                  className='navbar__links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className='navbar__btn'>
                {button ? (
                  <Link to='/sign-up' className='navbar__btn-link'>
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                    <Link to='/sign-up' className='navbar__btn-link'>
                      <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                      >
                        SIGN UP
                    </Button>
                    </Link>
                  )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

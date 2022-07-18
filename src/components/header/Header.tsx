import React from 'react';
import { HeaderProps } from './HeaderInterface';
import { Button } from '../button/Button';
import './Header.css';

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
      <img src= "https://www.onedatasoftware.com/wp-content/uploads/2018/06/OD_LOGO_01.png" />
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
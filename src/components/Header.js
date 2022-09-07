import React from "react";
import './Header.css';

export default({black}) =>{
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netiflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}
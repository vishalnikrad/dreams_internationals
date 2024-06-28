import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <div className="d-flex flex-column">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to={'/'}><span style={{fontSize:'17px'}}>Header</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to={'/'}>First Component</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={'/second-component'}>Second Component</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={'/third-component'}>Third Component</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;

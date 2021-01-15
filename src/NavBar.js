import React, { useState } from 'react'

function NavBar() {
    const[open, setOpen] = useState(false);

    return (
      <div>
        <nav>
          <div className="logo">SportSolent</div>
          <ul className="nav-links" style={{transform: open ? "translateX(0px)" :"translateX(-500px)"}}>
            <li>
              <a href="http://localhost:3000/society">Societies</a>
            </li>
            <li>
              <a>My Societies</a>
            </li>
            <li>
              <a>My account</a>
            </li>
          </ul>
          <i onClick={() => setOpen(!open)} class="fas fa-bars burger"></i>
        </nav>
      </div>
    );
  }

export default NavBar
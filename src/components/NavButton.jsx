import React from 'react';
import { Link } from 'react-router-dom';

function NavButton(){
  return (
    <div>
      <Link to='/'><button>Go Back</button>
      </Link>
    </div>
  );
}

export default NavButton;

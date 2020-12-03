import React from "react";
import { Link } from "gatsby";
import Resume from "../documnets/resume.pdf";

const Header = () => (
  <header className='max-auto bg-blue-400'>
    <nav className='flex justify-between'>
      <div className='flex flex-row p-8 text-white'>
        <Link to='/' activeClassName='active' className='pr-5 text-xl	'>
          About
        </Link>
        <a
          href={Resume}
          target='_blank'
          rel='noopener noreferrer'
          className='pr-5 text-xl'>
          Resume
        </a>
      </div>
    </nav>
  </header>
);

export default Header;

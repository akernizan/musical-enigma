import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className='max-auto bg-indigo-300'>
    <nav className='flex justify-between'>
      <div className='flex flex-row p-8 text-white'>
        <Link to='/' activeClassName='active' className='pr-5'>
          About
        </Link>
        <Link to='/resume' activeClassName='active' className='pr-5'>
          Resume
        </Link>
        <Link to='/contact' activeClassName='active' className='pr-5'>
          Contact
        </Link>
        {/* <a
          href='https://tech-blog.netlify.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Blog
        </a> */}
      </div>
    </nav>
  </header>
);

export default Header;

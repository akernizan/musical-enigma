import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className='bg-blue-400'>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

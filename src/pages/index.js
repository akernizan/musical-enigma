import React from "react";
import Layout from "../components/layout";

export default function Home() {
  const calculateYears = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear - 2015;
  };
  return (
    <Layout>
      <div className='homepage__wrapper'>
        <div className='homepage__info'>
          <h1>Hi, I'm Akosua.</h1>
          <p>
            {`I am a Web Developer based in NYC. I have ${calculateYears()}  years of professional
            experience on the front end. Available to solve problems, play with
            pixels, and expand my mind.`}
          </p>
        </div>
      </div>
    </Layout>
  );
}

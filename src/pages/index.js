import React from "react";
import Layout from "../components/layout";
import Resume from "../components/resume";
import Contact from "../components/contact";
import "../styles.css";

export default function Home() {
  const calculateYears = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear - 2015;
  };
  return (
    <Layout>
      <div className='flex flex-col h-screen'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <div>
            <h1 className='text-8xl text-white'>Hi, I'm Akosua.</h1>
            <p className='text-xl w-1/3 text-white'>
              {`I am a Web Developer based in NYC. I have ${calculateYears()}  years of professional
            experience on the front end. Available to solve problems, play with
            pixels, and expand my mind.`}
            </p>
          </div>
        </div>
      </div>
      <Resume color='blue' />
      <Contact />
    </Layout>
  );
}

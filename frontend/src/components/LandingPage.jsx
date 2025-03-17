import React from "react";
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();

    const handleStart = (e) => {
        e.preventDefault();
        navigate('/litgptchat');
    }

    return (
      <div className="flex flex-wrap">
      <div className="mb-10 w-full sm:w-8/12 sm:h-screen">
        <div className="container mx-auto h-full sm:p-10 bg-gray-950">
          <nav className="flex flex-wrap items-center px-4">
          <div>
          <img src="/IET_Logo.svg.png" alt="" className="w-18 mr-4" />
        </div>
            <div className="text-4xl font-bold text-white">LitGPT<span className="text-fuchsia-700">.</span></div>
            
          </nav>
          <header className="container mt-10 h-full items-center px-4 lg:mt-0 lg:flex">
            <div className="w-full">
              <h1 className="text-4xl font-bold lg:text-6xl mb-12 text-white">Experience the power of <span className="text-fuchsia-400">AI-driven </span>storywriting</h1>
             
              <button onClick = {handleStart} className="rounded bg-fuchsia-700 px-4 py-2 text-2xl font-medium text-white shadow hover:cursor-pointer">Start Here</button>
            </div>
          </header>
        </div>
      </div>
      <img src="/walkator-klMii3cR9iI-unsplash.jpg" alt="Leafs" className="h-48 w-full object-cover sm:h-screen sm:w-4/12" />
    </div>
    
    );
};

export default LandingPage;

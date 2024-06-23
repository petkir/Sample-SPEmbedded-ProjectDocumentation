
import React from 'react';
import { useState } from "react";
import { ContainerNavigation } from "./ContainerNavigation";
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { Login } from '@microsoft/mgt-react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Left Navigation */}
      <nav className={`v-spacebetween fixed z-10 inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transition-transform transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="text-2xl font-bold mb-4">cuDoc</div>
        <ContainerNavigation />
        <div style={{flexGrow:"4"}}>

        </div>
        <ul>
          <li className="mb-2">
            <Link to="/createcontainer" className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" style={{display:"inline",marginRight:"0.5em"}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>ProjectDoc</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="mb-2">
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="text-white">About</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="text-white">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-gray-200 p-4 flex items-center justify-between">
          <button
            className="text-gray-800"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? 'Close' : 'Menu'}
          </button>
          <div className="text-xl font-bold">
            <Login />

          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <CSSTransition
            in={true} // Add your logic to determine when the transition should occur
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div>
              {children}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

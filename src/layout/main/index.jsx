import React, { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from '../nav';
import Footer from '../footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './index.scss'

const Layout = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowButton(true)
            } else showButton(false);
        });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <>
          <Navbar />
          <main className="app">
              <Outlet />
          </main>
          {showButton && (
              <button
                  className='back-to-top'
                  name='back to top'
                  aria-label='back top top of page'
                  onClick={scrollToTop}
              >
                  <FontAwesomeIcon icon={faArrowUp}/>
              </button>
          )}
          {/* <Footer /> */}
          <ScrollRestoration />
    </>
  )
}

export default Layout

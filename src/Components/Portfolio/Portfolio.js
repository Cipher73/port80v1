import React from "react";
import "./Portfolio.css";
import card1 from '../../Backgrounds/card1.png'
import card2 from '../../Backgrounds/card2.png'
import card3 from '../../Backgrounds/card3.png'
import card4 from '../../Backgrounds/card4.png'
import card5 from '../../Backgrounds/card5.png'

const Portfolio = () => {
  
  return (
    <div className="portfolio">
       <h1 className="port-heading">My<span >Projects</span> </h1>
      <div className="container">
      <div className="card">
          <div className="card-media">
            <div className="PortfolioCard">
            <div className="card-img">
              <img className="img" src={card5} />
               </div>
              <p className="card__name">DFMPC-Student-Placement-System</p>
              <div className="grid-container">
                

                <div className="short-description">This is a student app that integrates with the student placement system in order to offer a seamless experience.</div>
              
              </div>
            </div>
          </div>
          <div className="card-content">
            <header className="card-header">
             
              <h3>
                <a href="https://github.com/Software-Design-2022/DFMPC-Student-Placement-System " >DFMPC-Student-Placement-System</a>
              </h3>
            </header>
            <div className="long-description">
            <p>
              Used tools: React Native, Javascript, Firebase.
              </p>
              <p>
              The authors are Riot Ndlovu, Angela Nkosi, Callum Muller, Shagan Plaatjies, and Nokuthaba Moyo.
              </p>
            </div>
            <footer className="footer">
              <a href="https://github.com/Software-Design-2022/DFMPC-Student-Placement-System " className="githublink">
                GitHub
                <svg fill="none" viewBox="0 0 16 8">
                  <path
                    d="M15.354 4.354a.5.5 0 000-.708L12.172.464a.5.5 0 10-.708.708L14.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h15v-1H0v1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </footer>
          </div>
          <div className="border-style">
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </div>
        <div className="card">
          <div className="card-media">
            <div className="PortfolioCard">
            <div className="card-img">
              <img className="img" src={card2} />
               </div>
              <p className="card__name">FACK</p>
              <div className="grid-container">
              
                <div className="short-description"> <p> App for students to connect .It allows students to ask questions and provide answers to already asked questions. Quetions are listed based on the answers and number of likes. </p></div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <header className="card-header">
                   <h3>
                <a href="https://github.com/Cipher73/fack-app ">FACK</a>
              </h3>
            </header>
            <div className="long-description">
              <p>
                Used tools: Java.
              </p>
              <p>
              The authors are Angela Nkosi , Callum Muller.
              </p>
            </div>
            <footer className="footer">
              <a href="https://github.com/Cipher73/fack-app " className="githublink">
                GitHub
                <svg fill="none" viewBox="0 0 16 8">
                  <path
                    d="M15.354 4.354a.5.5 0 000-.708L12.172.464a.5.5 0 10-.708.708L14.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h15v-1H0v1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </footer>
          </div>
          <div className="border-style">
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </div>

        <div className="card">
          <div className="card-media">
            <div className="PortfolioCard">
            <div className="card-img">
              <img className="img" src={card3} />
               </div>
              <p className="card__name">Diverge</p>
              <div className="grid-container">
         
                <div className="short-description">App for food delivery with a user-friendly interface.</div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <header className="card-header">
              
              <h3>
                <a href="https://github.com/Cipher73/Diverg-App ">Diverge</a>
              </h3>
              
            </header>
            <div className="long-description">
            <p>
                Used tools: Java , Android Studio , Firebase.
              </p>
              <p>
               Author: Angela Nkosi.
              </p>
            </div>
            <footer className="footer">
              <a href="https://github.com/Cipher73/Diverg-App " className="githublink">
                GitHub
                <svg fill="none" viewBox="0 0 16 8">
                  <path
                    d="M15.354 4.354a.5.5 0 000-.708L12.172.464a.5.5 0 10-.708.708L14.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h15v-1H0v1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </footer>
          </div>
          <div className="border-style">
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </div>
        <div className="card">
          <div className="card-media">
            <div className="PortfolioCard">
            <div className="card-img">
              <img className="img" src={card4} />
               </div>
              <p className="card__name">Emergency Hotline</p>
              <div className="grid-container">
              
                <div className="short-description">In an emergency, users of the Emergency Hotline app can send their location. Several medical aids are provided.</div>
            
              </div>
            </div>
          </div>
          <div className="card-content">
            <header className="card-header">
              
              <h3>
                <a href="https://github.com/Cipher73/EmergencyHotline ">Emergency Hotline</a>
              </h3>
            </header>
            <div className="long-description">
              <p>
                Used tools: Java , Android Studio , Firebase.
              </p>
              <p>
                Authors: Angela Nkosi.
              </p>
            </div>
            <footer className="footer">
              <a href="https://github.com/Cipher73/EmergencyHotline " className="githublink">
                GitHub
                <svg fill="none" viewBox="0 0 16 8">
                  <path
                    d="M15.354 4.354a.5.5 0 000-.708L12.172.464a.5.5 0 10-.708.708L14.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h15v-1H0v1z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </footer>
          </div>
          <div className="border-style">
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;

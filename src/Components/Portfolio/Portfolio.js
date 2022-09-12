import React from "react";
import "./Portfolio.css";
import gif1 from '../../Videos/gif1.mp4'
import gif3 from '../../Videos/gif3.mp4'
import gif4 from '../../Videos/gif4.mp4'

const Portfolio = () => {
  return (
    <div className="portfolio">
       <h1 className="port-heading">My<span >Projects</span> </h1>
      <div className="container">
      <div className="card">
          <div className="card-media">
            <div className="PortfolioCard">
            <div className="vid-div">
              <video className="vid" autoPlay muted loop >
               <source src={gif1} type="video/mp4"/></video></div>
              <p className="card__name">DFMPC-Student-Placement-System</p>
              <div className="grid-container">
                

                <div className="short-description"> A student app which integrates with the student Placement System. The app will need to accomodate any student needs and any relevant information on the system needs to be presented to students via app.</div>
              
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
                Tools used : React Native, Javascript , firebase.
              </p>
              <p>
                Authors: Riot Ndlovu, Angela Nkosi, Callum Muller, Shagan Plaatjies, Nokuthaba Moyo,.
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
              <div className="vid-div">
              <video className="vid" autoPlay muted loop >
               <source src={gif4} type="video/mp4"/></video></div>
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
                languages used : Java.
              </p>
              <p>
                Authors: Angela Nkosi , Callum Muller.
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
            <div className="vid-div">
              <video className="vid" autoPlay muted loop >
               <source src={gif1} type="video/mp4"/></video></div>
              <p className="card__name">Diverge</p>
              <div className="grid-container">
         
                <div className="short-description"> Food delevery app , user friendly interface</div>
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
                Tools used : Java , Android Studio , firebase.
              </p>
              <p>
                Authors: Angela Nkosi.
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
            <div className="vid-div">
              <video className="vid" autoPlay muted loop >
               <source src={gif3} type="video/mp4"/></video></div>
              <p className="card__name">Emergency Hotline</p>
              <div className="grid-container">
              
                <div className="short-description">Emergency Hotline app , it allows users to send their location during an emergency. It provides a range of medical assists</div>
            
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
                Tools used : Java , Android Studio , firebase.
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

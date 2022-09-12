import React from 'react'
import './languages.css'

const languages = () => {
  return (
    
    <section className="languages">
    <h1 className="language-heading">My <span >Skills</span></h1>
        
        <div className="language-container">
          <div className="language-row">
              <div className="language__list">
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/c2.png"
                     alt="c Logo" className="language__img" />
                </figure>
                <span className="language__name">C</span>
              </div>
    
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/python.png"
                     alt="python Logo" className="language__img" />
                </figure>
                <span className="language__name">Python</span>
              </div>
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/react.png"
                     alt="React Logo" className="language__img" />
                </figure>
                <span className="language__name">React</span>
              </div>
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/javascript.jpg"
                     alt="javascript Logo" className="language__img" />
                </figure>
                <span className="language__name">Javascript</span>
              </div>
    
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/golang.png"
                     alt="golang Logo" className="language__img" />
                </figure>
                <span className="language__name">Golang</span>
              </div>
    
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/java.png"
                     alt="Java Logo" className="language__img" />
                </figure>
                <span className="language__name">Java</span>
              </div>
    
              <div className="language">
                <figure className="language__img--wrapper">
                  <img
                     src ="/images/c++.png"
                     alt="c++ Logo" className="language__img" />
                </figure>
                <span className="language__name">C++</span>
              </div>
           
            </div>
          </div>
          </div>
      </section>
    
  )
}

export default languages
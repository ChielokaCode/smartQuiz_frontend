import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className='container-about-us'>
      <Link to="/" className="custom-link-style">
    <button  className="create-back-button-about-us">
        <img
          className="arrow-left-about-us"
          src="../src/assets/icons/arrow-left.svg"
        />
        Back
      </button>
      </Link>
    
    <h3 className="explore-about-us">Meet Our Team of Developers</h3>
      <div className="grid-container-about-us">


        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/Chieloka.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Chieloka E. Madubugwqu</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/chimene.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Chimene Ozuru</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>
        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/emmanuel.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Emmanuel S. Bobade</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/bolu.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Boluwatife Adesanya</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/taiwo.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Taiwo Majolagbe</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/tosin.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Tosin Ajibade</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/tope.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Temitope Okuselu</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/james.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">James Adedini.</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/desmond.png"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Desmond Isama</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/engineer.svg"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Ikenna Amadi</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src="../src/assets/icons/engineer.svg"/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Williams Preye</h5>
            <img src="../src/assets/icons/java.svg"/> <p>Software Engineer</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AboutUs
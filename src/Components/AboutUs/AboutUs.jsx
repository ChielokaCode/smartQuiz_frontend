import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom';
import arrowLeft from "/src/assets/icons/arrow-left.svg";
import chielokaImg from "/src/assets/icons/Chieloka.png";
import javaImg from "/src/assets/icons/java.svg";
import chimeneImg from "/src/assets/icons/chimene.png";
import engineerImg from "/src/assets/icons/engineer.svg";
import desmondImg from "/src/assets/icons/desmond.png";
import jamesImg from "/src/assets/icons/james.png";
import topeImg from "/src/assets/icons/tope.png";
import tosinImg from "/src/assets/icons/tosin.png";
import taiwoImg from "/src/assets/icons/taiwo.png";
import boluImg from "/src/assets/icons/bolu.png";
import emmanuelImg from "/src/assets/icons/emmanuel.png";

const AboutUs = () => {
  return (
    <div className='container-about-us'>
      <Link to="/" className="custom-link-style">
    <button  className="create-back-button-about-us">
        <img
          className="arrow-left-about-us"
          src={arrowLeft}
        />
        Back
      </button>
      </Link>
    
    <h3 className="explore-about-us">Meet Our Team of Developers</h3>
      <div className="grid-container-about-us">


        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={chielokaImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/qmedia/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Chieloka E. Madubugwu</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={chimeneImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Chimene Ozuru</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>
        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={emmanuelImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Emmanuel S. Bobade</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={boluImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Boluwatife Adesanya</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={taiwoImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Taiwo Majolagbe</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={tosinImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Tosin Ajibade</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={topeImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Temitope Okuselu</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={jamesImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">James Adedini.</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={desmondImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Desmond Isama</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={engineerImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Ikenna Amadi</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>

        <div className="grid-item-about-us">
          <div className="engineer-and-decagon-image">
            <img className="engineer-image" src={engineerImg}/>
          </div>
          <img className='decagon-avatar-about-us'
               src='https://decagon.institute/static/media/decagon.18e1e74149bf346e03ceb8c52e3b3177.svg'/>
          <div className="about-us-h5">
            <h5 className="engineer-name-about-us">Williams Preye</h5>
            <img src={javaImg}/> <p>Software Engineer</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default AboutUs
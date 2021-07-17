import './index.css';
import animationData from '../../assets/lotties/logotravel.json';
import Lottie from 'react-lottie';
import React from 'react';

function Intro() {

  function handleOnClick (event: React.MouseEvent<HTMLElement>){
    event.preventDefault();
    const form: HTMLElement | null =document.getElementById('boxForm');
    if(form) form.scrollIntoView({behavior: "smooth"});
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="box">
        <Lottie 
        options={defaultOptions}
          height={300}
          width={300}
          style={{margin:'0px auto'}}
        />
        <p>50% OFF</p>
      <div className="boxButton">
       <button onClick={handleOnClick}> SUBSCRIPTION </button>
      </div>
    </div>
  )
}

export default Intro

import './index.css';
import beachBag from '../../assets/img/beachBag.jpg';
import travelBagWalk from '../../assets/img/travelBagWildWalk.jpg';
import travelBagWild from '../../assets/img/travelBagWild.jpg';
import baggageVintage from '../../assets/img/baggage-vintage.jpg';
import bagNature from '../../assets/img/bagNature.jpg';

function Gallery() {
  function handleOnClick (event: React.MouseEvent<HTMLElement>){
    event.preventDefault();
    const form: HTMLElement | null =document.getElementById('boxForm');
    if(form) form.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="container" id="2box">
      <div className="boxGallery">
        <div className="title">
          <h2>Colors that bring life</h2>
          <p>Be Yourself</p>
        </div>
        <div className="imagesArea">
          
         <div className="one-first"> <img src={beachBag} width={270} height={450} alt="mochila de viagem na praia" /></div>
         <div className="two-images">
           <div>
              <img src={travelBagWild} width={266} height={219} alt="mochila de viagem na praia" />
              <img src={baggageVintage} width={266} height={197} alt="mochila de viagem na praia" />
           </div>
        </div>
         <div className="one-last"> <img src={travelBagWalk} width={270} height={450} alt="mochila de viagem na praia" /></div>
        </div>
      </div>
      <div className="boxPdp">
        <div> 
          <img src={bagNature} alt="mochila preta pendurada na árvore - wild" />
            <div>
              <p>Vacation</p>
              <h3>The bag to vacation</h3>
              <h4>50% OFF</h4>
              <button onClick={handleOnClick}>SUBSCRIPTION</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;

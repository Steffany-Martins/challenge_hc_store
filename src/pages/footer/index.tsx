import './index.css';
import groupBag from '../../assets/img/a816dbd7.jpg';
import bagsVintage from '../../assets/img/bagsVintage.jpg';
import bagTrip from '../../assets/img/travelTrip.jpg';
import bagFlorest from '../../assets/img/travelFlorest.jpg';
import Form from '../../components/Form';

function Footer() {
  return (
    <>
      <div className="containerBag">
          <div className="gallery-bags">
              <img src={groupBag} alt="Grupo com mochilas de acampamento" />
              <img src={bagsVintage} alt="Malas vintage" />
              <img src={bagTrip} alt="Mala de viagem" />
              <img src={bagFlorest} alt="Mochila canudo de floresta" />
          </div>
        </ div>
        <div className="footer">
              <div>
                <h1>Travel Bags</h1>
                <p>Entre em contato conosco</p>
              </div>
              <div id="boxForm">
                <Form/>
              </div>
        </div>
    </>
  )
}

export default Footer;

import Footer from './pages/footer';
import Gallery from './pages/gallery';
import Intro from './pages/intro';
import './styles/index.css';

function Routes() {
  return(
    <div id="wrap">
      <Intro />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Routes

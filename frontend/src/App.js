import './App.css';
import Header from './component/Header';
import Service from './component/Service';
import Pricing from './component/Pricing';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Testimonial from './component/Testimonial'

function App() {
    return (
        <div>
            <div>
                <Header/>
                <Service/>
                <Pricing/>
                <Testimonial />
                <Contact/>
                <Footer/>
                <a className="back-to-top" href="#0"><i className="lni-chevron-up" /></a>
            </div>
        </div>
    );
}

export default App;

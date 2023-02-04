import './App.css';
import Header from './component/Header';
import Service from './component/Service';
import Pricing from './component/Pricing';
// import CallToAction from './component/CallToAction';
// import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Tes from './component/Tes'

function App() {
    return (
        <div>
            <div>
                {/*====== HEADER PART START ======*/}
                <Header/>
                {/*====== HEADER PART ENDS ======*/}
                {/*====== SERVICES PART START ======*/}
                <Service/>
                {/*====== SERVICES PART ENDS ======*/}
                {/*====== PRICING PART START ======*/}
                <Pricing/>
                {/*====== PRICING PART ENDS ======*/}
                {/*====== CALL TO ACTION PART START ======*/}
                {/* <CallToAction/> */}
                {/* <Testimonial/> */}
                <Tes />
                {/*====== CALL TO ACTION PART ENDS ======*/}
                {/*====== CONTACT PART START ======*/}
                <Contact/>
                {/*====== CONTACT PART ENDS ======*/}
                {/*====== FOOTER PART START ======*/}
                <Footer/>
                {/*====== FOOTER PART ENDS ======*/}
                {/*====== BACK TO TOP PART START ======*/}
                <a className="back-to-top" href="#0"><i className="lni-chevron-up" /></a>
                {/*====== BACK TO TOP PART ENDS ======*/}
            </div>
        </div>
    );
}

export default App;

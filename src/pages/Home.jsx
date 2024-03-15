import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="slider-container ">
        <MySlider />
      </div>
      <div className="container-fluid section2 p-5 mb-5 mt-4">
        <div className="col g-5 align-items-center slider-img">
          <div
            className="wow fadeIn abouts"
            data-wow-delay="0.1s"
            data-aos="fade-right"
          >
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25531.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph"
            />
          </div>
          <div
            data-aos="fade-left"
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="home-head rounded-pill  px-3 mb-3">
              Business Area
            </div>
            <h1 className="heading-about">Empowering Health Together</h1>
            <p className="home-para">
              "we're on a mission to empower individuals and communities to lead
              healthier lives. Our dedication to innovation and quality drives
              us to develop breakthrough treatments and therapies. By
              collaborating with healthcare professionals, we're making strides
              in improving patient outcomes. Our commitment to excellence
              extends to every aspect of our operations, ensuring safety,
              efficacy, and affordability in all our products. Together, let's
              achieve a healthier tomorrow."
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid  p-5 mb-5 mt-4">
        <div className="slider-img g-5 align-items-center">
          <div
            data-aos="fade-right"
            className="col-lg-6 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="home-head rounded-pill px-3 mb-3">
              Manufacturing
            </div>
            <h1 className="heading-about">
              Tailored Solutions for Global Pharmaceutical Manufacturing
              Challenges
            </h1>
            <p className="home-para">
              "Description: Our pharmaceutical manufacturing services are
              designed to meet the unique needs of our clients in the
              fast-evolving global healthcare landscape. With a focus on
              adaptability and scalability, we are equipped to handle a diverse
              range of projects, from generics to innovative therapies.
              Leveraging advanced technologies and industry expertise, we strive
              to deliver exceptional quality and value at every stage of the
              manufacturing process. Connect with us to discover how our
              tailored solutions can support your pharmaceutical manufacturing
              needs."
            </p>
          </div>
          <div
            className="wow fadeIn abouts"
            data-wow-delay="0.1s"
            data-aos="fade-right"
          >
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-photo/clinical-worker-dressed-white-gown-gloves-holding-glass-beakers-with-blue-liquid_273609-13421.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid section2 p-5 mb-5 mt-4">
        <div>
          <div className=" g-5 align-items-center slider-img">
            <div
              className="  wow fadeIn"
              data-wow-delay="0.1s"
              data-aos="fade-right"
            >
              <div
                className="wow fadeIn abouts"
                data-wow-delay="0.1s"
                data-aos="fade-right"
              >
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-photo/scientist-putting-blood-sample-from-test-tube-with-micropipette-petri-dish-analysing-chemical-reaction_482257-487.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph"
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Research & Development
              </div>
              <h1 className="heading-about">
                Unveiling Our Dynamic Research and Development Program at
                GENOMED Pharma
              </h1>
              <p className="home-para">
                "we are committed to making strides in pharmaceutical innovation
                through cutting-edge research and development (R&D) initiatives.
                Our team of dedicated scientists and researchers constantly
                pushes the boundaries of science to discover new therapies and
                improve existing treatments. We employ advanced technologies and
                collaborate with leading experts to address complex medical
                challenges, striving to deliver breakthrough solutions that
                transform the lives of patients worldwide. Join us as we
                continue to drive the future of healthcare through our
                innovative R&D efforts."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">About Us</div>
              <h1 className="heading-about">
                {" "}
                Shining Light on Health and Innovation
              </h1>
              <p className="home-para">
                {" "}
                " we combine cutting-edge research with unwavering dedication to
                create groundbreaking solutions that improve patient outcomes.
                Our commitment to integrity, transparency, and quality drives us
                to surpass industry standards, ensuring that every product we
                deliver is safe, effective, and reliable. At Illumina
                Pharmaceuticals, we believe in the power of collaboration and
                innovation to redefine the possibilities of medicine. Join us as
                we shine light on the future of healthcare, illuminating a world
                where health and well-being are within reach for all."
              </p>
            </div>
            <div
              className="wow fadeIn abouts"
              data-wow-delay="0.1s"
              data-aos="fade-right"
            >
              <img
                className="img-fluid"
                height={"344px"}
                width={"612px"}
                src="https://img.freepik.com/premium-photo/chemistry-lab-with-beakers-beakers-filled-with-liquid_771335-47934.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import { Link } from "react-router-dom";
import "./BusinessAreas.css";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";
import BreadCrumb from "../../components/BreadCrumb";

function BusinessAreas() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ("");
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });
  }, []);
  return (
    <>
      <BreadCrumb page="BusinessAreas" />

      <div className="BusinessArea">
        <div className="businesspage">
          <div className="row">
            <div className="col-md-3">
              <div className="container mt-5">
                <div className="card p-4 bg-light">
                  <div className="d-flex flex-column align-items-start">
                    <Link to="/businessareas" data-aos="fade-right">
                      <button className="btn btn-warning mb-1">Overview</button>
                    </Link>
                    <Link to="/indiabranded" data-aos="fade-right">
                      <button className="btn btn-warning mb-1">
                        India-Branding Generics
                      </button>
                    </Link>
                    <Link to="/emergingmarkets" data-aos="fade-right">
                      {" "}
                      <button className="btn btn-warning mb-1">
                        Emerging Markets - Branded Generics
                      </button>
                    </Link>
                    <Link to="/usgenerics" data-aos="fade-right">
                      {" "}
                      <button className="btn btn-warning mb-1">
                        USA - Generics
                      </button>
                    </Link>
                    <Link to="/africainstitution" data-aos="fade-right">
                      {" "}
                      <button className="btn btn-warning mb-1">
                        Africa - Institution Business
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="container">
                <div className="heading-business m-4" data-aos="fade-left">
                  At Genomed, we are dedicated to advancing healthcare by
                  leveraging our deep expertise in pharmaceuticals. With a
                  mission to improve lives, we focus on developing high-quality
                  and innovative healthcare solutions. Our team of experts works
                  tirelessly to ensure the safety, efficacy, and accessibility
                  of our products. Driven by compassion and backed by science,
                  we are committed to being a trusted partner in health for
                  communities worldwide
                </div>
              </div>
              <div className="paratwo p-5 mb-4">
                <div className="overview-part2 p-1" data-aos="fade-left">
                  We carefully identify gaps in our markets and commit ourselves
                  to get the products to market places ahead of the competition
                  giving huge competitive advantage of 1st to market. Our
                  products have the hallmark of technology-based differentiation
                  and cover the full range of dosage forms, including tablets,
                  capsules, injectables, inhalers, ointments, creams and
                  liquids.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default BusinessAreas;

import React from "react";
import "./Home.css";
import BreadCrumb from "../components/BreadCrumb";
const Manufacturing = () => {
  return (
    <>
      <div className=" ">
        <BreadCrumb page="Manufacturing" />

        <div className="container-fluid section2 p-5 mt-4">
          <div className=" g-5 align-items-center slider-img abouts">
            <img
              width="1200px"
              style={{
                borderRadius: "15px 50px",
                boxShadow:
                  "-5px -5px 9px rgba(184, 184, 184, 0.45) 5px 5px 9px rgba(78, 88, 104, 0.3)",
              }}
              className="img-fluid"
              src="https://img.freepik.com/free-photo/aluminum-tanks-storage-raw-materials-chemical-industry-sterile-conditions-enterprise_645730-711.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph"
            />
            <div>
              <h1 className="Manu-about">
                At GENOMED Pharma we are passionate about every product we
                deliver to our customers
              </h1>
              <p className="Manu-para">
                "Our commitment to manufacturing excellence ensures that
                patients and healthcare professionals can trust in the safety
                and efficacy of every product bearing the GENOMED Pharma name.
                We are proud to be at the forefront of the pharmaceutical
                manufacturing industry, delivering high-quality medicines that
                make a difference in people's lives."
              </p>
            </div>
          </div>
        </div>

        <div className=" p-5">
          <div
            style={{
              background: "#AFEEEE",
              paddingLeft: "20px",
              paddingTop: "30px",
              paddingBottom: "30px",
              borderLeft: "4px solid green",
            }}
          >
            <div
              className="  wow fadeIn p-2"
              data-wow-delay="0.5s"
              style={{ fontSize: "19px", fontWeight: "500" }}
            >
              Our team thrives in an environment conducive to excellence and
              innovation, which is critical to advancing complex and challenging
              first-time combination products. The R&D team actively engages in
              projects from concept to Phase IV studies, as well as monitoring
              market acceptance and post-launch status for comprehensive
              insights.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manufacturing;

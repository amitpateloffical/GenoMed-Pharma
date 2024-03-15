import { Link } from "react-router-dom";

function BreadCrumb(_props) {
  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="container-fluid pt-5  hero-header">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                {_props.page}
              </h1>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img
                className="img-fluid "
                src="/genoged.jpg"
                alt=""
                style={{ "max-height": "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
    </>
  );
}

export default BreadCrumb;

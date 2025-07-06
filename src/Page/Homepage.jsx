import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
// import './App.css'


function Homepage() {
  return (
    <>
      {/* promo */}
      <div className="promo-main" style={{ overflow: 'hidden', height: "100px" }}>

        <div className="d-flex flex-nowrap justify-content-around overflow-auto px-3 gap-3" style={{ scrollSnapType: "x mandatory" }}>

          {/* CARD TEMPLATE */}
          <div className="bg-black text-light flex-shrink-0 d-flex justify-content-between align-items-center px-4 py-3"
            style={{ borderRadius: "10px", minWidth: "280px", scrollSnapAlign: "start" }}>
            <div>
              <h6 className="fw-bold mb-1">FIREWORKS DEALS</h6>
              <p className="mb-0 fw-bold">$8 & UP ✯</p>
            </div>
            <div className="bg-light px-3 py-1 d-flex align-items-center ms-3" style={{ borderRadius: "999px" }}>
              <Link to="/women" className="text-dark fw-semibold text-decoration-none px-2">Women</Link>
              <Link to="/men" className="text-dark fw-semibold text-decoration-none px-2">Men</Link>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-black text-light flex-shrink-0 d-flex justify-content-between align-items-center px-4 py-3"
            style={{ borderRadius: "10px", minWidth: "280px", scrollSnapAlign: "start" }}>
            <div>
              <h6 className="fw-bold mb-1">BUY 1, GET 2</h6>
              <p className="mb-0 fw-bold">FREE TEES ✯</p>
            </div>
            <div className="bg-light px-3 py-1 d-flex align-items-center ms-3" style={{ borderRadius: "999px" }}>
              <Link to="/women" className="text-dark fw-semibold text-decoration-none px-2">Women</Link>
              <Link to="/men" className="text-dark fw-semibold text-decoration-none px-2">Men</Link>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-black text-light flex-shrink-0 d-flex justify-content-between align-items-center px-4 py-3"
            style={{ borderRadius: "10px", minWidth: "280px", scrollSnapAlign: "start" }}>
            <div>
              <h6 className="fw-bold mb-1">UP TO 50% OFF</h6>
              <p className="mb-0 fw-bold">NEW ARRIVALS ✯</p>
            </div>
            <div className="bg-light px-3 py-1 d-flex align-items-center ms-3" style={{ borderRadius: "999px" }}>
              <Link to="/women" className="text-dark fw-semibold text-decoration-none px-2">Women</Link>
              <Link to="/men" className="text-dark fw-semibold text-decoration-none px-2">Men</Link>
            </div>
          </div>

        </div>

      </div>


      <br /><br />

      {/* Yellow Img */}

      <div className="container-fluid p-0">
        <div className=" yellow-bg-img " >
          <div className='d-flex flex-column justify-content-center align-items-center h-100' >
            <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw956e2e28/images/2024/Home/071024/A_SPOT_BTS%20DEALS_DT.png" className='yellow-main-img' alt="" /> <br />
            <p>
              Stock up for less than your favorite latte.
            </p>

          </div>
        </div>
      </div>

      <br />


      {/* first-img */}

      <Link to={"/jeans"} style={{ textDecoration: "none" }}  >
        <div className="container-fluid Jeans-bg p-0 d-flex justify-content-evenly  align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">


          <div className="col-12 col-sm-12 col-md-6 col-lg-3 p-0 im-1 mt-5">

          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 im-2 bottom-0 position-relative img-fluid d-none d-sm-none d-md-none d-lg-block">
            <div className="frist-image-content text-light text-center" style={{ marginTop: "90%" }}> <br /><br />
              <h1>
                + FREE SHIPPING! </h1>
              <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
            </div>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 d-none d-sm-none d-md-none d-lg-block im-3 ">

          </div>
        </div>
      </Link>

      <br />
      <br />
      <br />
      {/* kitty-img */}


      <Link to={"/women"} style={{ textDecoration: "none" }}>
        <div className="container-fluid kitty-bg p-0 d-flex " style={{ justifyContent: "center", alignContent: "center" }}>
          <div className="col-12 col-sm-8 col-md-8 col-lg-6  im-4  text-center" >
            <div className="im-4-con" style={{ marginTop: "30%" }}>
              <h4 className='text-light d-none d-sm-none d-md-block d-lg-block'>
                ONE-OF-A-KIND CUTENESS, GET YOURS NOW!</h4>
              <div className="btn text-black ps-5 pe-5" style={{ backgroundColor: "white", borderRadius: "20px" }}>
                Shop Now
              </div>
            </div>
          </div>
        </div>
      </Link>

      <br />
      <br />
      {/* Aero-img */}


      <Link to={"/women"} style={{ textDecoration: "none" }}>
        <div className="container-fluid aero-bg p-0 d-flex " style={{ justifyContent: "center", alignContent: "center" }}>
          <div className="col-1 col-sm-4 col-md-4 col-lg-6"></div>
          <div className="col-10 col-sm-8 col-md-8 col-lg-4 im-5 img-fluid text-center" >
            <h2></h2>
          </div>
        </div>
      </Link>
      <br /><br />


      {/* blue Image */}
      <Link to={"/women"} style={{ textDecoration: "none" }}>
        <div className="container-fluid blue-img ">
          <div className="row g-3 g-sm-0 text-center d-flex align-items-center pt-4 align-content-center flex-column flex-sm-row flex-md-row flex-lg-row">
            <div className="col-3"></div>
            <div className="col-12 col-sm-3 col-md-3">
              <h1 style={{ color: "#f7d309", fontWeight: "700" }}>
                A SHORT STORY</h1>
            </div>
            <div className="col-12 col-sm-3 col-md-3 ">
              <img src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw25fa6242/images/2024/Home/072424/Shorts%20Badge-min.png" width={200} alt="" />
            </div>
            <div className="col-12 col-md-3">
              <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
            </div>
          </div>
        </div>
      </Link>

      <br />

      {/* Uniform Image */}

      <Link to={"/women"}>
        <div className="container-fluid uniform-img ">

        </div>
      </Link>

      <br />
      {/* smile Image 2*/}
      <Link to={"/women"}>
        <div className="container-fluid smile-img ">
          <div className="row g-3 g-sm-0 text-center d-flex align-items-center align-content-center flex-column flex-sm-row flex-md-row flex-lg-row">
            <div className="col-3"></div>
            <div className="col-12 col-sm-5 col-lg-5 im-6 ">

            </div>

            <div className="col-12  col-md-3">
              <button className='btn-women-men ' ><Link to={"/women"} className=' women-btn '>Women</Link> &nbsp;&nbsp;&nbsp;&nbsp; <Link to={"/men"} className='men-btn'>Men</Link> </button>
            </div>
          </div>
        </div>
      </Link>









    </>
  );
}


export default Homepage;

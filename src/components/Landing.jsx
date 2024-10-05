import React from "react";
import myImage from "../assets/Attendence2.jpg";
import Contact from "./Contact";

const Landing = () => {
    return(
        <>
           <div className="container-fluid bg-black py-5">
                <div className="row g-5 d-flex align-items-center justify-content-center p-5">
                    <div className="col-lg-6 col-12">
                        <img src={myImage} width={"200px"} height={"200px"}></img>
                    </div>
                    <div className="col-lg-6 col-12">
                        <p className="text-white-50">
                            Welcome to Heliospace, where we transform complex biological experiment data from space into easy-to-understand visual formats. Dive into our interactive graphs, flow charts, and 3D models to explore the wonders of space biology.
                        </p>
                    </div>
                </div>
            </div> 

            <div class="custom-shape-divider-bottom-1714921577 ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

            <div className="research-section">
                <div className="container text-center">
                    <h1 className="research-heading" 
                        style={{
                            fontSize: "60px",
                            background: "linear-gradient(to right, blue, white)", 
                            WebkitBackgroundClip: "text", 
                            WebkitTextFillColor: "transparent", 
                            height:"80px"
                        }}> Research
                    </h1>
                    <hr className="w-25 mx-auto"></hr>
                </div>

                <div className="p-5 bg-light rounded shadow explore-section p-5">
                    <h2 className="text-center mb-4 explore-heading" style={{color:"#ffbd59"}}>Exploring Space Data</h2>
                    <p className="lead explore-para text-light">
                        At <strong>Helioxplore</strong>, we delve into the intricate world of biological experiments conducted in space, providing valuable insights and analysis for researchers, students, and the public. Our platform offers detailed graphs, concise summaries, and comprehensive data to facilitate a better understanding of complex datasets.
                    </p>
                </div>

                <div className="data-analysis-section">
                    <div className="container text-center p-5">
                        <h1 className="research-heading" 
                            style={{
                                fontFamily:"sans-serif",
                                fontWeight:"bold"
                            }}> Data Analysis
                        </h1>
                    </div>
                </div> 
                
                <div className="container">
                    <div className="row g-5">
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                            <figure>
                                <img src="assets/phone.gif" alt="phone" className="img-fluid" style={{width: "320px"}}></img>
                            </figure>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                            <h1 className="fw-bolder text-capitalize" style={{color:"blue"}}>Perfect Execution</h1>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt similique excepturi iure ullam veritatis distinctio fugit veniam nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint nisi assumenda commodi laborum deserunt quibusdam.</p>
                        </div>
                    
                    </div>

                    <div className="row g-5">
                        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                            <h1 className="fw-bolder text-capitalize" style={{color:"blue"}}>Visualization</h1>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt similique excepturi iure ullam veritatis distinctio fugit veniam nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint nisi assumenda commodi laborum deserunt quibusdam.</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                            <figure>
                                <img src="assets/phone.gif" alt="phone" className="img-fluid" style={{width: "320px"}}></img>
                            </figure>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                            <figure>
                                <img src="assets/phone.gif" alt="phone" className="img-fluid" style={{width: "320px"}}></img>
                            </figure>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                            <h1 className="fw-bolder text-capitalize" style={{color:"blue"}}>Insights</h1>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt similique excepturi iure ullam veritatis distinctio fugit veniam nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint nisi assumenda commodi laborum deserunt quibusdam.</p>
                        </div>
                    
                    </div>
                </div>

            </div>

            <Contact />
        </>
    );
}

export default Landing;
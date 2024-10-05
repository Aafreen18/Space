import React from "react";

const Contact = () =>{
    return(
        <>
            <footer class="mr-0 footer-section">
                <div class="contact-details bg-dark pb-3">
                    <div class="contanier">
                        <hr class="container mx-auto text-white"></hr>
                        <div class="row" style={{border: "1px solid black"}}>
                        <div class="col-lg-8 col-12 ">
                            <p class="text-white text-center">Copyright ©2023 All rights reserved.</p>
                        </div>
            
                        <div class="col-lg-4">
                            <div class="d-flex justify-content-center align-items-center gap-5">
                            <a href="https://www.instagram.com/Sifat_parveen2">
                                <div class="">
                                <i class="fa-brands fa-instagram"></i>
                                </div>
                            </a>
                            
                            <a href="https://www.github.com/Aafreen18">
                                <div class="">
                                <i class="fa-brands fa-github"></i>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contact;
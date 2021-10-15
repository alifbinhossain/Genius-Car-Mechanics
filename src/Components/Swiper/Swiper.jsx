import React from "react";
import "./Swiper.css";
import banner1 from "../../images/banner/bannerHQ-1.jpg";
import banner2 from "../../images/banner/bannerHQ-2.jpg";
import banner3 from "../../images/banner/bannerHQ-3.jpg";
import banner4 from "../../images/banner/bannerHQ-4.jpg";

const Swiper = () => {
  return (
    <section className=" carousel">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src={banner1} alt="" />
            <div className="banner-content">
              <h1>Engine and Transmission Repair</h1>
              <p>
                Bring your vehicle in to a Minit-Tune & Brake Auto Centres, and
                have our expert technicians inspect, diagnose and/or repair your
                vehicle’s engine and recommend the appropriate preventative
                maintenance.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src={banner2} alt="" />
            <div className="banner-content">
              <h1>Steering, Suspension and Wheel Alignment Services</h1>
              <p>
                A vehicle that is out of alignment can cause pre-mature tire,
                suspension and steering component wear. In the extreme, vehicle
                drivability can also be adversely impacted by mis-alignment.
                Avoid costly repairs, and allow one of our technicians to
                inspect and re-align the vehicle.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src={banner3} alt="" />
            <div className="banner-content">
              <h1>Tires and Tire Repair Services</h1>
              <p>
                Bring in your tires to Minit-Tune & Brake Auto Centre to have
                one of our experienced technicians repair your tires. We offer
                exceptional Calgary Tire Repair service and participating
                Minit-Tune & Brake Auto Centres’ locations also offer a
                while-you-wait tire repair service.
              </p>
            </div>
          </div>
          <div class="swiper-slide">
            <img src={banner4} alt="" />
            <div className="banner-content">
              <h1>Vehicle Heating & AC System Repairs</h1>
              <p>
                Bring your vehicle in and our heating and air conditioning
                (HVAC) technicians will correctly diagnose your HVAC problems,
                and provide a cost effective solution. Minit-Tune & Brake Auto
                Centres offers repair, servicing and replacement for any vehicle
                air conditioning and heating problem.
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Swiper;

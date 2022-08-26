import React from "react";
import Menu from "../../components/header/Menu";
import Loader from "../../components/Loader/Loader";

const Contact = () => {
  return (
    <>
      {/* <Loader /> */}
      <Menu />
      <section
        className="breadcrumb-section set-bg"
        data-setbg="img/breadcrumb.jpg"
        style={{
          backgroundImage: `url("img/breadcrumb.jpg")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Liên hệ chúng tôi</h2>
                <div className="breadcrumb__option">
                  <a href="/">Home</a>
                  <span>Liên hệ chúng tôi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------- */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_phone" />
                <h4>Phone</h4>
                <p>+01-3-8888-6868</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_pin_alt" />
                <h4>Address</h4>
                <p>60-49 Road 11378 New York</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_clock_alt" />
                <h4>Open time</h4>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_mail_alt" />
                <h4>Email</h4>
                <p>hello@colorlib.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- */}
      <div className="map">
        {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126334.13059900698!2d106.00270485081117!3d20.93803140932793!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1661324510625!5m2!1svi!2s"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
        <div className="map-inside">
          <i className="icon_pin" />
          <div className="inside-widget">
            <h4>Hà Nội</h4>
            <ul>
              <li>Phone: +12-345-6789</li>
              <li>Add: 16 Creek Ave. Farmingdale, NY</li>
            </ul>
          </div>
        </div>
      </div>
      {/* -------- */}
      <div className="contact-form spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form__title">
                <h2>Gửi email</h2>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="col-lg-12 text-center">
                <textarea placeholder="Your message" defaultValue={""} />
                <button type="submit" className="site-btn">
                  Gửi email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

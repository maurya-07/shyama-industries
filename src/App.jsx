import React from 'react';
import homeImg from "./assets/home-cons.svg";
import aboutImg from "./assets/about.svg";
import './Js/index.js';
import './index.css';

const App = () => {

  // Demo changes
  const productList = [
    {
      title: "Helmet",
      desc: "Protects your head from falling objects and impact.",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzyqYQdYyWfAwNZbac1UlA8Z9gj9eHirFmY5eQ55tylxsC5EsvH8yZaTIVvn2kzPsnSUnAhTAdHLjIX_qlF9B7FC2J2NNhY4MiOcFnoh8fvlSwl7G1TEjc",
    },
    {
      title: "Vest",
      desc: "Increases visibility for workers on-site.",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTqEhYOOR0iP8_JhzGP_RTwyo6zYYHLR00Rb8C1rAJvwe9BecJE-dFronLXtHiajMMuUAAwzIZ_wnj7FY2Cncd_T7MCAjPJDGJOt4CkR5qoXWdmvWfjj_Eu",
    },
    {
      title: "Boots",
      desc: "Protects feet from sharp objects and heavy materials.",
      image: "https://hi-tec.com/cdn/shop/products/CADE7INWORKBOOT_CH80044M_T_1_352aad81-cd1d-4c89-819d-163204b29036.jpg?v=1676301995&width=2700",
    },
    {
      title: "Mask",
      desc: "Prevents inhalation of harmful dust and particles.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzao-_yzVM2fZpS90FN_kaq1xvYGQhRr7vw&s",
    },
    {
      title: "Gloves",
      desc: "Guards hands from cuts, chemicals, and abrasions.",
      image: "https://firmgrip.com/cdn/shop/files/65242_Main_Product.jpg?v=1725372908",
    },
    {
      title: "Rope",
      desc: "Guards hands from cuts, chemicals, and abrasions.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/TR/KU/QS/32410977/plastic-blue-rope-500x500.jpg",
    },
    {
      title: "Rope",
      desc: "Guards hands from cuts, chemicals, and abrasions.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/TR/KU/QS/32410977/plastic-blue-rope-500x500.jpg",
    },
    {
      title: "Rope",
      desc: "Guards hands from cuts, chemicals, and abrasions.",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/7/TR/KU/QS/32410977/plastic-blue-rope-500x500.jpg",
    },
  ];


  return (
    <div>

      {/* =============== HEADER =============== */}
      <header>
        {/* Logo */}
        <div className="logo">MyLogo</div>

        {/* Navigation Links */}
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* Contact Button */}
        <button className="contact___btn">
          Whatsapp
        </button>
      </header>

      {/* =============== HOME =============== */}
      <section className="home___section" id="home">

        <div className="sec">
          <div className="home___left">
            <h1>Protect Your Site with Confidence</h1>
            <p>
              Our safety and protection tools ensure your construction site meets the highest standards. From helmets to fencing and monitoring equipment, we've got you covered.
            </p>

            {/* Contact Button */}
            <button className="home___btn">
              Whatsapp
            </button>
          </div>

          <div className="home___right">
            <img src={homeImg} alt="Construction Protection Tools" className="home___image" />
          </div>
        </div>

      </section>

      {/* =============== ABOUT =============== */}
      <section className="about___section" id="about">

        <h1 className="section___heading">About Us</h1>

        <div className="sec">
          <div className="about___right">
            <img src={aboutImg} alt="Construction Protection Tools" className="home___image" />
          </div>

          <div className="about___left">
            <h1>Protect Your Site with Confidence</h1>
            <p>
              We are committed to providing world-class safety tools and equipment for construction sites.
              With years of experience and expert knowledge, we ensure that your site remains safe,
              efficient, and compliant with modern safety standards.
            </p>
          </div>
        </div>

      </section>

      {/* =============== PRODUCT =============== */}
      <section className="products___section" id="products">

        <h2 className="products___heading">Products</h2>

        <div className="products___list">

          {productList.map((item, index) => (
            <div className="product___card" key={index}>
              <img src={item.image} alt={item.title} className="product___img" />

              <div>
                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =============== CONTACT =============== */}
      <section className="contact___section" id="contact">

        <h1 className="section___heading">Contact Us</h1>

        <div className="sec">
          {/* INFO */}
          <div className="contact___left">
            <p><strong>📍 Location:</strong> GB Road, Noida, INDIA</p>
            <p><strong>📞 Phone:</strong> +91 999 888 777</p>
            <p><strong>✉️ Email:</strong> shyamaindustries@gmail.com</p>
          </div>

          {/* MAP */}
          <div className="contact___right">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.124915012361!2d85.31642107525286!3d27.708955976199906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e9b3eec5f%3A0x58ae4d47734fe5b0!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1717331443991!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* =============== FOOTER =============== */}
      <footer>

        <div className="footer__top">
          {/* LOGO */}
          <div className="footer__logo">MyLogo</div>

          <ul className="footer__nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Product</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Made by <strong>Vishal Maurya</strong></p>
        </div>

      </footer>

    </div>
  )
}

export default App;
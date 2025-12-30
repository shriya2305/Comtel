import "../styles/home.css";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>
            AUTHORISED CHANNEL PARTNER OF <br />
            OKO-NDT GROUP
          </h1>
          <p>Experts in NDT System Integration & Automation Solutions</p>
        </div>
      </section>

      {/* ABOUT + PARTNER */}
      <section className="about-section">
        <div className="about-text">
          <h2>About Comtel</h2>
          <p className="highlight">
            30+ Long Years of Excellence With Quality At Its Best!
          </p>
          <p>
            Comtel has been in business since 1987, offering tailor-made
            solutions to customers based on multi-equipment integration and
            industrial automation. We specialize in quality products and
            industrial equipment training with decades of experience.
            Non-Destructive Testing (NDT) – from stable of World’s highly
            reputed conglomerate OKO-NDT. OKO-NDT GROUP™ has been offering
            development and building of the portable devices and automated
            nondestructive testing systems. Today, they have produced a range of
            around 4000 kinds of transducers and over 40 devices
          </p>
        </div>

        <div className="partner-card">
          <h3>Our Partner</h3>
          <img
            src="https://comtel.in/wp-content/uploads/2021/02/1529477938.2924_114_o-768x768.jpg"
            alt="OKO Group"
          />
        </div>
      </section>

      {/* SERVICES / DEALS */}
      <section className="deals-section">
        <h2>Comtel Deals In</h2>

        <div className="deals-grid">
          <div className="deal-card">Portable Ultrasonic Thickness Gauges</div>
          <div className="deal-card">
            Ultrasonic Flaw Detectors (A-Scan, B-Scan)
          </div>
          <div className="deal-card">Eddy Current & Automated UT Systems</div>
          <div className="deal-card">
            SmartScan, SmartScan-PA, Railway NDT Solutions
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat">
          <h3>100+</h3>
          <p>Work Orders</p>
        </div>
        <div className="stat">
          <h3>95%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat">
          <h3>1,000+</h3>
          <p>Clients</p>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section">
        <h2>Our Clients</h2>

        <div className="clients-grid">
          <img
            src="https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Benz-Logo.png"
            alt="Client"
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/136/353/non_2x/bajaj-logo-bajaj-icon-free-free-vector.jpg"
            alt="Client"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2048px-Fiat_Automobiles_logo.svg.png"
            alt="Client"
          />
          <img
            src="https://listcarbrands.com/wp-content/uploads/2017/10/2017-logo-Tata-Motors.jpg"
            alt="Client"
          />
          <img
            src="https://etimg.etb2bimg.com/photo/85170691.cms"
            alt="Client"
          />
          <img
            src="https://media.licdn.com/dms/image/v2/C4E0BAQHAr-ZY9_ie9g/company-logo_200_200/company-logo_200_200/0/1631307942431?e=2147483647&v=beta&t=ns7Z6bNOHS49l_JMEVy3ZIJCfdrF-mcEmhPPVh384U4"
            alt="Client"
          />
          <img
            src="https://images.yourstory.com/cs/images/companies/15532284738111-1645706928762.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=1920&q=75"
            alt="Client"
          />
         
        </div>
      </section>
    </>
  );
}

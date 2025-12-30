import { useState } from "react";
import "../styles/services.css";

/* ---------- OKO NDT SECTIONS ---------- */
const okoSections = [
  {
    id: 1,
    heading: "ULTRASONIC FLAW DETECTORS & SYSTEMS",
    cards: [
      {
        id: 1,
        title: "UDS2-73 rail flaw detector",
        image: require("../assets/oko-machine-1.png"),
        description: "The flaw detector is intended for defects detection in both rails along the running surface and rail cross-section, except for the rail base blades using flaw detection trolley during complete testing.",
      },
      {
        id: 2,
        title: "Portable Ultrasonic Flaw Detector Sonocon B & BL",
        image: require("../assets/oko-machine-2.png"),
        description: "Sonocon B belongs to the latest generation of portable UT instruments. Using a high-end electronics and having a richest set of modes and software features it can solve any task that can be sold",
      },
      {
        id: 3,
        title: "The ОКО-22М-UT ultrasonic flaw detector",
        image: require("../assets/oko-machine-3.png"),
        description: "This is a standalone electronic unit. It is intended for application in high-performance automated multi-channel NDT Systems, transportable systems or for manual testing.",
      },
      {
        id: 4,
        title: "The UDS2-77 ultrasonic single rail flaw detector ",
        image: require("../assets/oko-machine-4.png"),
        description: "The flaw detector employs a unique scanning scheme that allows testing the entire rail section, except for foot flanges, by pulse echo, echo-shadow and echo-image techniques.",
      },
    ],
  },
  {
    id: 2,
    heading: "EDDY CURRENT FLAW DETECTOR",
    cards: [
      {
        id: 1,
        title: "EDDYCON C & CL portable eddy current flaw detector-tester",
        image: require("../assets/oko-machine-5.png"),
        description: "This is a flagship in our eddy current instrument family. Being furnished with display and functional buttons for immediate access to any menu of the instrument.",
      },
      {
        id: 2,
        title: "Universal multi-channel eddy current flaw detector EDDYCON D",
        image: require("../assets/oko-machine-6.png"),
        description: "The universal multi-channel eddy current flaw detector EDDYCON D is designed to solve a wide range of tasks within eddy current flaw detection.",
      },
    ],
  },
  {
    id: 3,
    heading: "AUTOMATED TESTING",
    cards: [
      {
        id: 1,
        title: "Automated rail wheel inspection systems",
        image: require("../assets/oko-machine-7.png"),
        description: "Mechanized NDT systems are used for solving testing tasks in a variety of situations where the use of portable flaw detectors is either problematic or impossible, for example, the complex testing of railcar wheel sets. Nondestructive testing systems are usually based on three automated NDT methods: ultrasonic, magnetic, and eddy current.​Automatic ultrasonic testing is mainly used in large-scale inspection tasks, such as longitudinal pipes or railway axles. The conventional ultrasonic testing system developed by OKOndt GROUP™ is capable not only of testing, but also collecting and recording test data for post-processing.",
      },
    ],
  },
  {
    id: 4,
    heading: "ULTRASONIC THICKNESS GUAGE",
    cards: [
      {
        id: 1,
        title: "Custom OKO Machine",
        image: require("../assets/oko-machine-8.png"),
        description: "OKO NDT group have been  a leading source of thickness gauges that can accurately measure almost any material. Thickness gauges include a wide range of features available for enhanced gauge performance Ultrasonic thickness gauges listen for echoes, and measure virtually any material such as plastics, metals, and internally corroded materials. Measurement of extruded plastic sand rolled metals is possible, as is measurement of individual coatings in multilayer materials.",
      },
    ],
  },
];

/* ---------- CUSTOMIZED NDT FLIP CARDS ---------- */
const customizedCards = [
  {
    id: 1,
    title: "450 kV X-RAY MANIPULATOR WITH FLAT PANEL DETECTOR",
    image: require("../assets/custom-1.png"),
    description: "Consummate Material Testing & Engineering provides an indigenous handling system designed for advanced digital radiography applications. The system enables precise up-down and to-and-fro movement of the X-ray source and flat panel detector, along with controlled linear and rotational motion of the job as per customer requirements.It is specifically developed for cylindrical explosive components with diameters ranging from 200 mm to 400 mm and lengths between 1500 mm and 2500 mm. The solution integrates a SCADA-based control system, allowing safe operation from a control room located 20 meters away.High-precision PLC and servo controls ensure motion accuracy up to 50 microns across a total travel length of 5 meters, delivering reliable and repeatable inspection performance.",
  },
  {
    id: 2,
    title: "15-TON TILTER",
    image: require("../assets/custom-2.png"),
    description: "Consummate Material Testing & Engineering This system is used for the job tilting total weigh of the job is 15 tons this is a stationary type tilter. Hydraulic tilting smooth application without vibration to the job. Type of Object:Cylindrical  Object Diameter:1600mm Max. 1000mm Mi  Object Length:6000mm Max.  Ambient Temperature:45deg",
  },
  {
    id: 3,
    title: "5-TON MILTER",
    image: require("../assets/custom-3.png"),
    description: "Inline inspection systems integrated with production.",
  },
  {
    id: 4,
    title: "CHLORINE CYLINDER X-RAY SYSTEM",
    image: require("../assets/custom-4.png"),
    description: "Expert consultancy and system integration services.",
  },
];

/* ---------- MAIN COMPONENT ---------- */
export default function Services() {
  const [activeTab, setActiveTab] = useState("oko");

  return (
    <section className="services-page">
      <h1 className="services-title">Our Services</h1>

      {/* TABS */}
      <div className="service-tabs">
        <button
          className={activeTab === "oko" ? "active" : ""}
          onClick={() => setActiveTab("oko")}
        >
          OKO-NDT
        </button>

        <button
          className={activeTab === "custom" ? "active" : ""}
          onClick={() => setActiveTab("custom")}
        >
          Customized NDT Solution
        </button>
      </div>

      {/* ---------- OKO-NDT ---------- */}
      {activeTab === "oko" && (
        <div className="oko-wrapper">
          {okoSections.map((section) => (
            <div key={section.id} className="oko-section">
              <h2 className="custom-heading">{section.heading}</h2>

              <div className="cards-grid">
                {section.cards.map((card) => (
                  <FlipCard
                    key={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    large
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---------- CUSTOMIZED NDT ---------- */}
      {activeTab === "custom" && (
        <div className="cards-grid">
          {customizedCards.map((card) => (
            <FlipCard
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------- FLIP CARD ---------- */
function FlipCard({ image, title, description, large }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""} ${
        large ? "large-text" : ""
      }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>

        <div className="flip-back">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

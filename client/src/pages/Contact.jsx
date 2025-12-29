import { useState } from "react";
import "../styles/contact.css";
import { sendContact } from "../services/api";

const locations = [
  {
    id: 1,
    name: "Mumbai Office",
    address: (
      <>
        206 Nimesh Estate, Gavapada,
        <br />
        Mulund (E), Mumbai – 400081
      </>
    ),
    mapUrl:
      "https://www.google.com/maps?q=Gavapada%20Mulund%20East%20Mumbai&output=embed",
  },
  {
    id: 2,
    name: "Pune Office",
    address: (
      <>
        Flat No. 4, Zhala Society,
        <br />
        Erandwane, Karve Chowk – 411038
      </>
    ),
    mapUrl:
      "https://www.google.com/maps?q=Erandwane%20Karve%20Chowk%20Pune&output=embed",
  },
  {
    id: 3,
    name: "Nashik Office",
    address: (
      <>
        W-16/C, MIDC, Ambad,
        <br />
        Behind Hotel H15, Nashik – 422010
      </>
    ),
    mapUrl: "https://www.google.com/maps?q=MIDC%20Ambad%20Nashik&output=embed",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [activeLocation, setActiveLocation] = useState(locations[0]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendContact(form);
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact</h1>
      </section>

      {/* Main Content */}
      <section className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h2>Contact Us</h2>

          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`address-card ${
                activeLocation.id === loc.id ? "active" : ""
              }`}
              onClick={() => setActiveLocation(loc)}
            >
              <strong>{loc.name}:</strong>
              <p>{loc.address}</p>
            </div>
          ))}

          <p className="timing">
            <strong>Office Timings:</strong> 10 AM – 6 PM
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-form">
          <h2>Contact Form</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* MAP */}
          <div className="map-wrapper">
            <iframe
              title={activeLocation.name}
              src={activeLocation.mapUrl}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";
import { fetchServices } from "../services/api";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ color: "#d32f2f" }}>Our Services</h1>

      {services.length === 0 && <p>No services available</p>}

      {services.map((service) => (
        <div key={service._id} style={{ marginTop: "20px" }}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>COMTEL</h2>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/services">Services</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "20px",
    background: "#ffffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #d32f2f",
  },
};

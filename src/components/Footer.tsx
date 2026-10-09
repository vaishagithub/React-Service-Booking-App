import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>ServiceHub</h3>

        <p>Book trusted services easily from the comfort of your home.</p>

        <p className="footer-copy">
          © {new Date().getFullYear()} ServiceHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

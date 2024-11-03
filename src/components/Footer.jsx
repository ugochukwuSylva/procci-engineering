import "./Footer.scss";

import { MdCall } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="Contact">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="footer-contact"
      >
        <div className="footer-heading">
          <h3>Contact us</h3>
          <IoMdContact />
        </div>
        <span className="contact-icon--container">
          <p>
            <a href="tel:+2348062573296">
              <MdCall /> +234 806 257 3296
            </a>
          </p>
          <p>
            <a href="tel:+2348035028177">
              <MdCall /> +234 803 502 8177
            </a>
          </p>
          <p>
            <a href="mailto: info@procciengineering.com">
              <MdMarkEmailRead /> info@procciengineering.com
            </a>
          </p>
        </span>
      </motion.div>

      <motion.div
        className="footer-time"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-heading">
          <h3>Working Hours</h3>
          <LuAlarmClock />
        </div>

        <div>
          Monday – Friday: 9:00 AM – 5:00 PM
          <div>Saturday: 10:00 AM – 2:00 PM</div>
          <div>Sunday: Closed</div>
        </div>
      </motion.div>

      <motion.div
        className="footer-socials"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-heading">
          <h3>Socials</h3>
          <MdGroup />
        </div>
        <span className="social-icons--container">
          <p>
            {" "}
            <a
              href="https://twitter.com/NwabaPromise"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </p>

          <p>
            <a
              href="https://youtube.com/@ProcciEngineering-f6o"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoYoutube />
            </a>
          </p>
        </span>
      </motion.div>

      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <em> &copy; All rights reserved by PROCCI {year}</em>
      </motion.div>
    </footer>
  );
}

export default Footer;

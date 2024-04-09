import { SiGmail } from "react-icons/si";
import { FaMobileScreen } from "react-icons/fa6";
export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contact Me</h2>
      </div>
      <a href="mailto:jermieorex.anthony@gmail.com">
        <SiGmail />
        <span style={{ padding: "10px", fontWeight: "bold" }}>
          jermieorex.anthony@gmail.com
        </span>
      </a>
      <div>
        <FaMobileScreen />{" "}
        <span style={{ fontWeight: "bold" }}>8667761462</span>
      </div>
    </section>
  );
}

import "./MissionVisionStatement.scss";
import Statement from "./Statement";
import { GiBinoculars } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { FaPeopleCarry } from "react-icons/fa";
import { usePortfolio } from "../context/PortfolioContext";

function MissionVisionStatement() {
  const { hideView } = usePortfolio();

  return (
    <>
      <div className="vision-mission">
        <div className="close">
          <button onClick={hideView} className="close-btn">
            X
          </button>
        </div>

        <h1 className="heading">
          Vision, Mission statement <br />& <br />
          Core Values
        </h1>

        <div className="statement">
          <div className="">
            <Statement
              heading="Our Vision"
              icon={<GiBinoculars />}
              bgColor="var(--color-green-2)"
            >
              To be the leading provider of innovative and high-quality civil
              and structural engineering solutions, setting the benchmark for
              excellence in the industry.
            </Statement>

            <Statement
              heading="Our Mission"
              icon={<GoGoal />}
              bgColor="var(--color-yellow-3)"
            >
              Our mission is to deliver exceptional engineering services that
              meet the highest standards of quality, safety, and efficiency. We
              are committed to solving complex challenges and exceeding client
              expectations by leveraging our expertise, innovative solutions,
              and a client-focused approach.
            </Statement>

            <Statement
              heading="Our Core Values"
              icon={<FaPeopleCarry />}
              bgColor="var(--color-green-2)"
            >
              Excellence: We strive for the highest standards in everything we
              do, ensuring quality in our services and outcomes. <br />
              Integrity: We conduct our business with honesty and transparency,
              building lasting relationships based on trust. <br />
              Innovation: We embrace new technologies and creative solutions to
              solve complex engineering challenges. <br />
              Safety: We prioritize safety in every project, ensuring the
              well-being of our team, clients, and the environment. <br />
              Client Focus: We listen to our clients and tailor our solutions to
              meet their unique needs, ensuring satisfaction and long-term
              success.
            </Statement>
          </div>
        </div>
      </div>
    </>
  );
}

export default MissionVisionStatement;

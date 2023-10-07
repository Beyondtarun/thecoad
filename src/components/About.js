import React from "react";
import "./About.css";
import { BannerTop } from "./Banner";
import { Back } from "../components2/Joinus";
import AIHUMAN from "../components2/images/AIHUMAN.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="AboutBody">
        <BannerTop />
        {/* Back component is coded in JoinUs */}
        <Back color="transparent" />
        <div className="AboutContainer flex flex-col items-center text-center white roboto">
          <span className="AboutHeading">
            <hr />
            ABOUT - THE COAD<br/>
            <span className="dancing tagline">The Home of Experts in Coading Operations Alogoritms and Development.</span>

            <hr />
          </span>
          <div className="AboutContent flex justify-even items-center">
            <div className="AboutImg">
              <img src={AIHUMAN} alt="about"></img>
            </div>

            <div className="AboutContent-text family">
              The Programming Society of Banarsidas Chandiwala Institute of
              Information Technology, known as THE COAD, stands as a beacon of
              excellence and innovation within our academic community. Our
              society is deeply committed to nurturing a vibrant learning
              environment, where the primary focus lies in fostering technical
              knowledge among our students. Our mission is to empower and
              upskill these young minds, ensuring they are well-equipped to meet
              the challenges of the future. <br />
              <br />
              At THE COAD, we recognize the importance of staying abreast of the
              ever-evolving technology landscape. Through our meticulously
              crafted programs and initiatives, we strive to provide students
              with not only theoretical knowledge but also practical, hands-on
              experience. We believe in cultivating a passion for programming,
              problem-solving, and creativity, laying a strong foundation for
              their professional journey. In addition to our educational
              endeavors, we are dedicated to creating a sense of camaraderie and
              community among our members. <br />
              <br />
              We organize a wide array of workshops, seminars, and competitions,
              inviting industry experts to share their insights and experiences.
              This holistic approach ensures that our members are not only
              academically proficient but also possess the essential soft skills
              and networking abilities vital for success in the real world.
              <br />
              To fulfill the purpose society has seven clubs under its agies:
              <br />{" "}
              <ul>
                <li>C++</li>
                <li>JAVA</li>
                <li>Data Structures and Algorithms</li>
                <li>AL/ML</li>
                <li>Pyhton</li>
                <li>Web Development</li>
                <li>Android</li>
              </ul>
              <br />
              Guiding Lights of THE COAD:
              <br />
              <br />
              <table>
                <tr>
                  <td>Director:</td>
                  <td>
                    <a
                      href="https://www.bciit.ac.in/director-profile.php"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Prof (Dr.) Ravish Saggar
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Facutly Advisor:</td>
                  <td>
                    <a
                      href="https://www.bciit.ac.in/member-profile-detail.php?faculty=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Dr. Sushma Bahuguna
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Incharge:</td>
                  <td>
                    <a
                      href="https://www.bciit.ac.in/member-profile-detail.php?faculty=6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ms. Sonia Batra
                    </a>
                  </td>
                </tr>
              </table><br/>
              <Link to="/joinus" style={{color:"blue"}}>Join us</Link>{" "}
              at THE COAD, where we inspire and enable the next generation of
              tech leaders. Together, we will continue to explore, innovate, and
              shape a future where technology knows no bounds.
            </div>
          </div>
          <hr style={{ width: "100vw" }} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

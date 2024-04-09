import data from "../../data/index.json";
import { FaArrowRight } from "react-icons/fa";
export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img
                src={item.src}
                alt="Placeholder"
                style={{ width: "60px", padding: "8px" }}
              />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div>
                <a
                  href="https://rx-website-front.netlify.app"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://rx-website-front.netlify.app
                </a>
              </div>
              <p className="git-line portfolio--link">
                {item.link}
                <a
                  href="https://github.com/jermieo/RxWebsiteFrontEnd"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaArrowRight />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

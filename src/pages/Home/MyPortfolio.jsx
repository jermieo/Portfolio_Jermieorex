import data from "../../data/index.json";
export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>
      {/* Petty-Cash */}
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
                <div>
                  <button class="btn btn-info">
                    <a
                      href={item.deployurl}
                      className="navbar--content"
                      target="_blank"
                      rel="noreferrer"
                    >
                      deploy-url
                    </a>
                  </button>
                </div>
                <br />
                <div>
                  <p className="git-line portfolio--link">
                    {/* {item.link} */}
                    <button class="btn btn-info">
                      <a
                        href={item.linkFE}
                        className="navbar--content"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github-url (Front-End)
                      </a>
                    </button>
                  </p>
                </div>
                <div>
                  <p className="git-line portfolio--link">
                    <button class="btn btn-info">
                      <a
                        href={item.linkBE}
                        className="navbar--content"
                        target="_blank"
                        rel="noreferrer"
                      >
                        github-url (Back-End)
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import data from "../../data/index.json";
// import { FaArrowRight } from "react-icons/fa";
// export default function Project1() {
//   return (
//     <section className="portfolio--section" id="MyPortfolio">
//       <div className="portfolio--container-box"></div>
//       <div className="portfolio--section--container">
//         {data?.portfolio?.map((item, index) => (
//           <div key={index} className="portfolio--section--card">
//             <div className="portfolio--section--img">
//               <img
//                 src={item.src}
//                 alt="Placeholder"
//                 style={{ width: "60px", padding: "8px" }}
//               />
//             </div>
//             <div className="portfolio--section--card--content">
//               <div>
//                 <h3 className="portfolio--section--title">{item.title}</h3>
//                 <p className="text-md">{item.description}</p>
//               </div>
//               <p className="git-line portfolio--link">
//                 {item.link}
//                 <a
//                   href="https://github.com/jermieo/RxWebsiteFrontEnd"
//                   className="navbar--content"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <FaArrowRight />
//                 </a>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

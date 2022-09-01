/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function App() {
  return (
    <div>
      <div className="insta">
        <AiOutlineInstagram></AiOutlineInstagram>{" "}
        <a href="https://www.instagram.com/burakfevzikar/">BURAK FEVZİ KAR</a>
      </div>
      <div className="container">
        <div
          className="panel active"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80")',
          }}
        ></div>
        <div
          className="panel"
          style={{
            backgroundImage:
              'url("https://wallpapercave.com/wp/wp2671918.jpg")',
          }}
        ></div>
        <div
          className="panel"
          style={{
            backgroundImage:
              'url("https://w0.peakpx.com/wallpaper/536/460/HD-wallpaper-araba-black-car-cars-gle.jpg")',
          }}
        ></div>
        <div
          className="panel"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")',
          }}
        ></div>
        <div
          className="panel"
          style={{
            backgroundImage:
              'url("https://cdn.wallpapersafari.com/59/79/LcaIUx.jpg")',
          }}
        ></div>
      </div>
      <div className="footer__copyright">
        <small>&copy; BFK Turtorials. All rights reserved</small>
      </div>
    </div>
  );
}

export default App;

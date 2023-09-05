import "./style.css";
import img1 from "./img/hello.jpg";

function App() {
  return (
    <>
      <div className="Nepal">
        <header>
          The Nepali Times
          <h1>The country of Mount Everest</h1>
        </header>
        <a href="https://travelnepal.com" target="_blank"></a>
        <picture>
          <img src={img1} className="img" />
          <main>
            <article>
              Mount Everest is a peak in the Himalaya mountain range. It is
              located between Nepal and Tibet, an autonomous region of China.{" "}
            </article>
          </main>
        </picture>
      </div>
      <h1>Nepal</h1>
      <div className="Nepalese">
        <p></p>
      </div>
      <p className=""></p>
    </>
  );
}

export default App;

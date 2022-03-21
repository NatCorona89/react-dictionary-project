import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <span className="open-source">
            This project was coded by Natalie Corona, is open-sourced on{" "}
          </span>
          <a
            href="https://github.com/NatCorona89/Portfolio-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          <span className="open-source">and hosted on </span>
          <a
            href="https://app.netlify.com/sites/friendly-wozniak-e483a6/overview"
            target="blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

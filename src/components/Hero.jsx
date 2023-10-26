import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summa logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/roopeky/summa")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br />{" "}
        <span className="red_gradient">OpenAI GPT-3.5</span>
      </h1>
    </header>
  );
};

export default Hero;

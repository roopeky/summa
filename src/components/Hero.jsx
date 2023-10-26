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
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="red_gradient">OpenAI GPT-3.5</span>
      </h1>
      <h2 className="desc">
        Summa is a free tool that summarizes articles using OpenAI GPT-3.5
        model. It is a great way to get the gist of an article without having to
        read the whole thing.
      </h2>
    </header>
  );
};

export default Hero;

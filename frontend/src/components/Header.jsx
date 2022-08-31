import Typewriter from "typewriter-effect";
import "../style/headerAndFooter.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="cover d-flex text-light justify-content-center align-items-center">
          <h1 className="text-center text-wrap">
            <Typewriter
              options={{
                strings: [
                  "Welcome to learn2code",
                  "You can find here the best lectures for the top programing languages!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

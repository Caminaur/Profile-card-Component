import "./App.css";
import bgPatternCard from "./assets/images/bg-pattern-card.svg";
import profilePicture from "./assets/images/image-victor.jpg";
import patternTop from "./assets/images/bg-pattern-top.svg";
import patternBottom from "./assets/images/bg-pattern-bottom.svg";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-dark-cyan p-8">
      <img
        className="absolute -left-50 -top-140 w-280 z-1"
        src={patternTop}
        alt=""
      />
      <img
        className="absolute -right-20 -bottom-170 w-280 z-1"
        src={patternBottom}
        alt=""
      />
      <div className="bg-white rounded-2xl flex flex-col items-center overflow-hidden shadow-lg z-2">
        {/* // un cuadrado */}
        <div className="w-full h-70 relative">
          {/* top part */}
          <img
            className="w-full h-1/2 bg-no-repeat bg-cover"
            src={bgPatternCard}
            alt="Background image"
          />
          <div className="flex flex-col items-center justify-end h-full absolute w-full top-0 pb-6">
            <div className="flex justify-center items-center gap-3 ">
              <p className="text-primary-very-dark-blue font-bold text-lg">
                Victor Crest
              </p>
              <p className="text-lg text-neutral-dark-gray font-medium">26</p>
            </div>
            <p className="text-center text-neutral-dark-gray text-sm">London</p>
          </div>
          <img
            className="absolute  border-4 border-white rounded-full
            top-1/2 
            left-1/2
            -translate-x-1/2
            -translate-y-1/2"
            src={profilePicture}
            alt="Profile picture"
          />
        </div>

        <div className="h-[1px] w-full bg-primary-dark-grayish-blue opacity-20"></div>
        <div className="w-full flex items-center justify-around p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-lg text-primary-very-dark-blue">80K</p>
            <p className="text-xs text-primary-dark-grayish-blue  tracking-widest">
              Followers
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-lg text-primary-very-dark-blue">
              803K
            </p>
            <p className="text-xs text-primary-dark-grayish-blue  tracking-widest">
              Likes
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-lg text-primary-very-dark-blue">
              1.4K
            </p>
            <p className="text-xs text-primary-dark-grayish-blue  tracking-widest">
              Photos
            </p>
          </div>
        </div>
      </div>
      <div class="text-md absolute bottom-2 text-center max-sm:text-xs attribution-div">
        <a
          class="text-white font-bold transition-all duration-300 hover:text-teal-200"
          href="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ"
        >
          Challenge{" "}
        </a>
        coded by{" "}
        <a
          href="https://github.com/Caminaur/Profile-card-Component"
          class="text-white font-bold transition-all duration-300 hover:text-teal-200"
        >
          Julian Caminaur
        </a>
        .
      </div>
    </div>
  );
}

export default App;

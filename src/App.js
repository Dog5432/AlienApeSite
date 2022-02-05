import "./App.css";
import React, { useRef } from "react";
import logo from "./Images/logo.png"
import image184 from "./Images/image184.png";
import image144 from "./Images/image144.png";
import image132 from "./Images/image132.png";
import image102 from "./Images/image102.png";

function App() {
  const dash = useRef(null);
  const date = useRef(null);
  const team = useRef(null);
  const roadmap = useRef(null);

  const executeScrollDash = () => dash.current.scrollIntoView();
  const executeScrollDate = () => date.current.scrollIntoView();
  const executeScrollTeam = () => team.current.scrollIntoView();
  const executeScrollRoadmap = () => roadmap.current.scrollIntoView();

  return (
    <div className="App">
      <nav class="  justify-center text-center lg:text-left grid justify-center lg:flex  lg:justify-between flex-wrap bg-[#161616] p-6 ">
        <div class=" lg:ml-0 lg:inline-block flex-shrink-0 lg:mr-6 w-80">
          <img src={logo} alt=""></img>
        </div>
        <div class=" w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow fontCustom text-white ">
            <p
              onClick={executeScrollDash}

              class="block mt-4 lg:inline-block lg:mt-0 lg:mr-10 text-center cursor-pointer buttonHover"
            >
              Dashboard
            </p>
            <p
              onClick={executeScrollDate}

              class="block mt-4 lg:inline-block lg:mt-0 lg:mr-10 text-center cursor-pointer buttonHover"
            >
              Sale Date
            </p>
            <p
              onClick={executeScrollTeam}

              class="block mt-4 lg:inline-block lg:mt-0 lg:mr-10 text-center cursor-pointer buttonHover"
            >
              Team
            </p>
            <p
              onClick={executeScrollRoadmap}
              class="block mt-4 lg:inline-block lg:mt-0 lg:mr-10 text-center cursor-pointer buttonHover"
            >
              Roadmap
            </p>
          </div>
          <a href="https://twitter.com/fablenft">
            <i className="ml-4 fab fa-twitter text-white mr-6 mt-4 lg:mt-0"></i>
          </a>
          <a href="https://discord.com/invite/TqW67g7R6n">
            <i className="fab fa-discord text-white mr-6"></i>
          </a>
          <a href="https://opensea.io">
            <i className="fas fa-anchor text-white mr-6"></i>
          </a>
        </div>
      </nav>
      <div ref={dash} className="bg-[#212529] pt-10 pb-24">
        <div className="justify-between bg-[#161616] p-6 ml-4 mr-4 sm:ml-16 sm:mr-16">
          <div className="justify-items-center grid">
            <h1 className="text-[#9a6d32] fontCustom text-center text-2xl">
              introducing Alien Apes!
            </h1>
            <p className="text-white fontCustom text-center mt-16 text-sm">
              Alien Apes are a brand new set of 5000 NFTs ready to invade the
              Ethereum blockchain.
            </p>
            <p className="text-white fontCustom text-center  mt-16 text-sm">
              Our NFTs are created from over 100 traits and are procedurally
              generated so that each is unique.
            </p>
            <p className="text-white fontCustom text-center  mt-16 text-sm">
              Each NFT has its own unique look
            </p>
            <p className="text-white fontCustom text-center  mt-16 text-sm">
              #AlienApes
            </p>
            <img
              className=" mt-16 "
              src={image102}
              alt=""
            ></img>
          </div>
        </div>
        <div
          ref={date}
          className="justify-between ml-4 mr-4 md:ml-16 md:mr-16 bg-[#161616] p-6 lg:ml-80  lg:mr-80 mt-20"
        >
          <h1 className="text-[#9a6d32] fontCustom text-center text-2xl">
            Coming Soon!
          </h1>
          <h1 className="text-white fontCustom text-center text-4xl sm:text-8xl mt-16">
            Feb
          </h1>
          <h1 className="text-white fontCustom text-center text-4xl sm:text-8xl mt-8">
            26
          </h1>
        </div>
        <h1
          ref={team}
          className="text-[#9a6d32] bg-[#161616] fontCustom text-center text-2xl ml-5 mr-5 lg:ml-20 lg:mr-20 mt-20 pt-6"
        >
          Team
        </h1>
        <div className="justify-items-center lg:justify-between sm:flex bg-[#161616] p-6 ml-5 mr-5 lg:ml-20 lg:mr-20">
          <div className="justify-items-center  grid sm:ml-32 ">
            {" "}
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8 ">
              Dog
            </h1>{" "}
            <img
              className="mt-4 rt"
              src={image132}
              alt=""
            ></img>
            <a href="https://twitter.com/0xGrimmm">
              <i className="fab fa-twitter text-white mt-4"></i>
            </a>
          </div>
          <div className="justify-items-center grid">
            {" "}
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Aurin
            </h1>{" "}
            <img
              className="mt-4 rt"
              src={image144}
              alt=""
            ></img>
            <a href="https://twitter.com/fablenft">
              <i className="fab fa-twitter text-white mt-4"></i>
            </a>
          </div>
          <div className="justify-items-center grid sm:mr-32">
            {" "}
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8 ">
              Sauce
            </h1>{" "}
            <img
              className="mt-4 rt"
              src={image184}
              alt=""
            ></img>
            <a href="https://twitter.com/Funkiersauce">
              <i className="fab fa-twitter text-white mt-4"></i>
            </a>
          </div>
        </div>
        <div ref={roadmap} className="justify-items-center grid">
          <div className="justify-between grid mt-20">
            <h1 className="text-[#9a6d32] fontCustom text-center text-4xl sm:text-7xl">
              Roadmap
            </h1>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-12">
              Phase 1
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-12 mr-12 sm:ml-52 sm:mr-52 lg:ml-80 lg:mr-80 mt-8">
              We will market and collaborate with many different sites like
              rarity.tools. We will create a discord and start building a
              community.
            </div>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Phase 2
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-12 mr-12 sm:ml-52 sm:mr-52 lg:ml-80 lg:mr-80 mt-8">
              Site will be launched with a set of 5000 NFTs on the Etheruem
              blockchain. Mint price will be 0.055 eth.
            </div>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Phase 3
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-12 mr-12 sm:ml-52 sm:mr-52 lg:ml-80 lg:mr-80 mt-8">
              Sales bot will be created on both twitter and discord to further
              community growth.
            </div>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Phase 4
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-12 mr-12 sm:ml-52 sm:mr-52 lg:ml-80 lg:mr-80 mt-8">
              We will collaborate with up and coming NFTs to provide value to
              our holders as well as exclusive perks in our community given to
              holders.
            </div>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Phase 5
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-12 mr-12 sm:ml-52 sm:mr-52 lg:ml-80 lg:mr-80 mt-8">
              Roadmap V2 is announced to further bring value to holders.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-items-center lg:justify-between flex-wrap grid bg-[#161616] p-16">
        {" "}
        <a href="https://discord.gg/EmScZ6ysrA">
          <h1 className="text-[#9a6d32] fontCustom text-center text-lg buttonHover">
            Legal Disclaimer
          </h1>
        </a>
        <div class=" w-full block flex-grow lg:flex lg:items-center text-center lg:text-right mt-8">
          <a href="https://twitter.com/fablenft">
            <i className="fab fa-twitter text-white mr-6"></i>
          </a>
          <a href="https://discord.com/invite/TqW67g7R6n">
            <i className="fab fa-discord text-white mr-6"></i>
          </a>
          <a href="https://opensea.io">
            <i className="fas fa-anchor text-white mr-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

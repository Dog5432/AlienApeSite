import "./App.css";
import React, {useRef } from "react";
import logo from "./Images/logo.png";

function App() {

  const dash = useRef(null)
  const date = useRef(null)
  const team = useRef(null)
  const roadmap = useRef(null)

  const executeScrollDash = () => dash.current.scrollIntoView()  
  const executeScrollDate = () => date.current.scrollIntoView()  
  const executeScrollTeam = () => team.current.scrollIntoView()  
  const executeScrollRoadmap = () => roadmap.current.scrollIntoView()  


  return (
    <div className="App">
      <nav class=" flex justify-between flex-wrap bg-[#161616] p-6 ">
        <div class=" inline-block flex-shrink-0 mr-6 w-80">
          <img src={logo} alt=""></img>
        </div>
        <div class=" w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow fontCustom text-white ">
            <a onClick={executeScrollDash} class="block mt-4 lg:inline-block lg:mt-0 mr-10 text-center cursor-pointer buttonHover">
              Dashboard
            </a>
            <a onClick={executeScrollDate} class="block mt-4 lg:inline-block lg:mt-0 mr-10 text-center cursor-pointer buttonHover">
              Sale Date
            </a>
            <a onClick={executeScrollTeam} class="block mt-4 lg:inline-block lg:mt-0 mr-10 text-center cursor-pointer buttonHover">
              Team
            </a>
            <a onClick={executeScrollRoadmap} class="block mt-4 lg:inline-block lg:mt-0 mr-10 text-center cursor-pointer buttonHover">
              Roadmap
            </a>
          </div>
          <a href="https://twitter.com/fablenft">
            <i className="fab fa-twitter text-white mr-6"></i>
          </a>
          <a href="https://discord.gg">
            <i className="fab fa-discord text-white mr-6"></i>
          </a>
          <a href="https://opensea.io">
            <i className="fas fa-anchor text-white mr-6"></i>
          </a>
        </div>
      </nav>
      <div ref={dash} className="bg-[#212529] pt-10 pb-24">
        <div className="justify-between bg-[#161616] p-6 ml-20 mr-20">
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
              src="https://gateway.pinata.cloud/ipfs/Qmdui6fbiE61Lcqc2FEAqS1D1TudJgpuenHxiK1eZCTYYK/102.png"
              alt=""
            ></img>
          </div>
        </div>
        <div ref={date} className="justify-between bg-[#161616] p-6 ml-96 mr-96 mt-20">
          <h1 className="text-[#9a6d32] fontCustom text-center text-2xl">
            Coming Soon!
          </h1>
          <h1 className="text-white fontCustom text-center text-9xl mt-16">
            Feb
          </h1>
          <h1 className="text-white fontCustom text-center text-9xl mt-8">-</h1>
        </div>
        <h1 ref={team} className="text-[#9a6d32] bg-[#161616] fontCustom text-center text-2xl ml-20 mr-20 mt-20 pt-6">
          Team
        </h1>
        <div className="justify-between flex bg-[#161616] p-6 ml-20 mr-20">
          <div className="justify-items-center grid ml-32">
            {" "}
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Dog
            </h1>{" "}
            <img
              className="mt-4 rt"
              src="https://gateway.pinata.cloud/ipfs/Qmdui6fbiE61Lcqc2FEAqS1D1TudJgpuenHxiK1eZCTYYK/132.png"
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
              src="https://gateway.pinata.cloud/ipfs/Qmdui6fbiE61Lcqc2FEAqS1D1TudJgpuenHxiK1eZCTYYK/144.png"
              alt=""
            ></img>
            <a href="https://twitter.com/fablenft">
              <i className="fab fa-twitter text-white mt-4"></i>
            </a>
          </div>
          <div className="justify-items-center grid mr-32">
            {" "}
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8 ">
              Sauce
            </h1>{" "}
            <img
              className="mt-4 rt"
              src="https://gateway.pinata.cloud/ipfs/Qmdui6fbiE61Lcqc2FEAqS1D1TudJgpuenHxiK1eZCTYYK/184.png"
              alt=""
            ></img>
            <a href="https://twitter.com/Funkiersauce">
              <i className="fab fa-twitter text-white mt-4"></i>
            </a>
          </div>
        </div>
        <div ref={roadmap} className="justify-items-center grid">
          <div className="justify-between grid ml-20 mr-20 mt-20">
            <h1 className="text-[#9a6d32] fontCustom text-center text-7xl">
              Roadmap
            </h1>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-12">
              Phase 1
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-96 mr-96 mt-8">
              Set of 5000 NFTs created and deployed on Ethereum Network at a
              mint price of 0.055.
            </div>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Phase 2
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-96 mr-96 mt-8">
              Creation of sales bot inside discord and community building.
            </div>
            <h1 className="text-[#9a6d32] fontCustom text-center text-lg mt-8">
              Phase 3
            </h1>
            <div className="justify-between text-white fontCustom bg-[#161616] p-6 ml-96 mr-96 mt-8">
              Collaboration with several websites such as rarity.tools.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap bg-[#161616] p-16">
        {" "}
        <a href="legaldisclaimer.com">
        <h1 className="text-[#9a6d32] fontCustom text-center text-lg buttonHover">
              Legal Disclaimer
            </h1>
            </a>
        <div class=" w-full block flex-grow lg:flex lg:items-center text-right mt-8">
          <a href="https://twitter.com/fablenft">
            <i className="fab fa-twitter text-white mr-6"></i>
          </a>
          <a href="https://discord.gg">
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

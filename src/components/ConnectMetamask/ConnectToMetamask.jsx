import React, { useState } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');

   

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          KafkaCoinEth.com
        </h1>
        <hr className="my-4" />
        <p>
        Kafka the german cockroach
        </p>

        <hr className="my-4" />
        <a href="#" >
          <img src="images/logo.png" width="100%" alt="Bnetly" />
        </a>
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />
        <a href="https://github.com/kafkacoineth" >
          Github.com/kafkacoineth
        </a>
        <hr className="my-4" />
        <a href="https://x.com/kafkacoineth" >
          x.com/kafkacoineth
        </a>
        <hr className="my-4" />
        <a href="/home/" >
          Kafka Home
        </a>
      </div>
      <hr className="my-4" />

      <div className="container">
        <hr className="my-4" />
        Kafkacoineth.com &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28", // Must match your contract's pragma version
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Ganache GUI default port
      accounts: ["0x87229c3a6d8b9eec2ef090b56b12348559a1fd284fb6cbd161cdbf0748d05a7f"] // Use a Ganache account's private key
    }
  }
};

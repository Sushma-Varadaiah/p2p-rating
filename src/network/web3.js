import Web3 from "web3";
//const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))

if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable()
}

export default window.web3
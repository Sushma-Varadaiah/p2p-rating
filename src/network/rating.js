import web3 from "./web3"
import Rating from './Rating.json';

const ratingABI = Rating.abi;
const contractAddress = '0x5401848d62A7b2b5a20E83842A71528c18834a02'

export default new web3.eth.Contract(ratingABI , contractAddress)

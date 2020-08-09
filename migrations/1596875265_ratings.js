var Ratings = artifacts.require("./Ratings.sol");

module.exports = function(_deployer) {
	_deployer.deploy(Ratings);
};

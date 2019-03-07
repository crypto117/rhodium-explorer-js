var api = 'http://134.209.69.10:8010';
var donationAddress = "RhodaLzk3r89PAUnB7NUTAEDfzY5ApiMRaL531j9SWqf3wMpGWiHckSMHHo5tNAoBB7cU9KTjxjRQG5ezFsf6CQY33fGtgWNEj";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 100000000;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 rhox
var totalSupply =  2100000000000000000; // enter the total supply in atomic units
var symbol = 'rhox'; // enter the coin's ticker
var refreshDelay = 3000;

// pools stats by MainCoins
var networkStat = {
 "rhox": [
	[rhox.cryptonote.club, "https://rhox.cryptonote.club:8199/stats"],
 ]
};

var networkStat2 = {
    "rhox": [
	[""]
 ]
};

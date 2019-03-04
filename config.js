var api = 'http://104.248.211.207:8011';
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
	//[roto2.org, "http://rhox.roto2.org/"],
	//["us.turtlepool.space", "http://us.turtlepool.space:8117"],
	//["hk.turtlepool.space", "http://hk.turtlepool.space:8117"],
	//["turtlecoinpool.ddns.net", "http://turtlecoinpool.ddns.net:8127"],
	//["trtl.mine2gether.com", "https://trtl.mine2gether.com/api"],
	//["trtl.heigh-ho.funkypenguin.co.nz", "https://api.trtl.heigh-ho.funkypenguin.co.nz"],
	//["trtl.radicaldelta.org", "http://trtl.radicaldelta.org:8117"],
	//["turtle.atpool.party", "http://turtle-eu.atpool.party:8117"],
	//["ny.minetrtl.us", "http://ny.minetrtl.us:8117"],
	//["xk.is", "https://xk.is/api"],
	//["trtl.llama.horse","http://pool.llama.horse:8118"],
	//["trtl.hackerknowledge.de", "https://pool.trtl.hackerknowledge.de:8119"]
 ]
};

var networkStat2 = {
    "rhox": [
	[""]
 ]
};

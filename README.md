# RhodiumCoin-Blockchain-Explorer
Block explorer for TurtleCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon turtlecoind. It should be accessible from the Internet. Run turtlecoind with open port as follows:
```bash
./src/RhodiumCoind --enable-cors="*" --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=8004
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Devs:
    @devopsralf

Donate: [RHOX] Rhodd9ruYzfET3VrUtsEBcKApUwG5obGXEnv7C72as6kLnKv1WtFowV6BtyM5GYiyZDoSH9z9QrvN66nqWPFTVF1743xbZLTjL

### Note

A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer

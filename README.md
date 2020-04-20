# TwitterMultiToolBot 🤖

Bot defined with some usefull functions, is needed to create config.js in root directory with app and user consumer and access tokens, I leave an example at the end of this doc. Also is required to uncoment functions and create your own program. In case of wanting to upload to a server, use the comand "setInterval(*functionName*, *milisecons*);" to leave it running in a loop.

## Implemented Functions

+ favoriteTweet();
+ retweet();
+ randomFav();
+ searchID();
+ idtoname();
+ flist(name);
+ tuit();
+ flistHello();
+ flistdata(name);
+ naceElTiempo();
+ lastTwit('');
+ last20('');
+ last20x('');
+ queHoraEs();
+ favID();
+ rtID();
+ favLast20ID();
+ rtLast20ID();
+ espera();

### Installation

1. Clone the repository
```sh
$ git clone https://github.com/AlbertoMGV/TwitterMultiToolBot
```

2. Install Node Modules

```sh
$ npm install
```

3. Create config.js in root folder

```
module.exports = {

    consumer_key: '',
  
    consumer_secret: '',
  
    access_token: '',  
  
    access_token_secret: ''
  
}
```

4. Run the bot

```sh
$ node bot.js
```

<!-- CONTRIBUTING -->
## Contributing

Feel free to open pull requests with new features or bug fixes. Any contributions you make are **greatly appreciated**.

As the license states, you can fork and even redistribute this as long as it is communicated to me.

<!-- CONTACT -->
## Contact

If you are not that tech savvy feel free to ask me any questions via email. Or if youre thinking about continue developing that project contact me!

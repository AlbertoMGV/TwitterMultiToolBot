# TwitterMultiToolBot

Bot defined with some usefull functions, is needed to create config.js in root directory with app and user consumer and access tokens, I leave an example at the end of this doc. Also is required to uncoment functions and create your own program. In case of wanting to upload to a server, use the comand "setInterval(*functionName*, *milisecons*);" to leave it running in a loop.

## Implemented Functions

favoriteTweet();
retweet();
randomFav();
searchID();
idtoname();
flist(name);
tuit();
flistHello();
flistdata(name);
naceElTiempo();
lastTwit('');
last20('');
last20x('');
queHoraEs();
favID();
rtID();
favLast20ID();
rtLast20ID();
espera();


## Config.js file example

module.exports = {

    consumer_key: '',
  
    consumer_secret: '',
  
    access_token: '',  
  
    access_token_secret: ''
  
}

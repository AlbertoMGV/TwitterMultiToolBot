var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

/*   DEFINO TODAS LAS FUNCIONES */



// BUSCA Y RETWEETEA EL MAS RECIONES CON LOS HASTASGS DE LA QUERY
var retweet = function() {
    var params = {
        q: '#CSGO, #csgo',
        result_type: 'recent',
        
    }
    Twitter.get('search/tweets', params, function(err, data) {
        if (!err) {
            var retweetId = data.statuses[0].id_str;
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log(' * Retweeted');
                }
                if (err) {
                    console.log(' * ERROR : Already Retweeted');
                }
            });
        }
        else {
          console.log(' * ERRO : Searching error');
        }
    });
}


// BUSCA Y FAVEA EL MAS RECIONES CON LOS HASTASGS DE LA QUERY
var favoriteTweet = function(){
  var params = {
      q: '#CSGO, #csgo',  
      result_type: 'recent',
  }

  Twitter.get('search/tweets', params, function(err,data){


    var tweet = data.statuses;
    var randomTweet = ranDom(tweet); 


    if(typeof randomTweet != 'undefined'){
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){

        if(err){
          console.log(' * ERROR : Already Favorited');
        }
        else{
          console.log(' * Favorited');
        }
      });
    }
  });
}

// CREA UN ID DE TWEET AL AZAR
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};

var randomFav = function() {
	var params = {
		q: 'Alberto',
		count: 1,
	}
	Twitter.get('search/tweets', params, function(err, data, response) {
  		console.log(data)
	})

}

//BUSCA ID DE TODO LOS FOLLOWES
var searchID = function(){
	var params = {
		screen_name: 'CNG_Official',
	}
	Twitter.get('followers/ids', params ,  function (err, data, response) {
 	console.log(data)
	})
}

// COMBIERTE ID A USER
var idtoname = function(){
	var params = {
		user_id: '610675060',
	}
	Twitter.get('users/show', params ,  function (err, data, response) {
 	console.log(data.screen_name)
	})
}

//LISTA TODOS LOS FOLLOWERS
var flist = function(){
	var params1 = {
		screen_name: 'CNG_Official',
	}
	Twitter.get('followers/ids', params1 ,  function (err, data, response) {
 		var ids1 = data.ids;
 		for (var i = 0; i < ids1.length; i++) { 
	  		Twitter.get('users/show', { user_id: ids1[i] } ,  function (err, data, response) {
	 			console.log('@'+data.screen_name)
			})
			
		}


 		
	})
}


//TWUITTEA HOLA MUNDO
var tuit = function(){
	var params = {
		status: 'HOLA MUNDO!',
	}

	Twitter.post('statuses/update', params, function(err, data, response) {
	  console.log(data)
	})

}

var flistHello = function(){
	var params1 = {
		screen_name: 'CNG_Official',
	}
	Twitter.get('followers/ids', params1 ,  function (err, data1, response) {
 		var ids1 = data1.ids;
 		for (var i = 0; i < ids1.length; i++) { 
	  		Twitter.get('users/show', { user_id: ids1[i] } ,  function (err, data, response) {
	 			var params= {
	 				status:  '@' + data.screen_name + ' Gracias por seguirme brodel!',
	 			}

	 			Twitter.post('statuses/update', params, function(err, data, response) {
	  				console.log('Hemos saludado a =' + data.screen_name)
				})
			})
			
		}


 		
	})
}


/*   EJECUCION DE FUNCIONES */


/*favoriteTweet();
setInterval(favoriteTweet, 3600000);

retweet();
setInterval(retweet, 5000);

randomFav();


searchID();

flist();
 
tuit();

*/

flistHello();


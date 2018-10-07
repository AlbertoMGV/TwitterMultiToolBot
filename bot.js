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
var searchID = function(name){
	var params = {
		screen_name: name,
	}
	Twitter.get('followers/ids', params ,  function (err, data, response) {
 		console.log(data.ids)
	})
}

// COMBIERTE ID A USER
var idtoname = function(){
	var params = {
		user_id: '610675060',
	}
	Twitter.get('users/show', params ,  function (err, data, response) {
 	console.log(data)
	})
}

//LISTA TODOS LOS FOLLOWERS
var flist = function(name){
	var params1 = {
		screen_name: name,
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
var tuit = function(textt){

	Twitter.post('statuses/update',{status: textt}, function(err, data, response) {
	  console.log(data)
	})

}

//SALUDA A TODOS TUS SEGUIDORES

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

	 			Twitter.post('statuses/update', params, function(err, data2, response) {
	  				console.log('Hemos saludado a =' + data.screen_name)
				})
			})
			
		}


 		
	})
}

//INFO DETALLADA DE UN USER
var userinfo = function(name1){
	var params = {
		screen_name: name1,
	}
	Twitter.get('users/show', params ,  function (err, data, response) {
 		console.log('Nombre: '+data.name);
 		console.log('Arroba: '+data.screen_name);
 		console.log('ID: '+data.id_str);
 		console.log('Seguidos: '+data.friends_count);
 		console.log('Seguidores: '+data.followers_count);
 		console.log('Twits: '+data.statuses_count);
 		console.log('Favs: '+data.favourites_count);
 		console.log('***************************');

	})
}


//LISTA SEGUIDORES CON INFO DETALLADA
var flistdata = function(name){
	var params1 = {
		screen_name: name,
	}
	Twitter.get('followers/ids', params1 ,  function (err, data, response) {
 		var ids1 = data.ids;
 		console.log('LISTANDO LOS '+ids1.length+" SEGUIDORES DE "+name+'...');
	 	console.log('***************************');
 		for (var i = 0; i < ids1.length; i++) { 
	  		Twitter.get('users/show', { user_id: ids1[i] } ,  function (err, data, response) {
	 			
	 			userinfo(data.screen_name);
			})
			
		}


 		
	})
}

var naceElTiempo = function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if(h=='00'){
		if(m=='00'){
			tuit("00:00 Nace el tiempo");
		}
	}
}

var queHoraEs = function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	var hora = h + ':' + m + ':' + s;

		console.log(hora);
}


var last20 = function(name){
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {

				console.log(data.error);

				

	 			for (var i = data.length - 1; i >= 0; i--) {



	 				console.log("Tweet #"+(i+1));

	 				console.log(data[i].text);
	 			}
	 			
			})
}

var last20x = function(name){
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {

	 			for (var i = data.length - 1; i >= 0; i--) {

	 				console.log("Tweet #"+(i+1));

	 				t = data[i].text;
	 				t1 = t.substr( t.indexOf(':') ); 
	 				console.log(t1);
	 			}
	 			
			})
}

var lastTwit = function(name){
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {
				var a = data[0].text;
				var b = a.substr(0,2);
				var c;
				if (b=='RT') {
					c = a.substr( a.indexOf(':')+2);
					console.log(c);
				} else {
					console.log(a);	
				}
			})
}

var lastID = function(name) {
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {
				var ids = data[0].id_str;
				
				return ids;
				
				
			})
}

var rtID = function(ID) {
	Twitter.post('statuses/retweet/:id', { id: ID }, function(err, response) {
                if (response) {
                    console.log(' * Retweeted');
                }
                if (err) {
                    console.log(' * ERROR : Already Retweeted');
                }
            });
}

var favID = function(ID) {
	Twitter.post('favorites/create', {id: ID}, function(err, response){

        if(err){
          console.log(' * ERROR : Already Favorited');
        }
        else{
          console.log(' * Favorited');
        }
      });
}

var favLastID = function(name) {
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {
				var ids = data[0].id_str;
					favID(ids);
				
				
				
			})
}

var favLast20ID = function(name) {
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {
				for (var i = 0; i < data.length; i++) {
					var ids = data[i].id_str;
					console.log(' * Faving tweet #'+(i+1));
					favID(ids);
	 				
	 			}

			})
}

var rtLast20ID = function(name) {
	var params = {
		screen_name : name,
	}
	Twitter.get('statuses/user_timeline', params ,  function (err, data, response) {
				for (var i = 0; i < data.length; i++) {
					var ids = data[i].id_str;
					console.log(' * RTing tweet #'+(i+1));
					rtID(ids);
	 				
	 			}

			})
}

var espera = function(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

/*

----------------------------------------LISTA DE TODAS LAS FUNCIONES DEFINIDAS----------------------------------------

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

setInterval(functionname, miliseconds);



----------------------------------------EJECUCION DE FUNCIONES [MAIN PROGRAM]---------------------------------------- */




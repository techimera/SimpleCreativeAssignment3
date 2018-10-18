//Angular.js Controller
angular.module('movieSearch', [])
.controller('Controller', APIController);

function APIController ($scope, $http) {
        // pass new variable user to this function
        $scope.getmovies = function(){
            //through the API, search movies by keywords
            var apiAddress = "https://api.themoviedb.org/3/search/movie?api_key=4e2457fc3f449ae1031bf4fe900dbd80&query="
            + $scope.Keywords + "&language=en-US&page=1&include_adult=false";
            
            $scope.Keywords = "";
            
            //initialize it
            $scope.movies = [];
            
            $http.get(apiAddress).then( function(response) {
                var dataset = response.data.results;
                for (i = 0; dataset.length; i++){
                    var curdata = dataset[i];
                    // console.log(curdata);
                    var poster = 'http://image.tmdb.org/t/p/w185' + curdata.poster_path;
                    var title = curdata.title;
                    var movieoverview = curdata.overview;
                    $scope.movies.push({
                        poster: poster,
                        title: title,
                        overview: movieoverview
                    });
                }
                
            });
            
            $scope.showdetails = function(movie) {
                // var to = movie.title + movie.overview;
                // alert(movie.title)
                $scope.curmovietitle = movie.title;
                $scope.curmovieoverview = movie.overview;
                
            };
        };
};



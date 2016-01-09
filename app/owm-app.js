angular.module('OWMApp',['ngRoute'])
        .value('owmCities', ['New York', 'Dallas', 'Chicago'])
        .config(['$routeProvider',function($routeProvider)
      {
        $routeProvider.when('/',{
          templateUrl:'home.html',
          controller:'HomeCtrl'
          })
          .when('/cities/:city',{
            templateUrl:'city.html',
            controller:'CityCtrl',
            resolve:{
              city:function(owmCities, $route, $location)
              {
                var city=$route.current.params.city;
                if (owmCities.indexOf(city)===-1)
                {
                  $location.path('/error');
                  return;

                }
                console.log('resolving city',city);
                return city;
              }
            }
          })
          .when('/error',{
            template:'<p>Error - Page Not Found </p>'
          });
      }])

      .controller('HomeCtrl',function($scope)
      {
        //
      }
      )
      .controller('CityCtrl',function($scope,city)
    {
      //empty
      /*var city=$routeParams.city;
      console.log(city);

      if (owmCities.indexOf(city)===-1)
      {
        console.log('')
        return;
      }*/
      console.log("Hey"+ city);
      $scope.city=city;
      //console.log('$scope city',$scope.city);

    })

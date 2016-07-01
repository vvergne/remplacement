angular.module('ionicApp', ['ionic','leaflet-directive'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tabs', {
    url: "/tab",
    abstract: true,
    templateUrl: "tabs.html"
  })
  .state('tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "home.html",
        controller: 'HomeTabCtrl'
      }
    }
  })
  .state('tabs.about', {
    url: "/about",
    views: {
      'about-tab': {
        templateUrl: "about.html",
        controller: 'AboutTabCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise("/tab/home");

})
.controller('AboutTabCtrl', function($scope,$log,leafletData) {
  $scope.onTabTwo = true;
  $scope.onTabOne = false;

  leafletData.getMap('map2').then(function(map) {
    $scope.map = map;
    $log.info(map);
  });

})
.controller('HomeTabCtrl', function($scope,$log,leafletData) {
  $scope.onTabTwo = false;
  $scope.onTabOne = true;


  $scope.doInit = function() {
    leafletData.getMap('map1').then(function(map) {
    $scope.map = map;
    $log.info(map);
      $log.info(map);
    });
  }
});

angular.module('app.controllers', [])

.controller('remplacementCtrl', function($scope){

})

.controller('collaborationCtrl', function($scope) {

})

.controller('cloudCtrl', function($scope) {

})

.controller('mDecinCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('remplacementCtrl',['$scope','$http', function($scope, $http) {

  // Creation de l'objet remplacement
  $scope.remplacement = {}

  // initialisation les modaux avec une chaîne vide
  $scope.remplacement.profession = '';
  $scope.remplacement.lieux = '';
  $scope.remplacement.date = '';
  $scope.remplacement.description = '' ;


}])

.controller('medecinCtrl', function($scope) {

})

.controller('commentCtrl' ,['$scope',function($scope){

  $scope.form = {} ;

  $scope.addComment = function(){
    $scope.comments.push($scope.form);
    $scope.form = {};
  }
  $scope.comments = [
    {
      title: "Recherche de remplacement",
      content :'Contenu Contenu Contenu Contenu Contenu ContenuContenuContenu Contenu ',
      by: 'John'
    },
    {
      title: "Remplacement 2506",
      content :'Second comment',
      by : 'Daniel  '
    }
  ];
}])


.controller('annonceCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up',
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.submit = function(title, region, retro, debut, distance,  fin){
    $scope.announcements.push(
      {
        title: title ,
        retro: retro ,
        region : region ,
        distance : distance ,
        debut: debut ,
        fin : fin ,
      }
    )
  }
  $scope.debut = null ;
  $scope.title = null;
  $scope.fin = null ;
  $scope.region = null ;
  $scope.distance = null ;
  $scope.retro = null ;
  $scope.announcements = [
    {
      title : "MEDECIN CARDIOLOGUE H/F " ,
      region : "Bourgogne ",
      retro : "80%" ,
      debut : " 25 Octobre 2016",
      fin : " 26 Juillet  2016",
      distance: "78km"
    }] ;

    $scope.region = [{"ville":"Lille","id":1},
    {"ville":"Paris","id":2},
    {"ville":"Lyon","id":3},
    {"ville":"Saint-Saulve","id":4}];
    $scope.region_selection = $scope.region[2];

  });


  // .controller('RempCtrl', function($scope, $stateParams, $http){
  //   $scope.remplacement = function(){
  //     $location.path('/'+ ID);
  //   }
  //
  //   $scope.deco = function() {
  //     userData = JSON.parse(window.localStorage.getItem('userData'));
  //     //url = 'http://46.29.126.202:8081/backoffice/api/user/disconnect';
  //     $http({
  //       method: 'GET',
  //       url: 'http://localhost/~debian/Dev/remplacement/api/db-operation.php',
  //       headers: {
  //         Accept: 'application/json',
  //         Context: 'instance='+instanceId+';token='+userData.token+';user='+userData.user.id
  //       }
  //     })
  //     .success(function(data, status) {
  //       console.log('deco '+data+' - '+status);
  //       $location.path('connect');
  //     })
  //     .error(function(data, status) {
  //       console.log('error '+data+' - '+status);
  //     });
  //   }
  // })

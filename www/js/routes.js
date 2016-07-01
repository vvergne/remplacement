angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('seek_remp', {
    url : "seek_remp",
    templateUrl :"templates/seek_remp.html",
  })

  .state('collaboration', {
    url: '/collaboration',
      templateUrl: 'templates/collaboration.html',
        controller: 'collaborationCtrl',
  })

  .state('pharmacien',{
    url : "/rem_pharmacien",
    templateUrl :"templates/remplacement/pharmacien.html",
  })

  .state('remp', {
    url :'/remp',
    templateUrl :'templates/remp.html',
  })

  .state('emploi', {
    url :'/emploi',
    templateUrl :"templates/emploi.html",
  })

  .state('installation', {
    url : '/installation',
    templateUrl : "templates/installation.html",
  })

  .state('menu.patient', {
    url: '/patient',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patient.html',
      }
    }
  })

  .state('depot_remp', {
    url :"depot_remp",
    templateUrl : "templates/depot_remp.html",
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
  })

  .state('medecin', {
    url: '/rem-medecin',
    templateUrl :'templates/remplacement/medecin.html'
  })

  .state('cardiologue', {
    url: '/rem-cardiologue',
    templateUrl :'templates/remplacement/cardiologue.html',
  })

  .state('dentiste', {
    url: '/rem-dentiste',
    templateUrl : 'templates/remplacement/dentiste.html'
  })

  .state('infirmier', {
    url: '/rem-infirmier',
    templateUrl : 'templates/remplacement/infirmier.html'
  })

  .state('kinesitherapeute', {
    url: '/rem-kinesitherapeute',
    templateUrl : 'templates/remplacement/kinesitherapeute.html'
  })


  .state('map', {
    url : '/map',
    templateUrl : "templates/map.html"
  })


  .state('liberal', {
    url: '/rem-liberal',
    templateUrl : 'templates/remplacement/liberal.html'
  })

  .state('cardiologue-rem', {
    url : 'cardiologue-rem',
    templateUrl : "templates/remplace/cardiologue.html"
  })

  .state('dentiste-rem', {
    url : 'dentiste-rem',
    templateUrl : "templates/remplace/dentiste.html"
  })

  .state('infirmier-rem', {
    url : 'infirmier-rem',
    templateUrl : "templates/remplace/infirmier.html"
  })

  .state('kinesitherapeute-rem', {
    url : 'kinesitherapeute-rem',
    templateUrl : "templates/remplace/kinesitherapeute.html"
  })

  .state('liberal-rem', {
    url : 'liberal-rem',
    templateUrl : "templates/remplace/liberal.html"
  })

  .state('medecin-rem', {
    url : 'medecin-rem',
    templateUrl : "templates/remplace/medecin.html"
  })

  .state('pharmacien-rem', {
    url : 'pharmacien-rem',
    templateUrl : "templates/remplace/pharmacien.html"
  })


  .state('home', {
    url: '/accueil',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })


  $urlRouterProvider.otherwise('/accueil') })

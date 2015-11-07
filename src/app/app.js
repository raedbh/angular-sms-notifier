var app = angular.module('asnApp', ['ngRoute', 'ngCookies', 'ngSanitize', 'ui.select']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/notify',
  {
    controller: 'notifyController',
    templateUrl: 'app/views/notifyForm.html'
  })
  .when('/settings',
  {
    controller: 'settingsController',
    templateUrl: 'app/views/settings.html',
  })
}]);
app.controller('settingsController', ['$scope', '$cookies', function($scope, $cookies) {

  function init () {
    $scope.key = $cookies.get('nexmo_api_key');
    $scope.secret = $cookies.get('nexmo_api_secret');
    $scope.from = $cookies.get('from');
  }

  init();

  $scope.saveSettings = function () {
    $cookies.put('nexmo_api_key', $scope.key);
    $cookies.put('nexmo_api_secret', $scope.secret);
    $cookies.put('from', $scope.from);
  }
  
}])
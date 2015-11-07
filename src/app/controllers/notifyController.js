app.controller('notifyController', ['$scope', '$cookies', 'smsService', 'contactsService', function($scope, $cookies, smsService, contactsService) {

  function init() {
    $scope.multipleSelect = {};
    $scope.multipleSelect.selectedContacts = [];
  }

  init();

  $scope.refreshContacts = function(startWithChars) {
    // Search Contact By first letters name
    if(startWithChars) {
      contactsService.searchContacts(startWithChars).success(function (contacts) {
        $scope.availableContacts = contacts;
      });
    }
  };

  var newSms = function (contact) {
    return {
      from: $cookies.get('from'),
      contact_id: contact.id,
      text: $scope.text,
      account : {
        key: $cookies.get('nexmo_api_key'),
        secret: $cookies.get('nexmo_api_secret'),
      }
    };
  }

  $scope.notify = function () {
    
    // send notification sms to contacts
    for (var i = 0; i < $scope.multipleSelect.selectedContacts.length; i++) {
      var contact = $scope.multipleSelect.selectedContacts[i],
      // instanciate sms
      sms = newSms(contact);
      smsService.sendSms(sms).success(function (data) {
        console.log(data);
      })
      .error(function (data) {
        console.log(data);
      });
    };
  }

}])
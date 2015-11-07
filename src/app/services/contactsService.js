app.service('contactsService', ['$http', 'API_URL', function($http, API_URL) {

  var contactsService = {},
  contactsEndpoint = API_URL + "contacts";

  contactsService.getContacts = function () {
    return $http.get(contactsEndpoint);
  }

  contactsService.searchContacts = function (startWithChars) {
    var params = { name:startWithChars };
    return $http.get(contactsEndpoint + '/search', {params: params}).success(function (response) {
      return response;
    });
  }

  return contactsService;

}])
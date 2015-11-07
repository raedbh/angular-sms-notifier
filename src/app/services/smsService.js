app.service('smsService', ['$http', 'API_URL', function($http, API_URL) {
  
  var smsService = {},
  smsEndpoint = API_URL + "sms";

  smsService.sendSms = function (sms) {
    return $http.post(smsEndpoint, sms);
  }

  return smsService;
}])
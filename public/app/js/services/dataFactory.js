app.factory('dataFactory', ['$http', function($http) {

    
    // This is our API route on our server
    var urlBase = '/api';

    // object to hold all factory methods
    var dataFactory = {};

    dataFactory.data = {
      event: {
        fullName: null,
        address: null,
        time: null,
        timer: 'test'
      },
      restaurants: null,
      options: [],
      contacts: [
        ['Bill', '+14356401931'], 
        ['Jawad', '+15102690993'],
        //'+15102690993',
        //'+19084157888'
        ],
    };

    // POST call to server API
    dataFactory.getRestaurantsByAddress = function (postData) {
        return $http.post(urlBase + '/restaurants', postData);
    };

    // GET call to server API, not currently used but left as example
    dataFactory.getVoting = function () {
        return $http.get(urlBase + '/voting');
    };

    // POST to server with users 3 choices and user name
    dataFactory.stageToFriends = function () {
        return $http.post(urlBase + '/stageToFriends', dataFactory.data);
    };

    // GET call to server from friend's webpage with the three choices
    dataFactory.friendGetsThreeChoices = function () {
        return $http.get(urlBase + '/getTreeChoices');
    };
    
    return dataFactory;
}]);
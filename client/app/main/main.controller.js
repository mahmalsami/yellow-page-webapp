'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [];
    document.getElementById("searchField").focus();
    
    $scope.search = function(userID) {
    	$scope.userID = userID;

			$http.get('/api/things').then(successCallback, errorCallback);

	    function successCallback(response){
	        $scope.awesomeThings = response.data;
	        if(response.data.length > 0 ){
	        	$location.path('/user-infos/').search({param: response.data[0].userID});
	        }else{
	        	alert("no NRIC found");
	        }
	    }

	    function errorCallback(error){
	        //error code
	    }

    }



    


  });

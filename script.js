// Code goes here

var MemberPage = angular.module('MemberPage', ['ngRoute']);

	MemberPage.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.memberName = 'Doriz Diaz Martinas';
		$scope.memberID = 'T123456789';
		$scope.Address = 'Doriz Diaz Martinas';
		$scope.PCPName = 'Frayna-Manlapaz, Christina F.';
		$scope.startDate = 'August 01,2012';
	});

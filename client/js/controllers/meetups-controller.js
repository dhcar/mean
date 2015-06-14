meanApp.controller('meetupsController', function($scope, $resource){

	var Meetup = $resource('/api/meetups');

	$scope.meetupsCount = 10;

	$scope.meetups = [
		{name:'mean sf developers'},
		{name:'other devs'}
	];

	$scope.createMeetup = function(){
		var meetup  = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save();
	};


});
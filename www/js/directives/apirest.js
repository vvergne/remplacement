var user = angular.module('app.user', ['ngResource']);
var userFactory = function($resource){
	return $resource('/api/user/:slug', { slug : '@slug' },
		{
			'update' : { method:'PUT' },
		});
};

user.factory('User', [ '$resource', userFactory ]);

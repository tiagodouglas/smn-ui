(function() {
	'use strict';

	angular
		.module('ui')
		.factory('grContextMenu', grContextMenu);

	grContextMenu.$inject = ['$rootScope'];

	function grContextMenu($rootScope) {
		var service = {
			closeAll: closeAll,
			eventBound: false
		};
		
		return service;

		function closeAll() {
			$rootScope.$broadcast('grContextMenu.close');
		}
	}
})();
(function() {
    'use strict';
    angular
        .module('maps')
        .config(MapsRoutes)

    // ===============================

    function Mapsoutes($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                views: {
                    'maps-tab': {
                        templateUrl: 'Carian/maps.html',
                        controller: 'mapsCtrl',
                        controllerAs: 'maps'
                    }
                }
            })
    }

})();
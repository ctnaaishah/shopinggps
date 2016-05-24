(function() {
    angular
        .module('ShoppingGPS')
        .config(routesConfig)
        .config(MapsRoutes)

    function routesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'tabs.html'
            })

            .state('tab.Menu', {
                url: '/Menu',
                views: {
                    'tab-Menu': {
                        controller: 'MenuCtrl',
                        controllerAs: 'menu',
                        templateUrl: 'Menu/templates/Menu.html'
                    }
                }
            })
            .state('tab.Carian', {
                url: '/Carian',
                views: {
                    'tab-Carian': {
                        controller: 'CarianCtrl',
                        templateUrl: 'Carian/templates/Carian.html'
                    }
                }
            })
            .state('tab.MuatNaik', {
                url: '/MuatNaik',
                views: {
                    'tab-MuatNaik': {
                        templateUrl: 'MuatNaik/templates/MuatNaik.html',
                        controller: 'MuatNaikCtrl',
                        controllerAs: 'barang',
                    }
                }
            })

            $urlRouterProvider.otherwise('tab/Menu');
    }

    function MapsRoutes($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                views: {
                    'maps-tab': {
                        templateUrl: 'Carian/templates/maps.html',
                        controller: 'mapsCtrl',
                        controllerAs: 'maps'
                    }
                }
            })
    }
})();
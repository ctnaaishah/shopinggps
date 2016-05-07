(function() {
    angular
        .module('ShoppingGPS')
        .config(routesConfig)

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
                        controller: 'MuatNaikCtrl',
                        'controllerAs': 'barang',
                        templateUrl: 'MuatNaik/templates/MuatNaik.html'
                    }
                }
            })

            $urlRouterProvider.otherwise('tab/Menu');
    }
})();
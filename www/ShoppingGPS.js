(function() {
    angular
        .module("ShoppingGPS", [
            "ionic",
            "ngResource",
            "ShoppingGPS.Menu",
            "ShoppingGPS.Carian",
            "ShoppingGPS.MuatNaik"
        ])
        
        .run(init)
        .factory("Database", Database);
        

    
    function init($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }

    function Database($resource) {
         //var url = 'http://192.168.43.193/shoppinggpsserver';
         var url = 'http://localhost/ShoppingGPSServer';

        return {

            login: function() {
                return $resource(url + '/login')
            },
    
            penjual: function() {
                return $resource(url + '/penjual')
            },
            barang: function() {
                return $resource(url + '/barang')
            }
        }
    }
})();
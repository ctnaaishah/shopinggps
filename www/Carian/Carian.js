(function() {
    angular
        .module("ShoppingGPS.Carian", [])
        .factory('CarianFactory', CarianFactory)

        .controller('CarianCtrl', CarianCtrl)

    function CarianCtrl(){}
    function CarianFactory() {
        return false;
    }

})();
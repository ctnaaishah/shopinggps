(function() {
    angular
        .module("ShoppingGPS.Carian", [])
        .factory('CarianFactory', CarianFactory)

        .controller('CarianCtrl', CarianCtrl)

    function CarianCtrl(Database){
        var vm = this;
        vm.barang = Database.barang().query();
        vm.penjual = Database.penjual().query();
    }
    function CarianFactory() {
        return false;
    }

})();
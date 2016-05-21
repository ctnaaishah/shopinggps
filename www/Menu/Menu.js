(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .factory('MenuFactory', MenuFactory)

        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database) {
        var vm = this;
        vm.barang = Database.barang().query();
    }
    function MenuFactory() {
        return false;
    }

})();
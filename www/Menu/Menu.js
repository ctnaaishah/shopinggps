(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .factory('MenuFactory', MenuFactory)

        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database) {
        var vm = this;
        vm.barang = Database.Barang().query();
    }
    function MenuFactory() {
        return false;
    }

})();
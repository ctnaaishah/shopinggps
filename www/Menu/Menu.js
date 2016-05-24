(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .factory('MenuFactory', MenuFactory)

        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database) {
        var menu = this;
        menu.data = Database;
        menu.barang = Database.barang().query(menu.data, function(res){
            console.log(res);
        });
    }
    function MenuFactory() {
        return false;
    }

})();
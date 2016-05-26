(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database) {
        var menu = this;
        menu.data = Database;
        menu.barang = Database.barang().query(menu.data, function(res){
            console.log(res);
        });
    }

})();
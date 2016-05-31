(function() {
    angular
        .module("ShoppingGPS.Carian", [])
        .controller('CarianCtrl', CarianCtrl)

    function CarianCtrl(Database){
        var carian                  = this;
        carian.data                 = Database;
        carian.senaraikeputusan     = senaraikeputusan;
        

        function senaraikeputusan() {
            carian.barang = Database.barang().query(carian.data, function(res){
            console.log(res);
        });    
        }

        
    }

})();
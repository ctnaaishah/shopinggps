(function() {
    angular
        .module("ShoppingGPS.MuatNaik", [])
        .controller('MuatNaikCtrl', MuatNaikCtrl)

        // =============================

    function MuatNaikCtrl(Database) {
        var barang = this;
        barang.data = {};
        barang.upload = upload;

        function upload() {
            Database.Barang().save(barang.data, function(res) {
                console.log(res)
            })
        }
    }

    //asdasdasdsad

    

})();
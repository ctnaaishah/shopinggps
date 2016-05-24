(function() {
    angular
        .module("ShoppingGPS.MuatNaik", [])
        .controller('MuatNaikCtrl', MuatNaikCtrl)
        

        // =============================

    function MuatNaikCtrl(Database, $ionicModal, $state, $scope) {
        var barang          = this;
        barang.data         = Database;
        barang.upload       = upload;
        barang.daftar       = daftar;
        barang.logmasuk     = logmasuk;
        barang.cancelLogin  = cancelLogin;
        barang.cancelDaftar = cancelDaftar;

        $ionicModal.fromTemplateUrl('MuatNaik/templates/LogMasuk.html', {
            scope: $scope,
            animation: 'slide-in-up'
        })
        .then(function(modal) {
            $scope.modal_login = modal;
            // Check for login status
            if (!sessionStorage.sudah_login) {
                $scope.modal_login.show();
            } 
        });

        $ionicModal.fromTemplateUrl('MuatNaik/templates/Daftar.html', {
            scope: $scope,
            animation: 'slide-in-up'
        })
        .then(function(modal) {
            $scope.modal_daftar = modal;
        });



        function upload() {
            Database.barang().save(barang.data, function(res) {
                if (res.success) {
                    alert(res.message)
                } else {
                    alert(res.message)
                }
            });
        }

        function daftar(){
            $scope.modal_daftar.show();

            Database.penjual().save(barang.data, function(res) {
                if (res.success) {
                    alert(res.message)
                    $scope.modal_daftar.hide();
                    $scope.modal_login.hide();                    
                    $state.go('tab.MuatNaik');
                } else {
                    alert(res.message)
                }
            });
        }

        function logmasuk(e){
            // Get username and password
            // Send to server
            // Server respons with success or fail
            Database.login().save(barang.data, function(res) {
                if(res.success){
                    sessionStorage.sudah_login = true;
                    $scope.modal_login.hide();
                } else {
                    alert(res.message)
                }
            });
        }

        function cancelLogin() {
            $scope.modal_login.hide();
            $state.go('tab.Menu');
        }

        function cancelDaftar() {
            $scope.modal_daftar.hide();
            $state.go('tab.MuatNaik');
        };

    }
})();
(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database, $ionicModal, $state, $scope) {
        var menu                = this;
        menu.data               = Database;
        menu.senarai            = senarai;
        menu.maklumatkedai      = maklumatkedai;
        menu.cancelmk           = cancelmk;

        $ionicModal.fromTemplateUrl('Carian/templates/maklumatkedai.html', {
            scope: $scope,
            animation: 'slide-in-up'
        })
        .then(function(modal) {
            $scope.modal_maklumatkedai=modal;
        });

        function senarai() {
            Database.barang().query(function(res){
            menu.barang = res;
            });    
        }

        function maklumatkedai() {
            $scope.modal_maklumatkedai.show();

            Database.penjual().query(function(res){
                menu.penjual = res;
            });
        }

        function cancelmk() {
            $scope.modal_maklumatkedai.hide();
            $state.go('tab.Menu');
        }

    }

})();
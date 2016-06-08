(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database, $ionicModal, $state, $scope, $ionicLoading, $compile) {
        var menu                = this;
        menu.data               = Database.barang().query();
        menu.senarai            = senarai();
        menu.maklumatkedai      = maklumatkedai;
        menu.cancelview         = cancelview;
        menu.navigasi           = navigasi;

        $ionicModal.fromTemplateUrl('Carian/templates/maklumatkedai.html', {
            scope: $scope,
            animation: 'slide-in-up'
        })
        .then(function(modal) {
            $scope.modal_maklumatkedai=modal;
        });

        $ionicModal.fromTemplateUrl('Carian/templates/maps.html', {
            scope:$scope,
            animation: 'slide-in-up'
        })
        .then(function(modal) {
            $scope.modal_maps=modal;
        });

        function senarai() {
            Database.barang().query(function(res){
                console.log(res);
            });
        }

        function maklumatkedai() {
            $scope.modal_maklumatkedai.show();

            Database.barang().query(function(res){
                console.log(res);
            });
        }

        function cancelview() {
            $scope.modal_maklumatkedai.hide();
            $state.go('tab.Menu');
        };

        function navigasi() {
            $scope.modal_maps.show();
            $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        }

    }

})();
(function() {
    angular
        .module("ShoppingGPS.Menu", [])
        .controller('MenuCtrl', MenuCtrl)

    function MenuCtrl(Database, $ionicModal, $state, $scope, $ionicLoading, $compile) {
        var menu                = this;
        menu.data               = Database;
        menu.senarai            = senarai;
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
            menu.barang = res;
            });    
        }

        function maklumatkedai() {
            $scope.modal_maklumatkedai.show();

            Database.penjual().query(function(res){
                menu.penjual = res;
            });
        }

        function cancelview() {
            $scope.modal_maklumatkedai.hide();
            $state.go('tab.Menu');
        };

        function navigasi() {
            function initialize() {
                var myLatlng = new google.maps.LatLng(43.07493, -89.381388);

                var mapOptions = {
                    center: myLatlng,
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById("map"), mapOptions);

                //Marker + infoWindow + angularjs compiled ng-Click

                var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";

                var compiled = $compile(contentString)($scope);

                var infoWindow = new google.maps.infoWindow({
                    content: compiled[0]
                });

                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    title: 'Uluru (Ayers Rock)'
                });

                google.maps.event.addListener(marker, 'click', function(){
                    infoWindow.open(map,marker);
                });

                $scope.map = map;                
            }

            google.maps.event.addDomListener(window, 'load', initialize);

            $scope.centerOnMe = function() {
                if(!$scope.map) {
                    return;
                }

                $scope.loading = $ionicLoading.show({
                    content: 'Getting current location...',
                    showBackdrop: false
                });

                navigator.geolocation.getCurrentPosition(function(pos){
                    $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                    $scope.loading.hide();
                }, function(error) {
                    alert('Unable to get location: '+ error.message);
                });
            };

            $scope.clickTest = function() {
                alert('Example of infoWindow with ng-click')
            };
        }

    }

})();
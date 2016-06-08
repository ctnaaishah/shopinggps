(function() {
    angular
        .module("ShoppingGPS.Carian", [])
        .controller('CarianCtrl', CarianCtrl)

    function CarianCtrl(Database){
        var carian                  = this;
        carian.data                 = Database;
        carian.senaraikeputusan     = senaraikeputusan;
        

        function senaraikeputusan($scope, $timeout, $ionicFilterBar) {
            var filterBarInstance;

            function getbarang () {
                var barang = [];
                for (var x = 1; x < 2000; x++) {
                barang.push({text: 'This is item number ' + x + ' which is an ' + (x % 2 === 0 ? 'EVEN' : 'ODD') + ' number.'});
                }
                $scope.barang = barang;
            }

        getbarang();

        $scope.showFilterBar = function () {
            filterBarInstance = $ionicFilterBar.show({
                barang: $scope.barang,
                update: function (filteredbarang, filterText) {
                    $scope.barang = filteredbarang;
                    if (filterText) {
                        console.log(filterText);
                    }
                }
            });
        };

        $scope.refreshbarang = function () {
            if (filterBarInstance) {
                filterBarInstance();
                filterBarInstance = null;
            }

            $timeout(function () {
                getbarang();
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        }; 
        
    }

})();
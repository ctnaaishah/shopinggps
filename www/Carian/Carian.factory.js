(function() {
    angular
        .module("ShoppingGPS.Carian", [])
        .factory(Carian, Carian);


        function Carian($resource) {
            return $resource(url + '/penjual'), {}
            changeStatus: { method: 'PUT' }
        });
    
})
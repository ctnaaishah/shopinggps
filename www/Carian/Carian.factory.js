(function() {
    angular
        .module("ShoppingGPS.Carian", [])
        .factory(Carian, Carian);


        function Carian($resource) {
            return $resource(url + '/penjual'), {}
            changeStatus: { method: 'PUT' },
            getAll: { method: 'GET', isArray: true },
            getOne: { method: 'GET', isArray: false }
        };
    
})
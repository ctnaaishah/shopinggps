(function() {
    angular
        .module("ShoppingGPS.MuatNaik", [])
        .factory('MuatNaikFactory', MuatNaikFactory)

        // .controller('MuatNaikCtrl', MuatNaikCtrl)

        // =============================


    function MuatNaikFactory($resource) {
        
        /*
            $resource akan menyediakan metod-metod berikut:
            .get()  = GET dengan respon {}
            .put()  = PUT dengan respon {}
            .save() = POST dengan respon {}
            .query()= GET dengan respon []
            .delete() = DELETE no respon.
    
        */

        return $resource('data/:filename', { 'filename': '' });

            
    }

    

})();
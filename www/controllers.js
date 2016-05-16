/*angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, $ionicPlatform, Map, Travel, User, $ionicHistory) {
  var map = Map.createMap('map-container');
  $scope.user = User;
  $scope.order = {to: {name:''}, from: {}, price: 0};

  //æ”¶å¬childå¹¿æ’­
  $rootScope.$on('travel.selected.to', function(e, data){
    $scope.order.to = data;
    //åˆ é™¤key
    delete $scope.order.to.$$hashKey;
    $scope.order.from = User.getBd09Point();
  });

  //ç›‘å¬rootå¹¿æ’­
  $scope.$on('user.changeLocation', function(){
    User.setMarkerToBaiduMap(map);
  });

  $scope.create = function(){
    console.log($scope.order);
    Travel.create($scope.order).then(function(order){
      //ä¸èƒ½è¿”å›ž
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $rootScope.goTo('order', {id: order.id}, {reload: true}, 'forward');
      $rootScope.quickNotify('We are trying to help you find the driver');
    }, function(error){
      $rootScope.quickNotify(error.message);
    })
  };
})

.controller('OrderCtrl', function($scope, Map, User, $rootScope) {
  var map = Map.createMap('order-map-container');

  //ç›‘å¬rootå¹¿æ’­
  $scope.$on('user.changeLocation', function(){
    User.setMarkerToBaiduMap(map);
  });

  $scope.cancel = function(){
    $rootScope.goTo('tab.dash', {}, {reload: true}, 'back');
  }
})

.controller('FindCtrl', function($scope, Chats) {
  $scope.$on('$ionicView.beforeEnter', function(e) {
    $scope.chats = Chats.all();
  });

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('FindDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.$on('$ionicView.beforeEnter', function(e) {
    $scope.chat = Chats.get($stateParams.chatId);
  });

})

.controller('AccountCtrl', function($scope, $state, $ionicViewService, User, $rootScope) {
  $scope.goLogin = function(){
    if(User.isGuest()){
      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go('tab.login');
    }
  };

  $scope.user = User.current();

  //å¦‚æžœå¹¿æ’­äº†ï¼Œæ›´æ–°ç”¨æˆ·ä¿¡æ¯
  $rootScope.$on('user.login', function(){
    $scope.user = User.current();
  });
})

.controller('LoginCtrl', function($scope, $rootScope, $ionicViewService, $state, User, $interval) {
  $scope.form = {
    mobile: '',
    code: ''
  };

  $scope.sms = {
    disabled: false,
    content: 'Send the verification code'
  };

  var configSecond = 10;
  var second = configSecond;

  var resetSms = function(){
    second = configSecond;
    $scope.sms.disabled = false;
    $scope.sms.content = 'Send the verification code';
  };

  $scope.sendSmsCode = function(e){
    $scope.$emit('user.login');

    if($scope.sms.disabled){
      return;
    }

    User.sendSmsCode($scope.form.mobile).then(function(){
      $scope.sms.disabled = true;
      $interval(function(){
        --second;
        $scope.sms.content = second + 'Resend second';
        if(second == 0){
          resetSms();
        }
      }, 1000, configSecond);
    }, function(error){
      $rootScope.quickNotify(error.message);
    });
  };

  $scope.login = function(){
    User.login($scope.form.mobile, $scope.form.code).then(function(){
      //æŽ§åˆ¶ä½ æŒ‰ä¸‹è¿”å›žé”®æ—¶ï¼Œè·³è½¬åˆ°åŽŸæ¥çš„é¡µé¢  è¿™å¯¹Loginé¡µé¢ä¸å¥½ å½“ç„¶æ˜¯éšä½ äº†
      $ionicViewService.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });

      $scope.$emit('user.login');

      $state.go('tab.account');
    }, function(error){
      $rootScope.quickNotify(error.message);
    });
  }
})

.controller('SearchCtrl', function($scope, $rootScope, Map, User) {
  $scope.$on('$ionicView.beforeEnter', function(){
    $scope.items = User.getUserPlaces();
    $scope.form = {place: ''};
  });

  $scope.search = function(){
    Map.getPlaces($scope.form.place, 'Batu Pahat').success(function(result){
      if(result.status == 0){
        $scope.items = result.results;
      }
    });
  };

  $scope.reset = function(){
    $scope.form.place = '';
    $scope.items = User.getUserPlaces();
  };

  $scope.selected = function(place){
    $scope.$emit('travel.selected.to', place);
    User.addUserPlace(place);
    $scope.reset();
    $rootScope.goBack();
  }
});

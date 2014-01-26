'use strict';

angular.module('angularApp')
  .controller('ProductionCtrl', function ($scope, $location, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var params = $location.search()
    

    var url = '/production';
    var option = {
        method: 'GET',
        url: url,
        data: params
    }

    $http.get(url, {cache: true, params: params}).
        success(function(data){
            $scope.p = data[0]
            $scope.preview = data[0].picture.src;
            console.log($scope.p)
        }).
        error(function(data){
            console.log(data); 
        })

    $scope.changePreview = function(alt){
        var url = '//dm.victoriassecret.com/product/404x539/' + alt + '.jpg'
        $scope.preview = url; 
    }
  });

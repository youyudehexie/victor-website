'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var cache = {};
    var type = $location.url();
    var url = '/category' + type;

    var rows = []
    $http.get(url, {cache: true}).
        success(function(data){
            var len = data.length;

            for(var i = 0; i < len; i++){
                rows.push(data.slice(i,i + 4)) 
                i +=3
            }
            $scope.rows = rows;
            console.log(rows);
        }).
        error(function(data){
            console.log(data); 
        })
  });

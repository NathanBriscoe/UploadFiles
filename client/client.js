/**
 * Created by NathanBriscoe on 3/1/16.
 */
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('formController', ['$scope', function($scope){
    $scope.submit = function(){
        Upload.upload({
            url: '/uploads',
            method: 'post',
            data: $scope.upload
        }).then(function(response){
            console.log(response.data);
            $scope.uploads.push(response.data);
            $scope.upload = {};
        })
    }
}]);
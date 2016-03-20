app.controller('MainController',
['$scope', function ($scope) {
    $scope.showPedidos = true;
    $scope.showEnderecos = false;
    $scope.showPerfil = false;
    
    $scope.showSectionPedidos = function () {
        $scope.showPedidos = true;
        $scope.showEnderecos = false;
        $scope.showPerfil = false;
    }
    $scope.showSectionEnderecos = function () {
        $scope.showPedidos = false;
        $scope.showEnderecos = true;
        $scope.showPerfil = false;
    }
    $scope.showSectionPerfil = function () {
        $scope.showPedidos = false;
        $scope.showEnderecos = false;
        $scope.showPerfil = true;
    }      
}]);
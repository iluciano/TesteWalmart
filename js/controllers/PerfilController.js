app.controller('PerfilController',
['$scope', function ($scope) {
    $scope.nome = 'Igor Luciano';
    $scope.telefone = '(11)98201-2392';
    $scope.email = 'igorluciano@igorluciano.com.br';
    $scope.cpf = '333.555.888-44';
    $scope.sexo = 'masculino';
    $scope.senha = '123456';
    $scope.dataNascimento = new Date('1980','06','10');
}]);
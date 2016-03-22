(function (){
    angular.module('myApp')
        .controller('EnderecoController',
        ['$scope', function ($scope) {
            $scope.enderecos =
            [
                {
                    codEndereco: 1,
                    identificacaoEndereco: 'Endereço Principal',
                    endereco: 'Rua: Paulo de Avelar, 652',
                    bairro: 'Parada Inglesa',
                    cep: '02243-010',
                    cidade: 'São Paulo',
                    estado: 'SP'
                },
                {
                    codEndereco: 2,
                    identificacaoEndereco: 'Endereço Comercial',
                    endereco: 'Rua: Henrique Ongari, 100',
                    bairro: 'Água Fria',
                    cep: '05037-150',
                    cidade: 'São Paulo',
                    estado: 'SP'
                }
            ]    
        }]);
})();
(function (){
    angular.module('myApp')
        .controller('PedidosController',
        ['$scope', function ($scope) {
            $scope.pedidos =
            [
                {
                    numeroPedido: 1000,
                    produtosPedido: [
                        {
                            nomeProduto: 'Refrigerador / Geladeira Electrolux Frost Free DF36A Branco 310L',
                            precoProduto: 1480,
                            codProduto: 'Cod.(1000)',
                            imageProduto: 'images/1000.png',
                            qtdProduto: 1
                        },
                        {
                            nomeProduto: 'Lavadora de Roupas Brastemp Ative 9Kg BWL09 Branca',
                            precoProduto: 1180,
                            codProduto: 'Cod.(1003)',
                            imageProduto: 'images/1003.png',
                            qtdProduto: 1         
                        }                
                    ],
                    dataCompra: new Date('2016', '01', '24') 
                },
                {
                    numeroPedido: 1001,
                    produtosPedido: [
                        {
                            nomeProduto: 'Fogão de Piso Continental 5 Bocas Calore Inox Queimador Super Chama e Forno com 97 Litros',
                            precoProduto: 1050,
                            codProduto: 'Cod.(1001)',
                            imageProduto: 'images/1001.png',
                            qtdProduto: 2                    

                        }
                    ],
                    dataCompra: new Date('2016', '02', '24')
                },
                {
                    numeroPedido: 1002,
                    produtosPedido: [
                        {
                            nomeProduto: 'Micro-ondas Brastemp Clean BMC20 20 Litros Cinza',
                            precoProduto: 330,
                            codProduto: 'Cod.(1002)',
                            imageProduto: 'images/1002.png',
                            qtdProduto: 1
                        }
                    ],
                    dataCompra: new Date('2016', '03', '11')
                },
                {
                    numeroPedido: 1003,
                    produtosPedido: [
                        {
                            nomeProduto: 'Lavadora de Roupas Brastemp Ative 9Kg BWL09 Branca',
                            precoProduto: 1180,
                            codProduto: 'Cod.(1003)',
                            imageProduto: 'images/1003.png',
                            qtdProduto: 1
                        }
                    ],
                    dataCompra: new Date('2016', '03', '19')
                }
            ]   
        }]);
})();
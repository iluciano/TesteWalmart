app.controller('PedidosController',
['$scope', function ($scope) {
    $scope.pedidos =
	[
		{
		    numeroPedido: 1001,
            nomeProduto: 'Refrigerador / Geladeira Electrolux Frost Free DF36A Branco 310L',
		    precoProduto: 1480,
		    codProduto: 'Cod.(1000)',
		    imageProduto: 'images/1000.png',
            dataCompra: new Date('2016', '01', '24')
		},
		{
            numeroPedido: 1002,
		    nomeProduto: 'Fogão de Piso Continental 5 Bocas Calore Inox Queimador Super Chama e Forno com 97 Litros',
		    precoProduto: 1050,
		    codProduto: 'Cod.(1001)',
		    imageProduto: 'images/1001.jpg',
            dataCompra: new Date('2016', '02', '24')
		},
		{
            numeroPedido: 1003,
		    nomeProduto: 'Micro-ondas Brastemp Clean BMC20 20 Litros Cinza',
		    precoProduto: 330,
		    codProduto: 'Cod.(1002)',
		    imageProduto: 'images/1002.png',
            dataCompra: new Date('2016', '03', '11')
		},
		{
            numeroPedido: 1004,
		    nomeProduto: 'Lavadora de Roupas Brastemp Ative 9Kg BWL09 Branca',
		    precoProduto: 1180,
		    codProduto: 'Cod.(1003)',
		    imageProduto: 'images/1003.jpg',
            dataCompra: new Date('2016', '03', '19')
        }
	]   
}]);
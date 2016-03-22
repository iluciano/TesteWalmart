(function () {
    angular.module('myApp')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];

    function routeConfig($routeProvider, $locationProvider) {

        $routeProvider.when('/pedidos', {
            templateUrl: './views/pedidos.html',
            controller: 'PedidosController'
        }).when('/enderecos', {
            templateUrl: './views/enderecos.html'
        }).when('/perfil', {
            templateUrl: './views/perfil.html'
        });

        $locationProvider.html5Mode(false);

    }
})();
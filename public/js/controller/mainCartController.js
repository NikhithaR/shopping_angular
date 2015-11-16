myCart.controller('cartControl', ['$scope', "loadimg", '$location','$rootScope' ,function ($scope, loadimg, $location ,$rootScope) {
    "use strict";
    $scope.itemObjects = loadimg.items;
    
    
        
$scope.$on('itemClicked', function (event, index) {
        loadimg.itemClicked = parseInt(index, 10);
        $location.path('/about');
    });

    
}]);


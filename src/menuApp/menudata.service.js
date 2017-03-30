/**
 * Created by Dmitriy on 30.03.2017.
 */
(function () {
    'use strict';
    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            console.log(1);
            var ALL_CATEGORY_URL = 'https://davids-restaurant.herokuapp.com/categories.json';
            return $http({url: ALL_CATEGORY_URL});
        }

        service.getItemsForCategory = function (categoryShortName) {
            console.log(2);
            var CATEGORY_URL = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=';
            return $http({url: CATEGORY_URL + categoryShortName});
        };

        return service;
    };
})();
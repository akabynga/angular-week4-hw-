/**
 * Created by Dmitriy on 30.03.2017.
 */
(function () {
    'use strict';
    angular.module('data')
        .controller("CategoriesListController", CategoriesListController);

    CategoriesListController.$inject = ['items'];
    function CategoriesListController(items) {
        var categoryList = this;
        categoryList.items = items.data;
    };
})();
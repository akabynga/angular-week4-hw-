/**
 * Created by Dmitriy on 30.03.2017.
 */
(function () {
    'use strict';
    angular.module('data')
        .controller("CategoryItemsListController", CategoryItemsListController);

    CategoryItemsListController.$inject = ['items'];
    function CategoryItemsListController(items) {
        var categoryItemsList = this;
        categoryItemsList.items = items.data.menu_items;
        categoryItemsList.category = items.data.category;
    };
})();
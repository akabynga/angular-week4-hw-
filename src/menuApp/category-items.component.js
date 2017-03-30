/**
 * Created by Dmitriy on 30.03.2017.
 */
(function () {
    'use strict';
    angular.module('data')
        .component('categoryItemsList', {
            templateUrl: 'src/menuApp/templates/category-items-list.template.html',
            bindings: {
                items: '<'
            }
        });
})();
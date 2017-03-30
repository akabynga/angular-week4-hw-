/**
 * Created by Dmitriy on 30.03.2017.
 */


(function () {
    'use strict';
    angular.module('data')
        .component('categoriesList', {
            templateUrl: 'src/menuApp/templates/category-list.template.html',
            bindings: {
                items: '<'
            }
        });
})();
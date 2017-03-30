/**
 * Created by Dmitriy on 30.03.2017.
 */
(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/menuApp/templates/home.template.html'
            })

            // Premade list page
            .state('categoryList', {
                url: '/category-list',
                templateUrl: 'src/menuApp/templates/main-category-list.template.html',
                controller: 'CategoriesListController as categoryList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('categoryItemsList', {
                url: '/category-items/{categoryShortName}',
                templateUrl: 'src/menuApp/templates/main-category-items-list.template.html',
                controller: 'CategoryItemsListController as categoryItemsList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            });
    }

})();


var elisabeth = angular.module("elisabeth", ['ngRoute']);
elisabeth.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "SimpleController",
        templateUrl: "partials/portfolio1.html"
    })
    .when("/portfolio1", {
        controller: "SimpleController",
        templateUrl: "partials/portfolio1.html"
    })
    .when("/portfolio2",
         {
        controller: "SimpleController",
        templateUrl: "partials/portfolio2.html"
    })
    .when("/35mm",
         {
        controller: "SimpleController",
        templateUrl: "partials/35mm.html"
    })
    .when("/about",
         {
        controller: "SimpleController",
        templateUrl: "partials/about.html"
    })
    .when("/contact",
         {
        controller: "SimpleController",
        templateUrl: "partials/contact.html"
    })
})

elisabeth.config(function ($locationProvider){
    $locationProvider
    .hashPrefix("");
})
// This is the navbar directive file
// navbar is used on every state

angular
    .module('toDoList.component.navbar')
    .directive('navbar', Navbar);

function Navbar() {
    return {
        restrict: 'E', // directive is an element
        scope: {
            navData: '@' // one way binding
        },
        templateUrl: '/toDoList/features/components/navbar/navbar.html',
        controller: NavbarCtrl, // the function for the controller
        controllerAs: 'NavbarVM', // alias for the controller namespace
        bindToController: true // needed for aliases in directives
    };
}

function NavbarCtrl() {
    var vm = this;
}
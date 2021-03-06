// this is the route file for our feature that creates a new task

angular
    .module('toDoList.create')
    .config(createConfig);

function createConfig($stateProvider) {

    $stateProvider.state({
        name: 'create',
        url: '/create',
        templateUrl: '/toDoList/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
    
    });
}
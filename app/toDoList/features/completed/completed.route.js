// this is the route file for our feature that lists all the completed tasks

angular
    .module('toDoList.completed')
    .config(completedConfig);

function completedConfig($stateProvider) {

    $stateProvider.state({
        name: 'completed',
        url: '/completed',
        templateUrl: '/toDoList/features/completed/completed.html',
        controller: 'CompletedCtrl',
        controllerAs: 'CompletedVM',
    });
}
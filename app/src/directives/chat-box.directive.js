(function () {
    angular.module('chatApp').directive('chatBox', () => {
        return {
            restrict: 'E',
            templateUrl: '/src/views/chat-box.html'
        };
    });
}());

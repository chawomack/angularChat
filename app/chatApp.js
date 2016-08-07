// Chat App Component

chatAppCtrl.$inject = ['$scope', '$timeout'];

angular.module('App').component('chatApp', {
    template: `
        <div ng-repeat="msg in $ctrl.messages">
            <chat-bubble message="msg" ng-class="{'not-floating' : msg.loading, 'floating': !msg.loading, sender:           msg.sender, receiver: !msg.sender}"></chat-bubble>
        </div>
        <chat-input on-update="$ctrl.updateList(message, loading, time)"></chat-input>
    `,
    controller: chatAppCtrl
});


function chatAppCtrl($scope, $timeout) {
    this.messages = [{message: 'hello', loading: false, sender: true, time: new Date()}];
    this.updateList = function(message, loading, time) {
        var _this = this;
        var index = this.messages.length;
        this.messages.push({message: message, loading: loading, time: time});
        $timeout(function(){
            _this.messages[index].loading = false;
        }, 10)
    }
}


// Chat Input Component 

angular.module('App').component('chatInput', {
    template: `
                <input type="text" ng-model="$ctrl.message" ng-keyup="$event.keyCode == 13 && $ctrl.sendMessage()">
                <span ng-show="$ctrl.message != ''" class="clear-input">&#10005</span>     
              `,
    bindings: { onUpdate: '&'},
    controller: chatInputCtrl
});


function chatInputCtrl() {
    this.message = "";
    this.sendMessage = function () {
        this.onUpdate({message: this.message, loading: true, time: new Date()});
        this.message = "";
    }
}

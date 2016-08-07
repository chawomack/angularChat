// Chat Message Bubble Component 

angular.module('App').component('chatBubble', {
    template: `<div>{{$ctrl.message.message}}</div> 
               <div class="time">{{ $ctrl.formatTime($ctrl.message.time) }}</div>
              `,
    bindings: {message: '<'},
    controller: chatBubbleCtrl
});


function chatBubbleCtrl() {
    this.formatTime = function(time) {
        var amPM = time.getHours() < 12 ? "AM" : "PM";
        var hours = time.getHours() % 12 == 0 ? 12 : time.getHours() % 12;
        var mins = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        return hours + ":" + mins + " " + amPM;
    }
}
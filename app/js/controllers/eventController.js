(function (){
    'use strict';

     var controllerId = 'eventController';

     angular
     .module('eventsApp')
     .controller(controllerId, eventController);



     function eventController(){

         var vm = this;

         vm.event = {
            name: 'Time To Derp',
            date: '1/1/2018',
            time:'4:20 PM',
            location:
            {
                address: 'Google Headquarters',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: '/img/hipster-kitty.png'

     }
}




})();

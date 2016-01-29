(function (){
    'use strict';

     var controllerId = 'eventController';

     angular
     .module('eventsApp')
     .controller(controllerId, eventController);



     function eventController(){

         var vm = this;

         vm.event = {
            name: 'Derp'

        };


     }





})();

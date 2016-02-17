(function(){
'use strict';

var controllerId = 'editEventController';

angular
  .module('eventsApp')
  .controller (controllerId,editEventController);

  function editEventController(){
    var vm = this;
    vm.saveEvent = saveEvent;
    vm.cancelEdit = cancelEdit;

    function saveEvent(event){
      window.alert('event ' + vm.event.name + ' saved!');
    };

    function cancelEdit(event){
      vm.event.name = '';
      vm.event.date = '';
      vm.event.time = '';
      vm.event.location = '';
      vm.event.city = '';
      vm.event.state = '';
      vm.event.imageUrl = '';
    };


  }

})();

(function() {
  'use strict';

  var controllerId = 'eventController';

  angular
    .module('eventsApp')
    .controller(controllerId, eventController);



  function eventController() {

    var vm = this;
    vm.upVoteSession = upVoteSession;
    vm.downVoteSession = downVoteSession;
    vm.sortOrder =  'name';

    vm.event = {
      name: 'Time To Derp',
      date: '1/1/2018',
      time: '4:20 PM',
      location: {
        address: 'Dirty\'s Street Corner',
        city: 'Portland',
        state: 'OR'
      },
      imageUrl: '/img/hipster-kitty.png',
      sessions: [{
        name: 'Hobo Fighting',
        creatorName: 'Pat Smear',
        duration: 1,
        level: 'L33T',
        abstract: 'Derp dem vagrants to California!',
        upVoteCount: 3

      }, {
        name: 'Radon Testing',
        creatorName: 'Ben Dover',
        duration: 2,
        level:'amateur',
        abstract: 'breath till you can\'t breathe no mo\'',
        upVoteCount: 2
      }, {
        name: 'Bernie Sanders Moshing',
        creatorName: 'Jack Mehoff',
        duration: 4,
        level: 'space cadet',
        abstract: 'feel the rug burn',
        upVoteCount: 35
      }]

    }

    function upVoteSession (session)
    {
        session.upVoteCount++;
    };

    function downVoteSession (session)
    {
        session.upVoteCount--;
    };


  }




})();

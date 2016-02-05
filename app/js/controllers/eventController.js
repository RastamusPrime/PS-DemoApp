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

    vm.event = {
      name: 'Time To Derp',
      date: '1/1/2018',
      time: '4:20 PM',
      location: {
        address: 'Dirtys Street Corner',
        city: 'Portland',
        state: 'OR'
      },
      imageUrl: '/img/hipster-kitty.png',
      sessions: [{
        name: 'Hobo Fighting',
        creatorName: 'Pat Smear',
        duration:'.69hrs',
        level: 'L33T',
        abstract: 'Derp dem vagrants to California!',
        upVoteCount: 3

      }, {
        name: 'Radon Testing',
        creatorName: 'Ben Dover',
        duration: 'it done, when i say it done',
        level:'amateur',
        abstract: 'breath till you can\'t breathe no mo\'',
        upVoteCount: 2
      }, {
        name: 'Bernie Sanders Moshing',
        creatorName: 'Jack Mehoff',
        duration: 'one lsd trip',
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

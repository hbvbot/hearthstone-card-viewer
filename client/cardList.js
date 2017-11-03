angular.module('app')
  .component('list', {
    bindings: {
      cards: '<',
      img: '<'
    },
    controller: function() {
    },
    template:
    `
    <span ng-repeat="card in $ctrl.cards">
      <img ng-src="{{card[$ctrl.img]}}">
    </span>
    `
  })

angular.module('app')
  .component('list', {
    bindings: {
      cards: '<'
    },
    template:
    `
    <span ng-repeat="card in $ctrl.cards">
      <img ng-src="{{card.img}}">
    </span>
    `
  })

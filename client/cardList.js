angular.module('app')
  .component('list', {
    bindings: {
      cards: '<',
      img: '<'
    },
    template:
    `
    <span ng-repeat="card in $ctrl.cards">
      <img class="resize" ng-src="{{card[$ctrl.img]}}" onerror="this.style.display='none'">
    </span>
    `
  })

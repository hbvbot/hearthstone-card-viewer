angular.module('app')
  .component('list', {
    bindings: {
      cards: '<',
      img: '<'
    },
    template:
    `
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');" ng-repeat="card in $ctrl.cards">
      <div class="flipper">
        <div class="front">
          <img class="resize" ng-src="{{card[$ctrl.img]}}">
        </div>
        <div class="back">
          <img class="resize" ng-src="http://wow.zamimg.com/images/hearthstone/backs/original/Card_Back_Default.png">
        </div>
      </div>
    </div>
    `
  })

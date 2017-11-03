angular.module('app', [])
  .component('main', {
    controller: function($http) {
      this.cards = [];
      this.post = (className, cost) => {
        console.log(className)
        console.log(cost)
        console.log('REQ SENT')
        $http({
          method: 'POST',
          url: 'http://localhost:3000/hs',
          data: { name: className, cost: cost}
        }).then((result) => {
          console.log(result)
          this.cards = [];
          for (let i = 0; i < result.data.length; i++) {
            if(result.data[i].cost) {
              this.cards.push(result.data[i]);
            }
          }
        })
      };
    },
    template: `<div><h1>Hearthstone Cards</h1>
    <select name="class" ng-model="data.class" ng-change="$ctrl.post(data.class)">
      <option value="Druid">Druid</option>
      <option value="Hunter">Hunter</option>
      <option value="Mage">Mage</option>
      <option value="Paladin">Paladin</option>
      <option value="Priest">Priest</option>
      <option value="Rogue">Rogue</option>
      <option value="Shaman">Shaman</option>
      <option value="Warlock">Warlock</option>
      <option value="Warrior">Warrior</option>
    </select>
    <select name="cost" ng-model="data.cost" ng-change="$ctrl.post(data.class, data.cost)">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <br><br>
    <list cards="$ctrl.cards" cost="data.cost"></list>
    </div>`,
  })

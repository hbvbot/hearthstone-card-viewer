angular.module('app', [])
  .component('main', {
    controller: function($http) {
      this.cards = [];
      this.post = (input) => {
        console.log(input)
        console.log('REQ SENT')
        $http({
          method: 'POST',
          url: 'http://localhost:3000/hs',
          data: { name: input}
        }).then((result) => {
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
      <option value="Neutral">Neutral</option>
      <option value="Druid">Druid</option>
      <option value="Hunter">Hunter</option>
      <option value="Mage">Mage</option>
      <option value="Paladin">Paladin</option>
      <option value="Priest">Priest</option>
      <option value="Rogue">Rogue</option>
      <option value="Shaman">Shaman</option>
      <option value="Warlock">Warlock</option>
      <option value="Warrior">Warrior</option>
      <option value="Death Knight">Death Knight</option>
    </select>
    <br><br>
    <button ng-click="$ctrl.post()"></button>
    <list cards="$ctrl.cards"></list>
    </div>`,
  })

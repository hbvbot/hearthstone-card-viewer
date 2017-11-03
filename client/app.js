angular.module('app', [])
  .component('main', {
    controller: function($http) {
      this.cards = [];
      this.post = () => {
        console.log('REQ SENT')
        $http({
          method: 'POST',
          url: 'http://localhost:3000/hs',
        }).then((result) => {
          console.log('===========', result.data)
          for (let i = 0; i < result.data.length; i++) {
            if(result.data[i].cost) {
              this.cards.push(result.data[i]);
            }
          }
        })
      };
    },
    template: `<div><h1>Hearthstone Cards</h1>
    <select>
      <option value="volvo">Neutral</option>
      <option value="saab">Druid</option>
      <option value="mercedes">Hunter</option>
      <option value="audi">Mage</option>
      <option value="volvo">Paladin</option>
      <option value="saab">Priest</option>
      <option value="mercedes">Rogue</option>
      <option value="mercedes">Shaman</option>
      <option value="audi">Warlock</option>
      <option value="mercedes">Warrior</option>
      <option value="mercedes">Death Knight</option>
    </select>
    <br><br>
    <button ng-click="$ctrl.post()"></button>
    <list cards="$ctrl.cards"></list>
    </div>`,
  })

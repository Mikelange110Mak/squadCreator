<template>
  <div class="wrapper">
    <header class="header">
      <section class="header__left">Собери свой состав</section>
      <section class="header__right">тут чето да будет</section>
    </header>
    <main class="main">
      <div class="team">
        <div class="team__body">
          <section class="team__first-section">
            <div class="team__gk players">
              <p class="team__name">{{ selectedPlayer.gk.title }}<img class="team__flag" :src="selectedPlayer.gk.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.gk.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.gk.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevGk()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextGk()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>
          <section class="team__second-section">
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def.title }} <img class="team__flag" :src="selectedPlayer.def.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.def.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.def.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef()"  class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def2.title }} <img class="team__flag" :src="selectedPlayer.def2.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.def2.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.def2.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef2()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef2()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def3.title }} <img class="team__flag" :src="selectedPlayer.def3.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.def3.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.def3.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef3()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef3()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def4.title }}<img class="team__flag" :src="selectedPlayer.def4.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.def4.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.def4.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef4()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef4()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>
          <section class="team__third-section">
            <div class="team__dm players">
              <p class="team__name">{{ selectedPlayer.mid.title }}<img class="team__flag" :src="selectedPlayer.mid.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.mid.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.mid.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevMid()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextMid()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__dm players">
              <p class="team__name">{{ selectedPlayer.mid2.title }}<img class="team__flag" :src="selectedPlayer.mid2.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.mid2.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.mid2.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevMid2()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextMid2()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__dm players">
              <p class="team__name">{{ selectedPlayer.mid3.title }}<img class="team__flag" :src="selectedPlayer.mid3.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.mid3.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.mid3.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevMid3()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextMid3()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>
          <section class="team__fourth-section">
            <div class="team__atc players">
              <p class="team__name">{{ selectedPlayer.atc.title }}<img class="team__flag" :src="selectedPlayer.atc.country" alt=""></p> 
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.atc.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.atc.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevAtc()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextAtc()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__atc players">
              <p class="team__name">{{ selectedPlayer.atc2.title }}<img class="team__flag" :src="selectedPlayer.atc2.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.atc2.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.atc2.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevAtc2()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextAtc2()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__atc players">
              <p class="team__name">{{ selectedPlayer.atc3.title }}<img class="team__flag" :src="selectedPlayer.atc3.country" alt=""></p>
              <div class="team__img">
                <img class="team__pic" :src="selectedPlayer.atc3.src" title="gk">
              </div>
              <p class="team__cost">{{ selectedPlayer.atc3.cost }}€</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevAtc3()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextAtc3()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="cart">
        <div class="cart__body">
          <div class="cart__button">
            <button v-on:click="addToCart()">Расчитать Стоимость</button>
          </div>
          <div class="cart__result">
            <p v-for="(team, index) in cart" :key="index">
              <span>{{ team.cost }}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
    <footer>Футер</footer>
  </div>
</template>

<script>
import players from '../data/players'

function getPreviousValidIndex(index,lenght){
const depricatedIndex = index-1
return depricatedIndex<0?lenght-1:depricatedIndex
}

function getNextValidIndex(index,lenght){
const incrementedIndex = index+1
return incrementedIndex>lenght-1?0:incrementedIndex
}

export default {
  name: 'StartPage',
  data() {
    return {
      players,
      cart: [],
      selectedIndexGk: 0,
      selectedIndexDef:7,
      selectedIndexDef2:6,
      selectedIndexDef3:8,
      selectedIndexDef4:3,
      selectedIndexMid:3,
      selectedIndexMid2:0,
      selectedIndexMid3:6,
      selectedIndexAtc:3,
      selectedIndexAtc2:5,
      selectedIndexAtc3:8
    };
  },
  computed:{
    selectedPlayer(){
      return{
        gk:players.gk[this.selectedIndexGk],
        def:players.def[this.selectedIndexDef],
        def2:players.def[this.selectedIndexDef2],
        def3:players.def[this.selectedIndexDef3],
        def4:players.def[this.selectedIndexDef4],
        mid:players.mid[this.selectedIndexMid],
        mid2:players.mid[this.selectedIndexMid2],
        mid3:players.mid[this.selectedIndexMid3],
        atc:players.atc[this.selectedIndexAtc],
        atc2:players.atc[this.selectedIndexAtc2],
        atc3:players.atc[this.selectedIndexAtc3]
      }
    }
  },
  methods:{
    addToCart(){
      const team = this.selectedPlayer
      const cost =  team.gk.cost +
                    team.def.cost +
                    team.def2.cost +
                    team.def3.cost +
                    team.def4.cost +
                    team.mid.cost +
                    team.mid2.cost +
                    team.mid3.cost +
                    team.atc.cost +
                    team.atc2.cost +
                    team.atc3.cost;
      this.cart.push(Object.assign({}, team, {cost}))
    },
    selectPrevGk(){
      this.selectedIndexGk = getPreviousValidIndex(this.selectedIndexGk, players.gk.length)
    },
    selectNextGk(){
      this.selectedIndexGk = getNextValidIndex(this.selectedIndexGk, players.gk.length)
    },
    selectPrevDef(){
      this.selectedIndexDef=getPreviousValidIndex(this.selectedIndexDef, players.def.length)
    },
    selectNextDef(){
      this.selectedIndexDef = getNextValidIndex(this.selectedIndexDef, players.def.length)
    },
    selectPrevDef2(){
      this.selectedIndexDef2 = getPreviousValidIndex(this.selectedIndexDef2, players.def.length)
    },
    selectNextDef2(){
      this.selectedIndexDef2 = getNextValidIndex(this.selectedIndexDef2, players.def.length)
    },
    selectPrevDef3(){
      this.selectedIndexDef3 = getPreviousValidIndex(this.selectedIndexDef3, players.def.length)
    },
    selectNextDef3(){
      this.selectedIndexDef3 = getNextValidIndex(this.selectedIndexDef3, players.def.length)
    },
    selectPrevDef4(){
      this.selectedIndexDef4 = getPreviousValidIndex(this.selectedIndexDef4, players.def.length)
    },
    selectNextDef4(){
      this.selectedIndexDef4 = getNextValidIndex(this.selectedIndexDef4, players.def.length)
    },
    selectPrevMid(){
      this.selectedIndexMid = getPreviousValidIndex(this.selectedIndexMid, players.mid.length)
    },
    selectNextMid(){
      this.selectedIndexMid = getNextValidIndex(this.selectedIndexMid, players.mid.length)
    },
    selectPrevMid2(){
      this.selectedIndexMid2=getPreviousValidIndex(this.selectedIndexMid2, players.mid.length)
    },
    selectNextMid2(){
      this.selectedIndexMid2 = getNextValidIndex(this.selectedIndexMid2, players.mid.length)
    },
    selectPrevMid3(){
      this.selectedIndexMid3 = getPreviousValidIndex(this.selectedIndexMid3, players.mid.length)
    },
    selectNextMid3(){
      this.selectedIndexMid3 = getNextValidIndex(this.selectedIndexMid3, players.mid.length)
    },
    selectPrevAtc(){
      this.selectedIndexAtc = getPreviousValidIndex(this.selectedIndexAtc, players.atc.length)
    },
    selectNextAtc(){
      this.selectedIndexAtc = getNextValidIndex(this.selectedIndexAtc, players.atc.length)
    },
    selectPrevAtc2(){
      this.selectedIndexAtc2 = getPreviousValidIndex(this.selectedIndexAtc2, players.atc.length)
    },
    selectNextAtc2(){
      this.selectedIndexAtc2 = getNextValidIndex(this.selectedIndexAtc2, players.atc.length)
    },
    selectPrevAtc3(){
      this.selectedIndexAtc3 = getPreviousValidIndex(this.selectedIndexAtc3, players.atc.length)
    },
    selectNextAtc3(){
      this.selectedIndexAtc3 = getNextValidIndex(this.selectedIndexAtc3, players.atc.length)
    }
  }
}

</script>

<style scoped>
.wrapper{
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #373b44, #4286f4);
}
main{
  flex: 1 1 auto;
  padding: 10px 0;
}
.header{
  display: flex;
  padding: 8px 5px;
  justify-content: space-between;
  background-color: #ffffff25;
}
.header__left{
  color: #ffffff;
  font-size: 22px;
}
.team{
  padding: 5px;
  margin-bottom: 50px;
}
.team__body section{
  display: flex;
  flex: 0 1 100%;
  gap: 120px;
  justify-content: center;
}
.team__body section:last-of-type{
  justify-content: space-evenly;
}
.team__body{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
}
.team__name{
  display: flex;
  align-items: center;
  background-color: #92969628;
  text-align: center;
  font-size: 16px;
}
.team__cost{
  font-size: 15px;
  color: #071b0d;
}
.players{
  padding: 5px;
  display: flex;
  flex: 0 1 10%;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #3333333f;
  border-radius: 9px;
  align-items: center;
  background: linear-gradient(to left, #eacda3, #d6ae7b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.team__selectors{
  display: flex;
  justify-content: center;
  gap: 40px;
  
}
.team__selectors button{
  width: 16px;
  height: 16px;
  cursor: pointer;
  border-radius: 4px;
}
.team__img{
  flex: 1 1 auto;
}
.team__pic{
  width: 100px;
}
.team__flag{
  width: 15px;
  margin-left: 3px;
}
.cart{
  width: 100%;
  padding: 5px 0px;
  background-color: #28315036;
}
.cart__body{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 130px;
}
.cart__button button{
  font-family: 'Marmelad', sans-serif;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  padding: 8px 17px;

  background-image: linear-gradient(to right, #485563 0%, #29323c  51%, #485563  100%);
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;              
}
.cart__button button:hover{
  background-position: right center;
}
.low-price::first-letter{
  color: rgb(170, 6, 6);
}
</style>

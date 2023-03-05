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
              <p class="team__name">{{ selectedPlayer.gk.title }}</p>
              <img class="team__flag" :src="selectedPlayer.gk.country" alt="">
              <img class="team__pic" :src="selectedPlayer.gk.src" title="gk">
              <p class="team cost">{{ selectedPlayer.gk.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevGk()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextGk()" class="next-selector">&#9658;</button>
              </div>
              
            </div>
          </section>
          <section class="team__second-section">
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def.title }}</p>
              <img class="team__flag" :src="selectedPlayer.def.country" alt="">
              <img class="team__pic" :src="selectedPlayer.def.src" title="gk">
              <p class="team cost">{{ selectedPlayer.def.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef()"  class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def2.title }}</p>
              <img class="team__flag" :src="selectedPlayer.def2.country" alt="">
              <img class="team__pic" :src="selectedPlayer.def2.src" title="gk">
              <p class="team cost">{{ selectedPlayer.def2.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef2()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef2()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def3.title }}</p>
              <img class="team__flag" :src="selectedPlayer.def3.country" alt="">
              <img class="team__pic" :src="selectedPlayer.def3.src" title="gk">
              <p class="team cost">{{ selectedPlayer.def3.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef3()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef3()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__def players">
              <p class="team__name">{{ selectedPlayer.def4.title }}</p>
              <img class="team__flag" :src="selectedPlayer.def4.country" alt="">
              <img class="team__pic" :src="selectedPlayer.def4.src" title="gk">
              <p class="team cost">{{ selectedPlayer.def4.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevDef4()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextDef4()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>
          <section class="team__third-section">
            <div class="team__dm players">
              <p class="team__name">{{ selectedPlayer.mid.title }}</p>
              <img class="team__flag" :src="selectedPlayer.mid.country" alt="">
              <img class="team__pic" :src="selectedPlayer.mid.src" title="gk">
              <p class="team cost">{{ selectedPlayer.mid.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevMid()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextMid()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__dm players">
              <p class="team__name">{{ selectedPlayer.mid2.title }}</p>
              <img class="team__flag" :src="selectedPlayer.mid2.country" alt="">
              <img class="team__pic" :src="selectedPlayer.mid2.src" title="gk">
              <p class="team cost">{{ selectedPlayer.mid2.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevMid2()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextMid2()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__dm players">
              <p class="team__name">{{ selectedPlayer.mid3.title }}</p>
              <img class="team__flag" :src="selectedPlayer.mid3.country" alt="">
              <img class="team__pic" :src="selectedPlayer.mid3.src" title="gk">
              <p class="team cost">{{ selectedPlayer.mid3.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevMid3()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextMid3()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>
          <section class="team__fourth-section">
            <div class="team__atc players">
              <p class="team__name">{{ selectedPlayer.atc.title }}</p>
              <img class="team__flag" :src="selectedPlayer.atc.country" alt="">
              <img class="team__pic" :src="selectedPlayer.atc.src" title="gk">
              <p class="team cost">{{ selectedPlayer.atc.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevAtc()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextAtc()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__atc players">
              <p class="team__name">{{ selectedPlayer.atc2.title }}</p>
              <img class="team__flag" :src="selectedPlayer.atc2.country" alt="">
              <img class="team__pic" :src="selectedPlayer.atc2.src" title="gk">
              <p class="team cost">{{ selectedPlayer.atc2.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevAtc2()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextAtc2()" class="next-selector">&#9658;</button>
              </div>
            </div>
            <div class="team__atc players">
              <p class="team__name">{{ selectedPlayer.atc3.title }}</p>
              <img class="team__flag" :src="selectedPlayer.atc3.country" alt="">
              <img class="team__pic" :src="selectedPlayer.atc3.src" title="gk">
              <p class="team cost">{{ selectedPlayer.atc3.cost }}</p>
              <div class="team__selectors">
                <button v-on:click="selectPrevAtc3()" class="prev-selector">&#9668;</button>
                <button v-on:click="selectNextAtc3()" class="next-selector">&#9658;</button>
              </div>
            </div>
          </section>

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
}
main{
  flex: 1 1 auto;
  padding: 10px;
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

.players{
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #3333333f;
  border-radius: 9px;
  align-items: center;
}
.team__selectors{
  display: flex;
  justify-content: center;
  gap: 40px;
  
}
.team__selectors button{
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.players img{
  max-width: 160px;
}
.team__flag{
  width: 15px;
}
</style>

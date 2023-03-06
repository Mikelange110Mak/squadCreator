<template>
		<StartPage />
</template>

<script>
import StartPage from './components/StartPage.vue'

export default {
  name: 'App',
  components: {
    StartPage,
  },
};

</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Marmelad&display=swap');
#app {
  font-family: 'Marmelad', sans-serif;
  font-size: 17px;
  
}
/*Null Styles*/
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
}
body, html {
	height: 100%;
}
li {
	list-style: none;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-weight: inherit;
	font-size: inherit;
}
img {
	vertical-align: top;
}


</style>

<template>
	<div>
		<div class="image">
			<img :src="currentWeather"/>
		</div>
		<div class="description">
			{{ weather }}
		</div>
	</div>
</template>

<script>
import sol from "@/assets/weather/Sol.png";
import solChuvaTrovoada from "@/assets/weather/SolPancadasDeChuvaETrovoadas.png";
import solMuitasNuvens from "@/assets/weather/SolComMuitasNuvens.png";
import solMuitasNuvensChuva from "@/assets/weather/SolComMuitasNuvensEChuva.png";
import solAlgumasNuvens from "@/assets/weather/SolComAlgumasNuvens.png";
import nubladoChuva from "@/assets/weather/NubladoComChuva.png";
import geadaAmanhecer from "@/assets/weather/GeadaAoAmanhece.png";
export default {
	props: {
		weather: {
			type: String,
			default: "Sol com algumas nuvens"
		},
	},
	data() {
		return {
			sol: sol,
			solChuvaTrovoada: solChuvaTrovoada,
			solMuitasNuvens: solMuitasNuvens,
			solMuitasNuvensChuva: solMuitasNuvensChuva,
			solAlgumasNuvens: solAlgumasNuvens,
			nubladoChuva: nubladoChuva,
			geadaAmanhecer: geadaAmanhecer,
		}
	},
	computed: {
		currentWeather() {
			if(this.weather === 'Sol' || this.weather === 'sol' || this.weather === 1){
				return this.sol;
			}else if(this.weather == 'Sol com chuva e trovoada' || this.weather == 'sol com chuva e trovoada' || this.weather === 2) {
				return this.solChuvaTrovoada;
			} else if(this.weather == 'Sol com muitas nuvens' || this.weather == 'sol com muitas nuvens' || this.weather === 3) {
				return this.solMuitasNuvens;
			} else if(this.weather == 'Sol com muitas nuvens e chuva' || this.weather == 'sol com muitas nuvens e chuva' || this.weather === 4) {
				return this.solMuitasNuvensChuva;
			} else if(this.weather == 'Sol com algumas nuvens' || this.weather == 'sol com algumas nuvens' || this.weather === 5) {
				return this.solAlgumasNuvens;
			} else if(this.weather == 'Nublado com chuva' || this.weather == 'nublado com chuva' || this.weather === 6) {
				return this.nubladoChuva;
			} else if(this.weather == 'Geada ao amanhecer' || this.weather == 'geada ao amanhecer' || this.weather === 7) {
				return this.geadaAmanhecer;
			}else {
				return '';
			}
		}
	},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');

.title {
	font-size: 26px;
	font-family: Raleway;
	color: #10434F;
}

.image {
	margin-top: 43px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 20px;
	height: 65px;
	width: 65px;
}

.description {
	color: #10434F;
	font-size: 18px;
	font-family: 'Raleway';
	text-align: center;
}

</style>
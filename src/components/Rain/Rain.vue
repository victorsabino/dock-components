<template>
	<div class="rainWrapper">
		<div class="min">
			<div v-for="gota in gotas" :key="gota.id">
				<img :src="gota.gotaIcon">
			</div>
			<div class="value">{{quantity}}mm - {{percentage}}%</div>
		</div>	
	</div>
</template>

<script>
import gotaCheia from "../../assets/weather/Gota cheia.svg";
import gotaVazia from "../../assets/weather/Gota vazia.svg";
export default {
	props: {
		percentage: {
			type: Number,
			default: 50
		},
		quantity: {
			type: Number,
			default: 50
		},
	},
	data() {
		return {
			gotaCheia: gotaCheia,
			gotaVazia: gotaVazia,
		}
	},
	computed: {
		gotas() {
			if(this.percentage <= 20) {
				return [{id: 0, gotaIcon: this.gotaVazia},{id: 1, gotaIcon: this.gotaVazia },{id: 2, gotaIcon: this.gotaVazia}]	
			} else if(this.percentage > 20 && this.percentage <= 40) {
				return [{id: 0, gotaIcon: this.gotaCheia},{id: 1, gotaIcon: this.gotaVazia },{id: 2, gotaIcon: this.gotaVazia}]	
			} else if(this.percentage > 40 && this.percentage <= 70) {
				return [{id: 0, gotaIcon: this.gotaCheia},{id: 1, gotaIcon: this.gotaCheia },{id: 2, gotaIcon: this.gotaVazia}]	
			} else if(this.percentage > 70) {
				return [{id: 0, gotaIcon: this.gotaCheia},{id: 1, gotaIcon: this.gotaCheia },{id: 2, gotaIcon: this.gotaCheia}]	
			} else{
				return []
			}
		}
	},
}
</script>

<style scoped>
.rainWrapper {
	background: #EBE8E3;
	height: 40px;
	width: 168px;
	box-shadow: 0px 2px 1px #DCD7CD;
	border-radius: 4px;
	display: flex;
}
.min {
	display: flex;
	margin-left: 2px;
}
.min img {
	margin-top: 15px;
	margin-left: 4px;
}
.value {
	margin-top: 13px;
	margin-left: 2px;
	color: #10434F;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
}
</style>
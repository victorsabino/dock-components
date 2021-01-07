<template>
	<div class="temperatureWrapper">
		<div class="min">
			<img :src="minIcon">
			<div class="value">{{min}}°C</div>
		</div>	
		<div class="max">
			<img :src="maxIcon">
			<div class="value">{{max}}°C</div>
		</div>	
	</div>
</template>

<script>
import maxIcon from "../../assets/weather/Temp max.svg";
import minIcon from "../../assets/weather/Temp mín.svg";
export default {
	props: {
		max: {
			type: Number,
			default: 50
		},
		min: {
			type: Number,
			default: 50
		},
	},
	data() {
		return {
			maxIcon: maxIcon,
			minIcon: minIcon,
		}
	},
}
</script>

<style scoped>
.temperatureWrapper {
	background: #EBE8E3;
	height: 40px;
	width: 168px;
	box-shadow: 0px 2px 1px #DCD7CD;
	border-radius: 4px;
	display: flex;
}
.min, .max {
	width: 50%;
	display: flex;
}
.min img {
	margin-top: 0px;
	margin-left: 8px;
}
.max img {
	margin-top: 8px;
	margin-left: 8px;
}
.value {
	margin-top: 13px;
	margin-left: 8px;
	color: #10434F;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
}
</style>
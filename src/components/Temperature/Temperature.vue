<template>
	<div>
		<label class="font16 openSans darkBlue formLabel">{{ label }}</label>
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
	</div>
</template>

<script>
import maxIcon from "@/assets/weather/TempMax.png";
import minIcon from "@/assets/weather/TempMin.png";
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
		label: {
			type: String,
			default: "Temperatura"
		}
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
	box-shadow: 0px 2px 1px #DCD7CD;
	border-radius: 4px;
	display: flex;
	margin-top: 3px;
	margin-left: auto;
    margin-right: auto;
}
.min, .max {
	display: inherit;
	margin-left: auto;
	margin-right: auto;
}
.min img {
	margin-top: 11px;
	margin-left: 8px;
	height: 18px;
	width: 18px;
}
.max img {
	margin-top: 14px;
	margin-left: 8px;
	height: 18px;
	width: 18px;
}
.value {
	color: #00000099;
	font-size: 14px;
	font-family: 'Open Sans', sans-serif;
}
.formLabel {
  margin-bottom: 0;
  margin-top: 10px;
	font-weight: 600;
}
</style>
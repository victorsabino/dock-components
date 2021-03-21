<template>
	<div>
		<label class="font16 openSans darkBlue formLabel">{{ label }}</label>
		<div class="windWrapper">
			<div class="direction">
				<img :src="directionIcon" :style="angle">
				<div class="value">{{direction}} - {{speed}}km/h</div>
			</div>	
		</div>
	</div>
</template>

<script>
import directionIcon from "@/assets/weather/DirVento.png";
export default {
	props: {
		direction: {
			type: String,
			default: 'W'
		},
		speed: {
			type: Number,
			default: 50
		},
		label: {
			type: String,
			default: "Vento"
		}
	},
	data() {
		return {
			directionIcon: directionIcon,
		}
	},
	computed: {
		angle() {
			if(this.direction === "N") {
				return 'transform: rotate(225deg); margin-top: 5px;' ;	
			}else if(this.direction === "NW") {
				return "transform: rotate(180deg); margin-top: 4px; margin-left: 9px;" ;	
			} else if(this.direction === "NE") {
				return "transform: rotate(265deg);margin-top: 5px;margin-left: 6px;" ;	
			} else if(this.direction === "S") {
				return "transform: rotate(45deg); margin-top: 2px; margin-left: 7px;";	
			} else if(this.direction === "SW") {
				return "transform: rotate(90deg); margin-top: 3px; margin-left: 9px;";	
				} else if(this.direction === "SE") {
				return "transform: rotate(0deg); margin-top: 3px; margin-left: 9px;";	
			}else if(this.direction === "W") {
				return "transform: rotate(135deg); margin-top: 4px; margin-left: 9px;";	
			}else if(this.direction === "E") {
				return "transform: rotate(-45deg); margin-top: 4px; margin-left: 9px;";	
			}
		}
	},
}
</script>

<style scoped>
.windWrapper {
	background: #EBE8E3;
	height: 40px;
	box-shadow: 0px 2px 1px #DCD7CD;
	border-radius: 4px;
	display: flex;
	margin-top: 3px;
}
.direction {
	display: flex;
	margin-right: auto;
}
.direction img {
	margin-top: 2px;
	margin-left: 4px;
	margin-right: 8px;
	height: 13px;
	width: 13px;
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
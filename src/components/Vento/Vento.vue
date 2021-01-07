<template>
	<div class="rainWrapper">
		<div class="min">
            <img :src="directionIcon" :style="angle">
			<div class="value">{{direction}} - {{speed}}km/h</div>
		</div>	
	</div>
</template>

<script>
import directionIcon from "../../assets/weather/Dir Vento.svg";
export default {
	props: {
		direction: {
			type: String,
			default: 'NW'
		},
		speed: {
			type: Number,
			default: 50
		},
	},
	data() {
		return {
			directionIcon: directionIcon,
		}
	},
	computed: {
		angle() {
			if(this.direction === "N") {
				return 'transform: rotate(225deg); margin-top: 7px; margin-left: 5px;' ;	
			}else if(this.direction === "NW") {
				return "transform: rotate(180deg); margin-top: 5px; margin-left: 9px;" ;	
			} else if(this.direction === "NE") {
				return "transform: rotate(265deg);margin-top: 4px;margin-left: 5px;" ;	
			} else if(this.direction === "S") {
				return "transform: rotate(45deg); margin-top: 0px; margin-left: 5px;";	
			} else if(this.direction === "SW") {
				return "transform: rotate(90deg); margin-top: 3px; margin-left: 9px;";	
				} else if(this.direction === "SE") {
				return "transform: rotate(0deg); margin-top: 3px; margin-left: 5px;";	
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
	margin-top: 2px;
	margin-left: 4px;
	margin-right: 8px;
}
.value {
	margin-top: 13px;
	margin-left: 2px;
	color: #10434F;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
}
</style>
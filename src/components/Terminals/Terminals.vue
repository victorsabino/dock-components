<template>
	<div>
		<div class="title">
			Terminais
		</div>
    <div class="terminalWrapper">
			<div class="terminal" v-for="terminal in terminals" :key="terminal.id">
				• {{ terminal }}
			</div>
			<div class="filler"></div>
    </div>
	</div>
</template>

<script>
export default {
	props: {
		terminals: {
			type: Array,
			default: () => []
		},
	},		
}
</script>

<style scoped>
.terminalWrapper {
	height: 176px;
	width: 732px;
	overflow: auto;
	background: #EBE8E3 0% 0% no-repeat padding-box;
	box-shadow: 0px 2px 1px #DCD7CD;
	border-radius: 4px;
	display: grid;
	grid-template-columns: 50% 50% ;
	padding-top: 10px;
}
.terminal {
	margin-left: 40px;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	color: #10434F;
	letter-spacing: 0.15px;
	margin-bottom: 10px;
	margin-top: 10px;
}
.filler {
	height: 10px; 
	width: 100%;
}
.title {
	font-size: 12px;
	font-family: 'Open Sans', sans-serif;
	color: #10434F;
	letter-spacing: 0.4px;
}
</style>
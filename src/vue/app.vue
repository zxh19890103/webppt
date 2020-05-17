<template>
	<div>
		{{ ni }}
		<h />
	</div>
</template>
<script>
import H from "./h"
export default {
	components: { H },
	filters: {
		a: (a) => a,
	},
	props: {
		haha: {
			type: Number,
			default: 89
		}
	},
	data() {
		return {
			name: n,
		}
	},
	computed: {
		hahaha() {
			return "09"
		},
	},
	created() {
	},
	methods: {
		op: 90,
		mk() {},
	},
}
</script>

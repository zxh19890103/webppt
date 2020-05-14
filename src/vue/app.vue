<template>
	<div>{{ name }}</div>
</template>
<script>
import H from "./h"
export default {
	components: { H },
	props: {
		ni: {
			type: String,
			default: "90",
		},
	},
	data() {
		return {
			name: "Singhi",
		}
	},
	computed: {
		hhh: () => "99",
	},
	methods: {
		say() {
		},
	},
}
</script>

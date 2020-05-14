interface Vue {
	$emit: (type: string, ...args: Array<unknown>) => void
	$forceUpdate: () => void
}

type FilterType = { [key: string]: (...args: any) => any}
type CombinedVue<D, M, C> = Vue & D & M & C

interface VueConfiguration<D, M, C> {
	data?: () => D
	methods?: M & ThisType<Vue & D & M & C>
	computed?: C & ThisType<Vue & C & M & D>
	filters?: FilterType
	created?: () => void
}

interface VueConstructor {
	new<D, M, C> (options: VueConfiguration<D, M, C> & ThisType<Vue & D & M & C> ): null
}

interface O {
	name: () => void
}

const o: O & ThisType<O & { g: string }>= {
	name() {
	},
}

var Vue: VueConstructor

new Vue({
	created() {
	},
	data() {
		return {
			name: "sgin"
		}
	},
	computed: {
		yu() {
		}
	},
	methods: {
		say() {
		},
		hello() {
		}
	},
})






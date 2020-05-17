interface Vue {
	$mount(): void
	$emit(type: string, ...args: Array<unknown>): void
	$forceUpdate(): void
	$on(type: string, handler: (...args: any[]) => void): void
}

type DataDef<D, P> = (this: Readonly<P>) => D
type PropsDef<P> = {
	[K in keyof P]: {
		type: { (): P[K] }
		default?: P[K]
	}
}
// QQQ
type ComputedGetters<C> = { [K in keyof C]: unknown }

interface VueOptions<Props, Methods, Data, Computed> {
	props?: PropsDef<Props>
	data?: DataDef<Data, Props>
	methods?: Methods &
		ThisType<Vue & Methods & Data & Props & ComputedGetters<Computed>>
	computed?: Computed & ThisType<Vue & ComputedGetters<Computed> & Data & Props>
}

interface VueConstructor {
	new <Props, Methods, Data, Computed>(
		options: VueOptions<Props, Methods, Data, Computed>,
	): Vue
}

var Vue: VueConstructor

// `this` in data will cause a failure of type findings.
new Vue({
	data() {
		return {
			name: "Singhi",
		}
	},
	computed: {
		yu() {
			return this.name
		},
	},
	// Q1: how to extract the props's type
	props: {
		initialName: {
			type: String,
			default: "90",
		},
		age: {
			type: Number,
			default: 9,
		},
		hi: {
			type: String,
			default: "89",
		},
	},
	methods: {
		say() {
			const n = this.name
			return n
		},
		hello() {},
	},
})


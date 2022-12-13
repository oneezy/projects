import { derived } from 'svelte/store'
import { describe } from '@packages/ui'

// create a derived store from the describe store
export const stats = derived(describe, $describe => {

	// create a new object to hold the stats
	const stats = []

	// loop over each key in $describe.stats and create a new object with name equal to the key and value equal to the value of the key
	for (const [key, value] of Object.entries($describe.stats)) {
		// if value is less than 1000 but greater than 10 set the duration to 3000 otherwise set it to 1000
		const duration = value < 1000 && value > 10 ? 3000 : 1000

		stats.push({
			name: key,
			value: value,
			duration: duration
		})
	}

	// set the stats
	return stats;
})


// export const stats = writable(
// 	{ name: 'Users', value: '8956', type: 'decimal', duration: 1000 },
// 	{ name: 'Bots', value: '2740', type: 'decimal', duration: 1000 },
// 	{ name: 'Exchanges', value: '2', type: 'decimal', duration: 1000 },
// 	{ name: 'Trading Pairs', value: '106', type: 'decimal', duration: 3000 }
// )


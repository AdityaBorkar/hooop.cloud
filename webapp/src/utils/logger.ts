export default function logger() {
	const logs = []

	return {
		debug: (...messages: any[]) => {
			logs.push({ type: 'debug', messages })
		},
		error: (...messages: any[]) => {
			logs.push({ type: 'error', messages })
		},
		publish: () => {
			// TODO - PUBLISH TO CLOUDWATCH
		},
	}
}

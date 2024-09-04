import { createHmac, timingSafeEqual } from 'crypto'

export default async function verifyHMAC(props: {
	hmac: string
	data: string
	signature: string
}) {
	const HMAC = createHmac('SHA256', props.signature)
		.update(props.data)
		.digest('hex')
	const RESULT = timingSafeEqual(Buffer.from(HMAC), Buffer.from(props.hmac))
	return RESULT
}

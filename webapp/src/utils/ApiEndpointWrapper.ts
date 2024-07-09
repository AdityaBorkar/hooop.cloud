import { is } from 'superstruct'
import createJsonFromSchema from '../../../1leo-v2/src/utils/createJsonFromSchema'
import getUser from '../../../1leo-v2/src/utils/getUser'

export default async function ApiEndpointWrapper(props: {
	formData: any
	schema: any
	auth: boolean
}) {
	const { formData, auth, schema } = props

	const user = await getUser()
	const data = createJsonFromSchema({ schema, formData })

	if (auth) if (!user) return { user, data, error: 'Not Authenticated' }
	if (!is(data, schema)) return { user, data, error: 'Invalid Data Format' }

	return { user, data, error: null }
}

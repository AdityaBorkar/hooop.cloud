import { nonempty, object, pattern, string, trimmed } from 'superstruct'

export const NewProjectSchema = object({
	slug: pattern(nonempty(trimmed(string())), /[a-z]/),
	name: nonempty(trimmed(string())),
	organization: nonempty(trimmed(string())),
})

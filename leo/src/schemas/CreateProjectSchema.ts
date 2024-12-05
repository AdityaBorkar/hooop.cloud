<<<<<<< HEAD
import { nonempty, object, pattern, string, trimmed } from 'superstruct'

export const CreateProjectSchema = object({
  slug: pattern(nonempty(trimmed(string())), /[a-z]/),
  name: nonempty(trimmed(string())),
  organization: nonempty(trimmed(string())),
=======
import { object, string } from 'superstruct'

export const CreateProjectSchema = object({
<<<<<<< HEAD
  projectSlug: string(),
  projectName: string(),
  githubRepo: string(),
  orgName: string(),
>>>>>>> a530fbf (progress)
=======
  slug: string(),
  name: string(),
  organization: string(),
>>>>>>> b030934 (progress)
})

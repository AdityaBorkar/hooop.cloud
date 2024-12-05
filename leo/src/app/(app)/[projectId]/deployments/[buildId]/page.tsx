<<<<<<< HEAD
<<<<<<< HEAD
export default function BuildPage() {
  return <div></div>
}
=======
import { HiArrowLeft } from "react-icons/hi2";

export default function ProjectBuilds(props: {
  params: { projectId: string; buildId: string };
}) {
  return (
    <main className="max-w-[1000px] mx-auto">
      <div className="text-neutral-500 my-8">
        <HiArrowLeft className="inline align-[-2px] mr-2" />
        Back to "All Deployments"
      </div>

      <div>Source: PR / Branch</div>
      <div>Build: Deployment:</div>

      <div>Environment / Domains</div>

      <div>Total Duration</div>

      <div>Build Checks: Passing</div>
      <div>
        Linting, Prettier Config, Style Guide (Only Warnings), Typescript,
        Dependency Updates Available, Security Scanning & Vulnerability Checks,
        Build
      </div>

      <div>Test Coverage</div>
      <div>Tests Passing / Failing</div>

      <div>Deployment Summary</div>
      <div>from SST/Pulumi</div>

      <div>Changelog</div>
      <div>Features / Performance / Size / Infrastructure</div>
    </main>
  );
}

// Source code Minification.
// JS and CSS transformation for browser compatibility.
// Bundling.
// Image Optimization.

// leveraging caching with actions/cache
// uploading/downloading artifacts using respectively actions/upload-artifact and actions/download-artifact

// However, the only thing I do differently compared to the examples featured in the documentation is caching the node_modules folder rather than the yarn/npm cache folder. This drastically speeds up the install step of my CI.

// Concurrency to suspend the running of workflow when new request gets in

// unit-testing, formatting, linting, and integration-testing: impact mainly the developers within your team. Having a good habit of writing unit tests, and having consistent code styling can increase velocity within the team. These are what I called fast to run fast to fail: they can be run quickly to identify any issues within the codebase and act as the first safeguard against bugs.
// end to end testing, automated release, and branch previews are more impactful at the cross-functional or organizational level. End to End testing will, for example, enable your frontend team and backend team to test some critical user paths. The automated releases ensure things are released with as little friction as possible and that your entire org can address a customer request as fast as possible. Finally, branch previews enable your frontend team and QA team to review work before it lands on production. Each upcoming feature or fix can be hosted in its service and tested on its own.
// feature flags and accessibility testing are more customer-facing. They guarantee a better and more inclusive experience for all your users and also avoid any service disruption when it comes to releasing new features.
>>>>>>> aab19bd (init)
=======
export default function BuildPage() {
  return <div></div>
}
>>>>>>> c6904e7 (progress)

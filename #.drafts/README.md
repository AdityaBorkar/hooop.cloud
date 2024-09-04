Coda Document: https://coda.io/d/Leo_dDQ4eVDjjqI/README-md_sucem#_luNMH

## Monitoring:

- Capture Frontend Errors
- Capture Backend Errors
- Capture Telemetry
- Merge with Infra

## Future Featues:

- AUTOMATIC Versioning + Releases / Tags
- Security Scanning & Vulnerability Checks
- Style Guide (Only Warnings)
- Code Conformance:
  - https://vercel.com/docs/workflow-collaboration/conformance/rules
- Site Conformance:
  - https://vercel.com/docs/image-optimization
  - https://nextjs.org/docs/app/building-your-application/optimizing/scripts
  - https://nextjs.org/docs/app/building-your-application/optimizing/fonts
  - Lambda Functions
    - and Database in the same region?
    - SET Execution Time Limit
    - SET Memory and CPU (sweet spot)
    - Rate Limiting all endpoints by IP address and Account API Key
  - Checks API:
    - https://vercel.com/docs/observability/checks-overview
    - https://vercel.com/integrations/checkly
  - Proper Strategy: SSG / SSR / ISR / PPR + CDN Caching
  - Setup CSP: https://vercel.com/guides/content-security-policy
- AWS Spend Alerts and Budget Breaches.
- DDoS Protection: https://vercel.com/docs/security/vercel-firewall
- Feature Flags and Changelogs with Release Phases: https://vercel.com/docs/release-phases
- Have you planned for potential disruption to availability or increase in latency for upstream services such as APIs and databases?
- Monitor Infra (SPECIALLY Database) and it's limits usage. Raise alert to raise limits.
- Load Testing Deployments: https://vercel.com/guides/what-s-vercel-s-policy-regarding-load-testing-deployments
- Security Compliance: https://vercel.com/docs/security
- Preview / Staging Deployments - Always Protected with GitHub Account Permissions.
- Audit Trail

## SST Integration:

- https://github.com/sst/ion/blob/dev/.github/workflows/docs.yml
- Define Infra Properties within Functions
- OpenTelementary and Instrumentation

// https://discord.com/api // User-Agent: DiscordBot ($url, $versionNumber)
POST/channels/{channel.id}/messages
Files must be attached using a multipart/form-data body as described in Uploading Files.

## Suggestions to think about:

- Rollback to previous deployment if the new deployment exceeds certain error thresholds.
- Integrate with OpenTelemetry Collector / Create a serverless OpenTel-Collector.
- MAKE SURE THE PROJECT ID IS NOT REPEATED
- Make a flow to install the GitHub App in the User's account

// TODO - List Deployments
// TODO - Create a Discord Bot for Notifications
// TODO - Collect Telemetry Data and report to Cloudwatch
// TODO - Report Errors and Warnings
// TODO - Create "Alerts"

---

## Loading:

```
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
await fetch('http://hub.dummyapis.com/delay?seconds=10', {
  cache: 'no-store',
})
```

---

Rewrite the commit message to conform to the Conventional Commits style.

- Using fix releases a patch (x.x.1)
- Using feat releases a minor (x.1.x)
- Using feat when BREAKING CHANGE is present in the commit message releases a major (1.x.x)

If a commit contains [skip release] in their message, it will be excluded from the commit analysis and won't participate in the release type determination. This is useful, if the PR being merged should not trigger a new npm release.

---

Error when using tunnel. redirect() throws this error:

```shell
failed to get redirect response TypeError: fetch failed
    at Object.fetch (node:internal/deps/undici/undici:11372:11)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async globalThis.fetch (webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/patch-fetch.js:216:16)
    at async t0 (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:38:4395)
    at async t2 (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:39:762)
    at async rS (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js:41:1369)
    at async doRender (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:1376:30)
    at async cacheEntry.responseCache.get.routeKind (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:1537:28)
    at async DevServer.renderToResponseWithComponentsImpl (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:1445:28)
    at async DevServer.renderPageComponent (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:1842:24)
    at async DevServer.renderToResponseImpl (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:1880:32)
    at async DevServer.pipeImpl (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:893:25)
    at async NextNodeServer.handleCatchallRenderRequest (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/next-server.js:269:17)
    at async DevServer.handleRequestImpl (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/base-server.js:789:17)
    at async /home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/dev/next-dev-server.js:331:20
    at async Span.traceAsyncFn (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/trace/trace.js:151:20)
    at async DevServer.handleRequest (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/dev/next-dev-server.js:328:24)
    at async invokeRender (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-server.js:174:21)
    at async handleRequest (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-server.js:353:24)
    at async requestHandlerImpl (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/router-server.js:377:13)
    at async Server.requestListener (/home/aditya/projects/leo/node_modules/.pnpm/next@14.1.3_@opentelemetry+api@1.8.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/start-server.js:140:13) {
  cause: Error [ERR_TLS_CERT_ALTNAME_INVALID]: Hostname/IP does not match certificate's altnames: IP: :: is not in the cert's list: 127.0.0.1, ::1
      at new NodeError (node:internal/errors:406:5)
      at Object.checkServerIdentity (node:tls:337:12)
      at TLSSocket.onConnectSecure (node:_tls_wrap:1669:27)
      at TLSSocket.emit (node:events:514:28)
      at TLSSocket._finishInit (node:_tls_wrap:1070:8)
      at ssl.onhandshakedone (node:_tls_wrap:856:12)
      at TLSWrap.callbackTrampoline (node:internal/async_hooks:130:17) {
    reason: "IP: :: is not in the cert's list: 127.0.0.1, ::1",
    host: '::',
    cert: {
      subject: [Object: null prototype],
      issuer: [Object: null prototype],
      subjectaltname: 'DNS:localhost, IP Address:127.0.0.1, IP Address:0:0:0:0:0:0:0:1',
      ca: false,
      modulus: 'F141B50CEE30CA75FCD9D1AAB1B88FFEE50265CB198287BA7F90D744D1A4E45B6EA06C168A7E176C6DFF9ECAA9E19EF8341FB8242DF0A29C64E6F4028508FDB53C7695E143BEAB338384935CC23636C95D4D981738E2C912B160F4467AA299DD81789CB8A2AD530E1480043541C5748BD0433421D59120B5D22E0649B12E6D367E6F26ABB5A6030859A6F694DA195B4C5A1CC8745E78761F8CFF9191CBADBF4669011AF433280518D8863DE399F105F9DFA650A7D0AF14973FEF5D1C7E13CE35DD2636737022CBD648C0520F888CD2CDB61AD143AB7A19BBE6F2D90A9966F5FF4A28C09B5441F16A84AC25CD5CD3826C9EB327F525B8F4F05A313919F55BEB6B',
      bits: 2048,
      exponent: '0x10001',
      pubkey: <Buffer 30 82 01 22 30 0d 06 09 2a 86 48 86 f7 0d 01 01 01 05 00 03 82 01 0f 00 30 82 01 0a 02 82 01 01 00 f1 41 b5 0c ee 30 ca 75 fc d9 d1 aa b1 b8 8f fe e5 ... 244 more bytes>,
      valid_from: 'Mar 20 14:18:16 2024 GMT',
      valid_to: 'Jun 20 14:18:16 2026 GMT',
      fingerprint: 'B3:D7:65:5B:C9:79:1F:F9:10:33:64:10:B6:92:AF:7E:82:B1:8B:C6',
      fingerprint256: '8E:E0:F3:40:89:88:1A:4E:19:98:30:06:A3:DD:4A:56:90:E3:87:6C:AF:17:AB:5E:72:40:CB:4D:31:B9:8E:9B',
      fingerprint512: 'E4:FF:15:4D:A6:B7:19:C8:49:3F:01:56:9C:1A:AF:9F:E3:48:BE:23:92:67:77:3A:BC:1C:EA:CD:4A:F2:EB:24:76:EF:AB:58:86:D9:30:75:3A:B8:CB:22:01:53:BA:CC:6E:B2:7E:49:37:1F:3A:6F:7C:7F:D3:77:A9:C9:FD:D9',
      ext_key_usage: [Array],
      serialNumber: '57E8B2D0310C72FB21C8B5C419004757',
      raw: <Buffer 30 82 04 2d 30 82 02 95 a0 03 02 01 02 02 10 57 e8 b2 d0 31 0c 72 fb 21 c8 b5 c4 19 00 47 57 30 0d 06 09 2a 86 48 86 f7 0d 01 01 0b 05 00 30 65 31 1e ... 1023 more bytes>,
      issuerCertificate: [Object]
    },
    code: 'ERR_TLS_CERT_ALTNAME_INVALID'
  }
}
```


Focus on Leo:

- CI/CD Pipeline with/wthout Tests
- Releases / Crash Alerts on Discord
- Crashlytics / Performance

Advanced Feature, not to work right now:

- Plug and Play Solution
- Infrastructure, after SST v3 is beta
>>>>>>> c6904e7 (progress)
=======
- **10x faster** deploys
- Native **multi-region** support
- No more cyclical dependencies
- No stacks or stack resource limits
- No CDK or npm package conflicts
- Native support for **non-AWS** providers
=======
- Capture Frontend Errors
- Capture Backend Errors
- Capture Telemetry
>>>>>>> ec8a0e3 (update progress)

## Future Featues:

- AUTOMATIC Versioning + Releases / Tags
- Security Scanning & Vulnerability Checks
- Style Guide (Only Warnings)
- Code Conformance:
  - https://vercel.com/docs/workflow-collaboration/conformance/rules
- Site Conformance:
  - https://vercel.com/docs/image-optimization
  - https://nextjs.org/docs/app/building-your-application/optimizing/scripts
  - https://nextjs.org/docs/app/building-your-application/optimizing/fonts
  - Lambda Functions
    - and Database in the same region?
    - SET Execution Time Limit
    - SET Memory and CPU (sweet spot)
    - Rate Limiting all endpoints by IP address and Account API Key
  - Checks API:
    - https://vercel.com/docs/observability/checks-overview
    - https://vercel.com/integrations/checkly
  - Proper Strategy: SSG / SSR / ISR / PPR + CDN Caching
  - Setup CSP: https://vercel.com/guides/content-security-policy
- AWS Spend Alerts and Budget Breaches.
- DDoS Protection: https://vercel.com/docs/security/vercel-firewall
- Feature Flags and Changelogs with Release Phases: https://vercel.com/docs/release-phases
- Have you planned for potential disruption to availability or increase in latency for upstream services such as APIs and databases?
- Monitor Infrastructure (SPECIALLY Database) and it's limits usage. Raise alert to raise limits.
- Load Testing Deployments: https://vercel.com/guides/what-s-vercel-s-policy-regarding-load-testing-deployments
- Security Compliance: https://vercel.com/docs/security
- Preview / Staging Deployments - Always Protected with GitHub Account Permissions.

## SST Integration:

- https://github.com/sst/ion/blob/dev/.github/workflows/docs.yml
- Define Infrastructure Properties within Functions
- OpenTelementary and Instrumentation

// https://discord.com/api // User-Agent: DiscordBot ($url, $versionNumber)
POST/channels/{channel.id}/messages
Files must be attached using a multipart/form-data body as described in Uploading Files.

## Suggestions to think about:

```
brew install sst/tap/sst
```

To upgrade to the latest version:

```
brew upgrade sst
```

You might have to run `brew update` before upgrading.

#### Linux

`sst` is available as downloadable binaries from the [releases](https://github.com/sst/ion/releases/latest) page. Download the .deb or .rpm from the [releases](https://github.com/sst/ion/releases/latest) page and install with `sudo dpkg -i` and `sudo rpm -i` respectively.

For arch linux it's available in the [aur](https://aur.archlinux.org/packages/sst-bin)

#### Windows

`sst` is available via [scoop](https://scoop.sh/), and as a downloadable binary from the [releases](https://github.com/sst/ion/releases/latest) page:

```
scoop bucket add sst https://github.com/sst/scoop-bucket.git
scoop install sst
```

To upgrade to the latest version:

```
scoop update sst
```

#### Manually

Download the pre-compiled binaries from the [releases](https://github.com/sst/ion/releases/latest) page and copy to the desired location.

## Quick start

1. Create a new Next.js app.

   ```bash
   npx create-next-app@latest
   ```

2. Initialize SST in the root of your Next.js app.

   ```bash
   cd my-app
   sst create
   ```

   - This creates an `sst.config.ts` in your project root.
   - `sst.config.ts` is automatically added to the the `exclude` array in `tsconfig.json` to prevent TypeScript from trying to type-check it when building your app
   - You should also add `/.sst` and `/.open-next` to your `.gitignore` file.

3. Deploy! Ensure you have AWS credentials setup and run:

   ```bash
   sst deploy
   ```

### Custom domains

You can configure the app with a custom domain hosted on [Route 53](https://aws.amazon.com/route53/).

```js {3}
new Nextjs("Web", {
  domain: "my-app.com",
});
```

You can setup `www.my-app.com` redirect to `my-app.com`.

```js {3}
new Nextjs("Web", {
  domain: {
    domainName: "my-app.com",
    redirects: ["www.my-app.com"],
  },
});
```

Or you can have `www.my-app.com` serve out the same site without redirecting.

```js {3}
new Nextjs("Web", {
  domain: {
    domainName: "my-app.com",
    aliases: ["www.my-app.com"],
  },
});
```

---

Join the `#ion` channel in our [Discord](https://sst.dev/discord) to learn more and contribute.
>>>>>>> c9648a0 (update workflows)
=======
- Rollback to previous deployment if the new deployment exceeds certain error thresholds.
- Integrate with OpenTelemetry Collector / Create a serverless OpenTel-Collector.
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ec8a0e3 (update progress)
=======
=======
- MAKE SURE THE PROJECT ID IS NOT REPEATED
- Make a flow to install the GitHub App in the User's account

// TODO - List Deployments
// TODO - Create a Discord Bot for Notifications
// TODO - Collect Telemetry Data and report to Cloudwatch
// TODO - Report Errors and Warnings
// TODO - Create "Alerts"
>>>>>>> a530fbf (progress)

---

## Loading:

```
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
await fetch('http://hub.dummyapis.com/delay?seconds=10', {
  cache: 'no-store',
})
```
<<<<<<< HEAD
>>>>>>> 91fc705 (progress)
=======

---

Rewrite the commit message to conform to the Conventional Commits style.

- Using fix releases a patch (x.x.1)
- Using feat releases a minor (x.1.x)
- Using feat when BREAKING CHANGE is present in the commit message releases a major (1.x.x)

If a commit contains [skip release] in their message, it will be excluded from the commit analysis and won't participate in the release type determination. This is useful, if the PR being merged should not trigger a new npm release.
>>>>>>> a530fbf (progress)

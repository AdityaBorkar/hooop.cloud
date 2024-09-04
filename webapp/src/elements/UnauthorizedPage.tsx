export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">401: Unauthorized</h1>
      <p className="text-lg">
        You do not have sufficient permissions to access this page. Kindly
        contact your admin or verify the URL you are accessing.
      </p>
    </div>
  )
}

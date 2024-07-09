import Navbar from '@/elements/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />

      <div className="mx-auto max-w-[64rem] 2xl:max-w-[80rem]">{children}</div>
    </div>
  )
}

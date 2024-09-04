import { twMerge } from 'tailwind-merge'

export default function DropdownMenu(props: {
  title: React.ReactNode
  className?: string
  children: React.ReactNode[]
}) {
  return (
    <div className="group relative">
      <div>{props.title}</div>
      <div className="absolute top-0 right-0 hidden group-hover:block">
        <div
          className={twMerge(
            'mt-10 flex flex-col rounded-md bg-neutral-900 shadow-lg',
            props.className,
          )}
        >
          {props.children.map((child, index) => (
            <div key={index} className="py-2 px-4 text-sm hover:bg-neutral-800">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// export default function DropdownMenu(props: {
//   options: (
//     | {
//         name: string
//         link: string
//       }
//     | {
//         name: string
//         onClick: () => void
//       }
//   )[]
//   className?: string
//   children: React.ReactNode
// }) {
//   return (
//     <div className="group relative">
//       <div>{props.children}</div>
//       <div className="absolute top-0 right-0 hidden group-hover:block">
//         <div
//           className={twMerge(
//             'mt-10 rounded-md bg-neutral-900 shadow-lg',
//             props.className,
//           )}
//         >
//           {props.options.map((option) => {
//             const Component = 'link' in option ? Link : 'button'
//             const props =
//               'link' in option
//                 ? { href: option.link }
//                 : { onClick: option.onClick }
//             return (
//               <Component
//                 {...props}
//                 key={option.name}
//                 className="block py-1 px-2 hover:bg-neutral-800"
//               >
//                 {option.name}
//               </Component>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

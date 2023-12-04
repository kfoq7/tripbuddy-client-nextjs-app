import clsx from 'clsx'

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode
}

export function Title({ children, className }: Props) {
  return (
    <h1 className={clsx('text-center text-4xl font-extrabold', className)}>
      {children}
    </h1>
  )
}

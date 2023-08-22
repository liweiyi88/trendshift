import classNames from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames('mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default Container

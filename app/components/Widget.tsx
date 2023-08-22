import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  className?: string
}

const Widget = ({ className, children }: Props) => {
  return (
    <div
      className={classNames(
        'bg-white rounded-lg border border-gray-200',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Widget

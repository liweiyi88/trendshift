import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  className?: string
  label?: string
}

const Widget = ({ className, children, label }: Props) => {
  return (
    <div
      className={classNames(
        'bg-white rounded-lg border border-gray-200 relative',
        className,
      )}
    >
      {label && (
        <div className="absolute ml-4 mt-2 text-xs md:text-sm font-semibold inline">
          {label}
        </div>
      )}
      {children}
    </div>
  )
}

export default Widget

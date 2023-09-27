import classNames from 'classnames'

interface Props {
  children?: React.ReactNode
  className?: string
  label?: React.ReactNode
  bordered?: boolean
}

const Widget = ({ className, children, label, bordered = true }: Props) => {
  return (
    <div
      className={classNames(
        bordered ? 'border' : '',
        'bg-white rounded-lg border-gray-200 relative',
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

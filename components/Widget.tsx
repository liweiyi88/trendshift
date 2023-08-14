import classNames from 'classnames'

interface Props {
  className?: string
}

const Widget = ({ className }: Props) => {
  return (
    <div
      className={classNames(
        'bg-white rounded-lg border border-gray-200',
        className,
      )}
    ></div>
  )
}

export default Widget

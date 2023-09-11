import * as smoothscroll from 'smoothscroll-polyfill'

export interface ScrollPositionOptions extends ScrollOptions {
  target: HTMLElement | Window
  method: ScrollMethod
  top?: number
  left?: number
}

type ScrollMethod = 'scroll' | 'scrollBy' | 'scrollIntoView'

export const scroll = (options: ScrollPositionOptions): void => {
  if (typeof window !== 'undefined') {
    smoothscroll.polyfill()
  }

  const isWindow = options.target === window

  if (isWindow && options.method === 'scrollIntoView') {
    throw Error('scrollIntoView can only be used by HTMLElement not Window.')
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  options.target[options.method](options)
}

export const scrollToTop = (): void => {
  scroll({
    target: window,
    method: 'scroll',
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

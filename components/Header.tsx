import Container from './Container'

const Header = () => {
  return (
    <nav className="bg-white">
      <Container className="border-b-gray-200 border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <div
                  className="border-r border-gray-300 pr-4 font-semibold"
                  aria-current="page"
                >
                  GitHub Trending Insight
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Header

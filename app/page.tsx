import Widget from '@/components/Widget'

const Home = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Widget className="col-span-1 h-52" />
          <Widget className="md:col-span-2 h-52" />
          <Widget className="h-52" />
          <Widget className="h-52" />
          <Widget className="h-52" />
          <Widget className="h-52" />
          <Widget className="h-52" />
          <Widget className="h-52" />
          <Widget className="h-52" />
        </div>
      </div>
    </main>
  )
}

export default Home

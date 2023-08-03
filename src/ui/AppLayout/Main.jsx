import './Main.scss'
function Main({ children }) {
  return (
    <div className="of-sc">
      <main className="page">
        <div className="flex-row">{children}</div>
      </main>
    </div>
  )
}

export default Main

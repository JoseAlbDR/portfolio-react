function Container({ children, type }) {
  return <div className={`container ${type}-page`}>{children}</div>
}

export default Container

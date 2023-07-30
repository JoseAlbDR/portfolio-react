function List({ items, render }) {
  return <>{items.map(render)}</>
}

export default List

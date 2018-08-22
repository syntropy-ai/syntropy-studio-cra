import React from 'react'

const DEFAULT_EXPANDED_KEYNAME = 'expanded'
const DEFAULT_CHILDREN_KEYNAME = 'children'

const Tree = ({
  itemKey,
  items,
  meta,
  renderItem: RenderItem,
  renderExpandable: RenderExpandable,
  expandedKeyname = DEFAULT_EXPANDED_KEYNAME,
  childrenKeyname = DEFAULT_CHILDREN_KEYNAME,
  level = 0
}) => {
  const item = items[itemKey]
  return (
    <div>
      <RenderExpandable
        itemKey={itemKey}
        item={item}
        items={items}
        meta={meta}
        level={level}
      />
      {item[childrenKeyname] &&
        item[expandedKeyname] &&
        item[childrenKeyname].map((childKey, i) => {
          const child = items[childKey]
          return child[childrenKeyname] ? (
            <Tree
              key={i}
              itemKey={childKey}
              items={items}
              meta={meta}
              renderItem={RenderItem}
              renderExpandable={RenderExpandable}
              expandedKeyname={expandedKeyname}
              childrenKeyname={childrenKeyname}
              level={level + 1}
            />
          ) : (
            <RenderItem
              key={i}
              itemKey={childKey}
              item={items[childKey]}
              items={items}
              meta={meta}
              level={level + 1}
            />
          )
        })}
    </div>
  )
}

export default Tree

import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './action'

const ItemList = (props: any) => {
  const { items, onItemDel } = props;
  return (
    <p>
      {
        items.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              id={item.id}
              onClick={() => onItemDel(item.id)}
            />
            {item.text}
          </li>
        ))
      }
    </p>
  )
}
//store.items →(binding)→ props.items
const mapStateToProps = store => ({ items: store.items });
//Connect Redux Store
export default connect(mapStateToProps, actionCreators)(ItemList);
//@flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onFetchLoadItems } from '../actions/items';

import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoAddForm from './TodoAddForm';
import TodoEditForm from './TodoEditForm';
import TodoSearchForm from './TodoSearchForm';
import '../style/bootstrap.css';
import '../style/animate.css';
import '../style/costumize.css';

class App extends Component {
  componentDidMount() {
    this.props.onFetchLoadItems();
  }
  render() {
    //Do Search, reducer 'searchedKeyword'
    let itemList = (this.props.searchedKeyword.trim())
      ? this.props.items.filter((item) => (
        item.title.includes(this.props.searchedKeyword)
      ))
      : this.props.items;
    //Do Sort, reducer 'sortType'
    switch (this.props.sortType) {
      case 'asc': {//sorting the num of strokes ascending.
        itemList = itemList.sort((a, b) => (
          a.title.localeCompare(b.title, 'zh-Hans-TW-u-co-stroke')
        ))
        break;
      }
      case 'desc': {
        itemList = itemList.sort((a, b) => (
          b.title.localeCompare(a.title, 'zh-Hans-TW-u-co-stroke')
        ))//倒序
        break;
      }
      default: {
        itemList = itemList.sort((a, b) => (
          b.id - a.id
        ))//id =+new Date()
        break;
      }
    }
    //Container
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">
                TodoApp with Redux
              </h3>
            </div>
            <div className="panel-body">
              <TodoAddForm placeholderText="Input Here" />
              <TodoSearchForm placeholderText="Search Some" />
              <TodoList>
                {
                  itemList.map((item, index) => {
                    if (this.props.isFilteringOut && item.isCompleted) {
                      return null
                    }
                    return (
                      (item.isEditing)
                        ? <TodoEditForm
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          isCompleted={item.isCompleted}
                        />
                        : <TodoItem
                          key={item.id}
                          id={item.id}
                          isCompleted={item.isCompleted}
                          title={item.title}
                        />
                    )
                  })
                }
              </TodoList>
            </div>
            <div className="panel-footer">DoubleClick to edit, Enter to store.</div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = store => ({
  items: store.items,
  isFilteringOut: store.filterOut.isFilteringOut,
  searchedKeyword:store.searchedKeyword.keyword,
  sortType:store.sortType.direction,
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({onFetchLoadItems}, dispatch)
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
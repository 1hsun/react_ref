//@flow
import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import TodoAddForm from './TodoAddForm';
import TodoEditForm from './TodoEditForm';
import TodoSearchForm from './TodoSearchForm';
import type { Item, SortType } from '../../definition/TodoTypeDefinition';
import '../../style/bootstrap.css';
import '../../style/animate.css';

let keepSearchedItems: Array<Item> = [];
let isSearching: boolean = false;
let isFilteringOut: boolean = false;

class App extends Component {
	state: {
		items: Array<Item>,
		sortType: SortType,
	}//structral settlement.
	constructor() {
		super();
		this.state = {
			items: [],
			sortType: '',
		}
	}
	//=====伺服器聯繫部分START=====
	componentDidMount() {
		this.handleItemServerLoad()
	}
	handleItemServerLoad = () => {
		fetch('http://localhost:5555/items?_sort=id&_order=DESC', {
			method: 'GET'
		})
			.then((res) => {
				if (!res.ok) throw new Error(res.statusText);
				return res.json();
			})
			.then((itemList) => {//add {isEditing:false}
				const items = itemList.map((item) => {
					return Object.assign({}, item, { isEditing: false })//陣列合併
				})
				this.setState({
					items,
				})
			}).catch((error) => {
				console.error(error)
			})
	}
	handleItemServerAdd = (aItem: Item) => {
		const { id, title, isCompleted } = aItem;//GET DATA
		const payload = { id, title, isCompleted };
		//Go POST
		fetch(`http://localhost:5555/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then((res) => {
				if (!res.ok) throw new Error(res.statusText)
				return res.json()
			})
			.then((item) => {
				console.log(item);
			}).catch((err) => {
				console.error(err)
			})
	}
	handleItemServerUpdate = (aItem: Item) => {
		const { id, title, isCompleted } = aItem;
		const payload = { id, title, isCompleted };
		//利用模板字串符號template literal規範，再以${...}傳入變量
		fetch(`http://localhost:5555/items/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
			.then((res) => {
				if (!res.ok) throw new Error(res.statusText)
				return res.json()
			})
			.then((item) => {
				console.log(item)
			}).catch((err)=>{
				console.error(err);
			})
	}
	//=====伺服器聯繫部分END=====
	//項目排序
	handleItemSort = (sortType: SortType) => {
		let newItems = [...this.state.items];
		if (sortType === 'asc') {
			newItems = newItems.sort((a, b) => (
				a.title.localeCompare(b.title, 'zh-Hans-TW-u-co-stroke')//筆畫由少至多排列
			))
		}
		if (sortType === 'desc') {
			newItems = newItems.sort((a, b) => (
				b.title.localeCompare(a.title, 'zh-Hans-TW-u-co-stroke')
			))
		}
		this.setState({
			items: newItems,
			sortType
		});
	}//項目搜尋
	handleItemSearch = (searchword: string) => {
		this.handleItemSort = '';//no sorting
		if (!isSearching) {//保存items，切換正準備搜尋
			isSearching = true;
			keepSearchedItems = [...this.state.items];
		}
		if (isSearching && searchword === '') {
			isSearching = false;
			this.setState({
				items: keepSearchedItems,
			})
		} else {
			const newItems = keepSearchedItems.filter((item) => (
				item.title.includes(searchword)
			))//'filter' do match inner Fn and return to Array as loop, 'includes' return boolean, if it matchs.
			this.setState({
				items: newItems,
			})
		}
	}
	//切換顯示完成與否
	handleItemFilter = () => {
		isFilteringOut = !isFilteringOut
		const newItems = [...this.state.items];
		this.setState({
			items: newItems,
		})
	}
	handleItemAdd = (aItem: Item) => {
		this.handleItemSort('');//no sorting
		this.handleItemServerAdd(aItem);
		const newItems = [aItem, ...this.state.items];
		this.setState({
			items: newItems,
		})
	}
	handleStylingItem = (index: number) => {
		this.handleItemSort('');
		const newItems = [...this.state.items];
		newItems[index].isCompleted = !newItems[index].isCompleted;
		this.handleItemServerUpdate(newItems[index]);
		this.setState({
			items: newItems,
		})
	}
	handleEditItem = (index: number) => {
		const newItems = [...this.state.items];
		newItems[index].isEditing = !newItems[index].isEditing;
		this.setState({
			items: newItems,
		})
	}
	handleEditItemUpdate = (index: number, title: string) => {
		this.handleItemSort('');
		const newItems = [...this.state.items];
		newItems[index].title = title;
		newItems[index].isEditing = !newItems[index].isEditing;
		this.handleItemServerUpdate(newItems[index]);
		this.setState({
			items: newItems,
		})
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-warning">
						<div className="panel-heading">
							<h3 className="panel-title">TodoApp</h3>
						</div>
						<div className="panel-body">
							<TodoAddForm
								placeholderText="Go ToDo."
								onItemAdd={this.handleItemAdd}
							/>
							<TodoSearchForm
								placeholderText="Go SearchIt."
								onItemSearch={this.handleItemSearch}
							/>
							<TodoList
								onItemFilter={this.handleItemFilter}
								onItemSort={this.handleItemSort}
								sortType={this.state.sortType}>
								{
									this.state.items.map((item, index) => {
										if (isFilteringOut && item.isCompleted) {
											return null
										}
										return (
											(item.isEditing)
												? <TodoEditForm
													key={item.id}
													title={item.title}
													onItemUpdate={(title) => { this.handleEditItemUpdate(index, title) }}
												/>
												: <TodoItem
													key={item.id}
													isCompleted={item.isCompleted}
													title={item.title}
													onItemClick={() => { this.handleStylingItem(index) }}
													onItemDoubleClick={() => { this.handleEditItem(index) }}
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
export default App;
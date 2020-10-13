import React from 'react'

import TimetableManager from "../managers/TimetableManager"
import {setSearchParameters} from "../utils/history"

import URLParameterButton from "../components/URLParameterButton"
import CategoryButton from "../components/CategoryButton"

class GroupSelection extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			groups: [],
			isError: false
		}
	}

	render() {
		return (
			<div className="group-selection">
				<div className="header">
		            <div className="back" onClick={() => setSearchParameters({})}>🡠 Повернутися</div>
		            <div className="location">{this.props.institute}</div>
		        </div>
				{this.state.groups.length === 0 && !this.state.isError && <div className="loading">Отримання даних з lpnu.ua</div>}
				{this.state.isError && <div className="error">Помилка при отриманні даних!</div>}
				{this.getCategories()}
			</div>
		)
	}

	componentDidMount() {
		TimetableManager.getGroups(this.props.institute).then(groups => {
			const categories = new Set();
			for(let group of groups) {
				const category = group.split("-")[0];
				categories.add(category);
			}

			this.setState({
				groups,
				categories: Array.from(categories)
			});
		}).catch(err => {
			this.setState({
				isError: true
			})
		})
	}

	getCategories() {
		if(!this.state.categories) return [];
		const categories = [];
		for(let category of this.state.categories) {
			const groups = this.state.groups.filter(el => el.split("-")[0] === category);

			const subcategories = new Set();
			groups.forEach(group => subcategories.add(getSubcategory(group)));

			const lists = [];
			for(let subcategory of Array.from(subcategories)) {
				lists.push(
					groups
					.filter(group => group.startsWith(subcategory))
					.map(group => <URLParameterButton key={group} text={group} parameters={{group: group}}/>)
				);
			}

			categories.push(<CategoryButton key={category} text={category} contents={lists.map((list, i) => <div key={i} className="subcategory">{list}</div>)}/>)
		}
		return categories;
	}
}

function getSubcategory(group) {
	return group.substring(0, group.indexOf("-")+2); // КН-1, КН-2 ...
}

export default GroupSelection

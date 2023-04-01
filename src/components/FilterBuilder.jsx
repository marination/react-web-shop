import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { useState } from 'react';

const FilterSection = ({title, filterValues, type}) => {
	let [isFilterOpen, setFilterDisplay] = useState(false);
	const toggleFilterDisplay = () => {
		setFilterDisplay((isOpen) => !isOpen)
	}

	let filter_data = {"filter_values": filterValues,  "type": type, "isOpen": isFilterOpen}
	return (
		<div className="Filter-row-container">
			<FilterHeader title={title} toggleFilterDisplay={toggleFilterDisplay} isOpen={isFilterOpen}></FilterHeader>
			<FilterBody {...filter_data} ></FilterBody>
		</div>
	);
}

const FilterHeader = ({title, toggleFilterDisplay, isOpen}) => {
	return (
		<div className='Filter-row-header'>
			<span className='Filter-row-header-title'>{title}</span>
			<div 
				className='icon Filter-row-header-icon text-muted' 
				onClick={toggleFilterDisplay}
				open={isOpen}
			>
				<PlusIcon></PlusIcon>
			</div>
		</div>
	);
}

const FilterBody = (filter_data) => {
	let {filter_values, type, isOpen} = filter_data;

	let FilterCheckboxList = []
	filter_values.forEach((value, index) => {
		let filter_value_data = {"value": value, "idx": index, "type": type};
		FilterCheckboxList.push(<FilterCheckboxRow {...filter_value_data} key={index}></FilterCheckboxRow>)
	})

	return (
		<div className='Filter-row-body' open={isOpen}>
			{FilterCheckboxList}
		</div>
	);
}

const FilterCheckboxRow = (props) => {
	let id = 'Filter-' + props.type + '-' + props.idx;
	let name = 'Filter-'+ props.type;

	return (
		<div className='Filter-row-body-item'>
			<input type={'checkbox'} 
				name={name} 
				id={id} 
				value={props.value}>
			</input>
			<label htmlFor={id}>{props.value}</label>
		</div>
	);
}

export default FilterSection;
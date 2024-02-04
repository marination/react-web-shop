const ProductSpecificationGroup = ({title, specifications}) => {
	if (!specifications) {
		return null
	}

	let rows = specifications.map((specification) => {
		return (
			<tr className="product-specification-row" key={specification.key}>
				<td className="specification-name">{specification.key}</td>
				<td>{specification.value}</td>
			</tr>
		)
	})

	return (
		<div className="product-specifications">
			<p className="product-specification-title wght-600">
				{title}
			</p>
			<table className="product-specification-table">
				<tbody>{rows}</tbody>
			</table>
		</div>
	)
}

export const ProductSpecifications = ({specifications}) => {
	// specifications: {
	// 	"General": [{"key": "Model Name", "value": "Ear (2)"}, {"key": "Headphone Type", "value": "Wireless"}],
	// 	"Product Details": [{"key": "Driver Type", "value": "Dynamic"}, {"key": "Driver Size", "value": "10 mm"}],
	// ...
	// }
	if (!specifications) {
		return null
	}
	
	let groups = Object.keys(specifications).map((group) => {
		return (
			<ProductSpecificationGroup title={group} specifications={specifications[group]} key={group}>
			</ProductSpecificationGroup>
		)
	})
	return (
		<div className="product-specifications-container">
			<p className="f-4xl wght-700 product-specifications-heading">Specifications</p>
			{groups}
		</div>
	)
}
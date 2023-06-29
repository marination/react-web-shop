const VariantGroup = (props) => {
	let pills = props.variants.map((variant, index) => {
		return (
			<div className="variant-pill-container" key={index}>
				{variant}
			</div>
		)
	})

	return (
		<div className="variant-group-container">
			<p className="f-normal wght-700">{props.title}</p>
			<div className="variant-pill-group d-flex">
				{pills}
			</div>
		</div>
	)
}

export const VariantSelector = (props) => {
	// props.variant_data = {"Size": ["M", "XL"], "Color": ["Red", "Blue"]}
	let groups = Object.keys(props.variant_data).map((attribute, index) => {
		return (
			<VariantGroup title={attribute} variants={props.variant_data[attribute]} key={index}>
			</VariantGroup>
		)
	})

	return (
		<div className="variant-selector-container">
			{groups}
		</div>
	)
}

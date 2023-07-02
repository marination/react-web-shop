const VariantGroup = ({title, variants}) => {
	let pills = variants.map((variant, index) => {
		return (
			<div className="variant-pill-container f-medium" key={index}>
				{variant}
			</div>
		)
	})

	return (
		<div className="variant-group-container">
			<p className="f-normal wght-700">{title}</p>
			<div className="variant-pill-group d-flex">
				{pills}
			</div>
		</div>
	)
}

export const VariantSelector = ({variant_data}) => {
	// variant_data = {"Size": ["M", "XL"], "Color": ["Red", "Blue"]}
	let groups = Object.keys(variant_data).map((attribute, index) => {
		return (
			<VariantGroup title={attribute} variants={variant_data[attribute]} key={index}>
			</VariantGroup>
		)
	})

	return (
		<div className="variant-selector-container">
			{groups}
		</div>
	)
}

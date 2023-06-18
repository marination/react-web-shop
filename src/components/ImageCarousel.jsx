import { useState } from 'react';

export const ImageCarousel = (props) => {
	let [displayImage, setdisplayImage] = useState(props.images[0]);

	return (
		<div className="product-image-container">
			<div className="vertical-image-list" style={{width: "15%"}}>
				{	
					props.images.map((image, index) => {
						return (
							<div 
								className="carousel-thumbnail"
								onClick={() => setdisplayImage(image)}
								key={index}
							>
								<img className="vertical-image" src={image}></img>
							</div>
						)
					})
				}
			</div>
			<div className="main-image-container" style={{width: "85%"}}>
				<img className="main-image" src={displayImage} alt={"Image"}></img>
			</div>
		</div>
	)
}
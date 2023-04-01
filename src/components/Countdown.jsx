import Countdown from 'react-countdown';

export const CountDown = () => {
		let today = new Date();
		today.setHours(today.getHours() + 4);

		return (
				<div className='Count-down'>
					<span>Sale ends in :&nbsp;</span>
					<span style={{"color": "#e76161"}}>
						<Countdown date={today}></Countdown>
					</span>
				</div>
		)
}
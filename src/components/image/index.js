import { createElement } from 'preact';

export const Image = props => {
	console.log(props);
	return (
		<img
			src="https://cdn.pixabay.com/photo/2012/04/13/12/23/flag-32177__480.png"
			style="width:15px; height:15px; margin-right:5px"
		/>
	);
};

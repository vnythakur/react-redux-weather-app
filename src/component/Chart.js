import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	return (
		<Sparklines data={props.data} width={100} height={80}>
			<SparklinesLine color={props.color} />
			<SparklinesReferenceLine type="mean" />
		</Sparklines>
	);
};
import { React } from 'react';
import context from '../core/context';

const SaveButton = () =>
	<button onClick={ () => context.actions.addCustomer() }>
		Save
	</button>;

export default SaveButton;

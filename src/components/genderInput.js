import { React } from 'react';

const GenderInput = (context) =>
	<label htmlFor="gender">Gender:{}
		<select
			name="gender"
			id="gender"
			onChange={ (evt) =>
				context.actions.setCustomerGender(evt.target.value) }
		>
			<option value="male">Male</option>
			<option value="female">Female</option>
		</select>
	</label>;

export default GenderInput;

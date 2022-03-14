import { rndString } from '@laufire/utils/random';

const customers = {
	addCustomer: (context) => {
		const { config, state } = context;

		return [
			...state.customerDetails,
			{
				id: rndString(config.idLength),
				name: state.name,
				phoneNo: state.phoneNo,
				gender: state.gender,
			},
		];
	},
};

export default customers;

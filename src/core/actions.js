import customers from '../services/customers';

const setCustomerName = ({ data: name }) => ({
	name,
});
const setCustomerPhoneNo = ({ data: phoneNo }) => ({
	phoneNo,
});
const setCustomerGender = ({ data: gender }) => ({
	gender,
});
const addCustomer = (context) => ({
	customerDetails: customers.addCustomer(context),
});

const actions = {
	setCustomerName,
	setCustomerPhoneNo,
	setCustomerGender,
	addCustomer,

};

export default actions;

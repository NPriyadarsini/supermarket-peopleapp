import customerManager from '../services/customerManager';

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
	customerDetails: customerManager.addCustomer(context),
});

const actions = {
	setCustomerName,
	setCustomerPhoneNo,
	setCustomerGender,
	addCustomer,

};

export default actions;

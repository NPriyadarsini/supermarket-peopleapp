import DisplayCustomerDetail from './displayCustomerDetail';

const GetCustomerDetail = (context) =>
	context.state.customerDetails.map(DisplayCustomerDetail);

export default GetCustomerDetail;

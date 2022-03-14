
import { React } from 'react';
import './App.scss';
import NameTextBox from './components/nameTextBox';
import PhoneNoTextBox from './components/phoneNoTextBox';
import GenderCheckBox from './components/genderCheckBox';
import SaveButton from './components/saveButton';
import GetCustomerDetail from './components/getCustomerDetail';

const App = (context) => <div className="App" role="App">
	<h1>Super Market - Add Customer Details</h1>
	<div className="text-box">{ NameTextBox(context)}</div>
	<div className="text-box">{ PhoneNoTextBox(context)}</div>
	<div className="text-box">{GenderCheckBox(context)}</div>
	<div className="text-box">{SaveButton(context)}</div>
	<div className="grid-container" id="grid-container">
		{ GetCustomerDetail(context)}
	</div>
</div>;

export default App;

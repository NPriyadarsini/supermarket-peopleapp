
import { React } from 'react';
import './App.scss';
import NameInput from './components/nameInput';
import PhoneNoInput from './components/phoneNoInput';
import GenderInput from './components/genderInput';
import SaveButton from './components/saveButton';
import CustomerList from './components/customerList';

const App = (context) => <div className="App" role="App">
	<h1>Super Market - Add Customer Details</h1>
	<div className="text-box">{NameInput(context)}</div>
	<div className="text-box">{PhoneNoInput(context)}</div>
	<div className="text-box">{GenderInput(context)}</div>
	<div className="text-box">{SaveButton(context)}</div>
	<div className="grid-container" id="grid-container">
		{ CustomerList(context)}
	</div>
</div>;

export default App;

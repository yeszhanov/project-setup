import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserFroms from './components/userDataForm/userDataForm';

const App = () => <UserFroms />;

export default App;

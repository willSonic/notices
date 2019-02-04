import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { NotificationReducer} from "./snackbar/data_layer";

const mockStore = configureMockStore();

 const initialState = {
  notificationCollection:[],
};

const state =  NotificationReducer(initialState, {});

const store = mockStore({ NotificationReducer: state })
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
   <Provider store={store}>
     <App />
   </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

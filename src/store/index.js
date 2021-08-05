import { createStore } from "redux";
import contacts from './contactReducer'

const store = createStore(contacts);

export default store
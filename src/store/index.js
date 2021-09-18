import { createStore, combineReducers } from 'redux';

import { EmployeeReducer } from './reducer';

const rootReducer = combineReducers({
    employeeReducer: EmployeeReducer
})

export const store = createStore(rootReducer);
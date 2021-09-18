export const selectEmployees = (state) => state.employeeReducer.employees;

export const selectEmployeLeaves = (state, id) => state.employeeReducer.leaves[id] || [];
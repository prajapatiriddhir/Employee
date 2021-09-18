export const createEmployeeAction = (payload) => ({ type: 'CREATE_EMPLOYEE', payload });

export const deleteEmployeeAction = (id) => ({ type: 'DELETE_EMPLOYEE', payload: id });

export const editEmployeeAction = (_id, payload) => ({ type: 'EDIT_EMPLOYEE', payload: { _id, data: payload } })

export const deleteLeaveAction = (payload) => ({ type: "DELETE_LEAVE", payload })
import moment from "moment"

const mockEmployees = [
    {
        _id: "1234567",
        firstName: 'Riddhi',
        lastName: 'Prajapati',
        email: 'riddhi@gmail.com',
        mobileNo: '9999999999',
        dob: moment('05-12-1999').toDate(),
    }
]

function getMockLeaves(id) {
    return new Array(5).fill(0).map(() => ({
        date: moment().subtract(Math.round(Math.random() * 30), 'day'),
        employeeId: id,
        _id: String(Math.round(Math.random() * 10000000))
    }))
}

const initialState = {
    employees: mockEmployees,
    leaves: mockEmployees.reduce((prev, curr) => {
        prev[curr._id] = getMockLeaves(curr._id)
        return prev;
    }, {}),
}

const EmployeeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(x => x._id !== payload)
            }
        case 'CREATE_EMPLOYEE':
            return {
                ...state,
                employees: [payload, ...state.employees],
                leaves: {
                    ...state.leaves,
                    [payload._id]: getMockLeaves(payload._id)
                }
            }
        case 'EDIT_EMPLOYEE':
            const index = state.employees.findIndex(x => x._id === payload._id);
            const updated = [...state.employees];
            updated[index] = {
                ...payload.data,
                _id: payload._id,
            }
            return {
                ...state,
                employees: [...updated]
            }
        case 'DELETE_LEAVE':
            return {
                ...state,
                leaves: {
                    ...state.leaves,
                    ...payload,
                }
            }
        default:
            return state;
    }
}

export default EmployeeReducer;
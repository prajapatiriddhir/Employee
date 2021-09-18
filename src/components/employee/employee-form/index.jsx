import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import { createEmployeeAction, editEmployeeAction } from "../../../store/action";
import { selectEmployees } from "../../../store/selector";

const validationSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    mobileNo: yup.number().required('Mobile no is required'),
    dob: yup.date().required('Date of birth is required')
})

export function EmployeeForm({ onClose, initialValues, edit }) {
    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);

    const validateEmployee = (data) => {
        const isAlreadyExists = employees.find(x => x.email === data.email || x.mobileNo === data.mobileNo);
        if (isAlreadyExists) {
            throw new Error('Employee already exists with this details');
        }
        return true;
    }

    const { values, handleSubmit, handleBlur, touched, errors, handleChange, dirty, isValid } = useFormik({
        initialValues, validationSchema, enableReinitialize: true, onSubmit: (formValues) => {
            try {
                validateEmployee(formValues);
                if (edit) {
                    dispatch(editEmployeeAction(initialValues._id, { ...formValues }))
                } else {
                    dispatch(createEmployeeAction({ ...formValues, _id: Math.round(Math.random() * 10000000) }))
                }
                onClose();
            } catch (err) {
                window.alert(err.message);
            }

        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <TextField placeholder="First Name" name="firstName" fullWidth margin="dense" value={values.firstName} onBlur={handleBlur}
                helperText={touched.firstName && errors.firstName}
                error={touched.firstName && Boolean(errors.firstName)} onChange={handleChange} />
            <TextField placeholder="Last Name" fullWidth margin="dense" value={values.lastName} name="lastName" onBlur={handleBlur}
                helperText={touched.lastName && errors.lastName}
                error={touched.lastName && Boolean(errors.lastName)} onChange={handleChange} />
            <TextField placeholder="Email" fullWidth margin="dense" value={values.email} name="email" onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)} onChange={handleChange} />
            <TextField placeholder="Mobile Number" fullWidth margin="dense" type="number" value={values.mobileNo} name="mobileNo" onBlur={handleBlur}
                helperText={touched.mobileNo && errors.mobileNo}
                error={touched.mobileNo && Boolean(errors.mobileNo)} onChange={handleChange} />
            <TextField type="date" value={moment(values.dob).format('YYYY-MM-DD')} fullWidth margin="dense" name="dob" onBlur={handleBlur}
                helperText={touched.dob && errors.dob}
                error={touched.dob && Boolean(errors.dob)} onChange={handleChange} />
            <Box marginTop={2} display="flex" justifyContent="flex-end">
                <Button type="button" variant="contained" color="error" disableRipple disableElevation style={{ marginRight: 16 }} onClick={onClose}>
                    Close
                </Button>
                <Button variant="contained" color="primary" disableRipple disableElevation type="submit" disabled={!dirty || !isValid}>
                    {edit ? 'Edit' : "Create"}
                </Button>
            </Box>
        </form>
    )
}
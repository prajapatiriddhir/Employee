import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { EmployeeForm } from '../employee-form';

export function EmployeeDialog({ edit, ...props }) {
    return (
        <Dialog {...props} fullWidth>
            <DialogTitle style={{ fontWeight: 'bold' }}>
                {edit ? 'Edit Employee' : 'Create Employee'}
            </DialogTitle>
            <DialogContent>
                <EmployeeForm onClose={props.onClose} initialValues={edit ? { ...edit } : { firstName: '', lastName: '', dob: '', mobileNo: '', email: '' }} edit={!!edit} />
            </DialogContent>

        </Dialog>
    )
}
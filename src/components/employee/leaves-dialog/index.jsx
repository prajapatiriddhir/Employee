import { Delete } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText } from "@mui/material";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteLeaveAction } from "../../../store/action";
import { selectEmployeLeaves } from "../../../store/selector";

export function EmployeeLeaveDialog({ employeeId, ...props }) {
    const dispatch = useDispatch();
    const leaves = useSelector((state) => selectEmployeLeaves(state, employeeId));

    const handleDelete = (_id) => {
        const answer = window.confirm('Are you sure you want to delete it?');
        if (answer) {
            dispatch(deleteLeaveAction({ [employeeId]: leaves.filter(x => x._id !== _id) }))
            props.onClose();
        }
    }
    return (
        <Dialog {...props} fullWidth>
            <DialogTitle style={{ fontWeight: 'bold' }}>
                Employee Leaves
            </DialogTitle>
            <DialogContent>
                <List>
                    {leaves.map((leave, i) => (
                        <ListItem color="#1e90ff" key={i} secondaryAction={(
                            <IconButton color="error" onClick={() => handleDelete(leave._id)}>
                                <Delete />
                            </IconButton>
                        )}>
                            <ListItemText primary={`- Leave on ${moment(leave.date).format('DD MMM YYYY')}`} />
                        </ListItem>
                    ))}

                </List>
            </DialogContent>

        </Dialog>
    )
}
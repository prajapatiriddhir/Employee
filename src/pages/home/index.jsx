import { useState } from "react";

import { Add, Delete, Edit } from "@mui/icons-material";
import { Button, Container, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import { EmployeeDialog, EmployeeLeaveDialog } from "../../components/employee";
import { selectEmployees } from '../../store/selector';
import { deleteEmployeeAction } from "../../store/action";

export function HomePage() {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(null);
    const [leaveId, setLeaveId] = useState('');
    const employees = useSelector(selectEmployees);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        const answer = window.confirm('Are you sure you want to delete this?');
        if (answer) {
            dispatch(deleteEmployeeAction(id))
        }
    }

    const openCreateModal = () => {
        setEdit(null);
        setOpen(true);
    }

    const openEditModal = (data) => {
        setOpen(true);
        setEdit(data);
    }

    const closeModal = () => {
        setOpen(false);
        setEdit(null);
    }

    const openLeaveModal = (id) => {
        setLeaveId(id);
    }

    const closeLeaveModal = () => {
        setLeaveId('');
    }

    return (
        <Container>
            <Box display="flex" flex={1} flexDirection="column" paddingY={4}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography fontWeight="bold" variant="h5">Employee Management</Typography>
                    <Button startIcon={<Add />} onClick={openCreateModal} variant="contained" color="primary" disableElevation disableRipple>Create</Button>
                </Box>

                <Box>
                    <List>
                        {employees.map((element, i) => (
                            <ListItem key={String(element._id)} secondaryAction={(
                                <Box>
                                    <Button color="primary" variant="contained" disableRipple disableElevation size="small" onClick={() => openLeaveModal(element._id)}>
                                        Leaves
                                    </Button>
                                    <IconButton color="primary" onClick={() => openEditModal(element)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(element._id)}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            )}>
                                <ListItemText primary={`${i + 1}. ${element.firstName} ${element.lastName} (${moment(element.dob).format('DD-MM-YYYY')})`} secondary={`${element.email} - ${element.mobileNo}`} />

                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
            <EmployeeDialog open={open} onClose={closeModal} edit={edit} />
            <EmployeeLeaveDialog open={!!leaveId} onClose={closeLeaveModal} employeeId={leaveId} />
        </Container>
    )
}
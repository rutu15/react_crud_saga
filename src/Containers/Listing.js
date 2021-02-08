import React, {useEffect, useState} from 'react';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,

} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStudent, deleteStudent, createStudent} from "../redux/Actions";
import Modal from "./Modal"
/* Styles */
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});

function Listing() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(state => state.GetUserReducer.data);
    const loading = useSelector(state => state.GetUserReducer.loading);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false)
    const [studentData, setStudentData] = useState({
        Sid:0,
        name: '',
        email: '',
        course: ''
    })
    useEffect(() => {
        dispatch(fetchStudent());
    }, []);

    const handleClose = () => {
        setOpen(false);
        setEdit(false);
        setStudentData({})
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setStudentData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        loading ? <div>Loading</div> :
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.course}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained" color="primary" onClick={
                                            function () {
                                                setEdit(true);
                                                setStudentData({Sid:item.id,name:item.name,email: item.email,course: item.course})
                                            }
                                        }>Edit</Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => {
                                            dispatch(deleteStudent(item.id))
                                        }} variant="contained" color="primary">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow><TableCell><Button onClick={() => setOpen(true)} variant="contained"
                                                         color="primary">Add</Button></TableCell></TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Modal
                    open={edit || open}
                    handleClose={() => handleClose()}
                    handleInputChange={(e) => handleInputChange(e)}
                    handleSubmit={function () {
                        dispatch(createStudent(studentData));
                        handleClose()
                    }}
                    isEdit={edit}
                    data={studentData}
                />
            </div>
    );
}

export default Listing;

import React from 'react'
import Container from '@mui/material/Container';
import { makeStyles, } from '@mui/styles';
import { Box, Grid, TextField, Paper, Button, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
const currencies = [
    {
        value: 'Murshidabad',
        block: ['1', '2', '3'],
    },
    {
        value: 'maldah',
        block: ['4', '5', '6'],
    },
    {
        value: 'nodia',
        block: ['7', '8', '9'],
    },
    {
        value: 'bardhaman',
        block: ['10', '11', '12'],
    },
];

const useStyles = makeStyles({
    TopImg: {
        width: "100%",
        display: 'block',
        objectFit: 'cover',
        height: 'auto'
    },
    overlay: {
        position: "absolute",
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 2,
        cursor: "pointer",
    },
    fixedSidebar: {
        position: 'sticky',
        top: '0',

    },
    mainOverLay: {
        position: "relative",
    },
    secontInput: {
        width: '39ch !important'
    },
    buttonWidth: {
        width: '85ch',
        backgroundColor: '#b53f3f !important',
        marginBottom: '20px !important'
    },
});
function Joinus() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [userRecords, setuserRecords] = React.useState({
        SchoolName: "",
        TeacherName: "",
        MobileNumber: "",
        Qualification: "",
        OtherQualification: "",
        TotalNoOfTeacherOnYourSchool: "",
        TotalNoOfNonTeacherOnYourSchool: "",
        district: "murshidabad",
        block: "",
        teacherType: "",
        DateOfJoining: "",
        Birthday: "",
    })
    const [block, setBlock] = React.useState([]);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRecords({ ...userRecords, [name]: value });
        
        if (name === 'district') {
            const obj = currencies.find(e =>e.value === value);
        setBlock(obj.block)
        }
        console.log(userRecords);
    }
    const subscribe = async () => {
        const item = { userRecords }
        const response = await axios.post('http://localhost:8000/admin/user', item).then((e) => {
            console.log(e);
        }

        )
        console.log(response);
    }
   
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                        <Box className={classes.SubscriptionForm}>
                            <h2 style={{ textAlign: 'center' }}>সাবস্ক্রিপশন ফর্ম</h2>
                            
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Paper elevation={3} style={{ paddingTop: '20px' }} spacing={1}  >
                                    <div className="pcenter">
                                        <TextField
                                            onChange={HandleInput}
                                            id="outlined-error-helper-text"
                                            label="School Name"
                                            defaultValue="Jayson Title"
                                            helperText="Please Enter Your School Name"
                                            name="SchoolName"
                                        />
                                        <TextField
                                            onChange={HandleInput}
                                            id="TeacherName"
                                            label="Teacher Name"
                                            defaultValue="Jayson Holder"
                                            helperText="Please Enter Your Sweet Name."
                                            name="TeacherName"
                                        />
                                        <TextField
                                        onChange={HandleInput}
                                            id="Teacher Type"
                                            label="Teacher Type"
                                            defaultValue="Teacher Type"
                                            helperText="Please Enter Your Type"
                                            name='teacherType'
                                        />
                                    </div>

                                    <div className="pcenter">
                                        <TextField
                                            className={classes.formControl}
                                            id="filled-select-currency-native"
                                            select
                                            label="District"
                                            value={userRecords.district}
                                            onChange={HandleInput}
                                            SelectProps={{ native: true, }}
                                            name='district'
                                            helperText="Please select your currency"
                                            variant="outlined"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.value}
                                                </option>
                                            ))}
                                        </TextField>
                                        <TextField
                                            className={classes.formControl}
                                            id="filled-select-currency-native"
                                            select
                                            label="Block"
                                            value={userRecords.block}
                                            onChange={HandleInput}
                                            SelectProps={{ native: true, }}
                                            name='block'
                                            helperText="Please select your currency"
                                            variant="outlined"
                                        >
                                            {block.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </TextField>
                                        {/* <TextField
                                            className={classes.formControl}
                                            id="filled-select-currency-native"
                                            select
                                            label="Block"
                                            value={userRecords.block}
                                            onChange={HandleInput}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            name='block'
                                            helperText="Please select your currency"
                                            variant="outlined"
                                        > */}
                                            {/* {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.value}
                                                </option>
                                            ))} */}

                                                {/* {block.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))} */}

                                            {/* {
                                                block.map((value) => {
                                                    return (<option key={value} value={value}>
                                                    {value}
                                                </option>)
                                                })
                                            } */}

                                            
                                        {/* </TextField> */}
                                        <TextField
                                            onChange={HandleInput}
                                            id="outlined-error-helper-text"
                                            label="Mobile Number"
                                            defaultValue="Enter Your Mobile Number"
                                            helperText="Mobile Number"
                                            type='number'
                                            name="MobileNumber"
                                        />
                                    </div>

                                    <div className="pcenter">
                                        <TextField
                                            onChange={HandleInput}
                                            id="outlined-error-helper-text"
                                            label="Qualification"
                                            defaultValue="Qualification"
                                            helperText="Please Enter Your Qualification"
                                            name="Qualification"

                                        />
                                        <TextField
                                            onChange={HandleInput}
                                            id="outlined-error-helper-text"
                                            label="Other Qualification"
                                            defaultValue="Other Qualification"
                                            helperText="Enetr Your Other Qualification"
                                            name="OtherQualification"
                                        />
                                        <TextField
                                            onChange={HandleInput}
                                            id="outlined-error-helper-text"
                                            label="Total No Of Teacher On Your School"
                                            defaultValue="45"
                                            helperText="Total No Of Teacher On Your School"
                                            name="TotalNoOfTeacherOnYourSchool"
                                        />
                                    </div>
                                </Paper>
                                <Paper style={{ marginTop: '20px' }} elevation={3} spacing={1} >
                                    <div className="pcenter">
                                        <TextField
                                            onChange={HandleInput}
                                            className={classes.secontInput}
                                            id="outlined-error-helper-text"
                                            label="Total No Of Non-Teacher On Your School"
                                            defaultValue="Total No Of Non-Teacher On Your School"
                                            helperText="Enetr Your Total No Of Non-Teacher On Your School"
                                            name="TotalNoOfNonTeacherOnYourSchool"
                                        />
                                        <TextField
                                            onChange={HandleInput}
                                            className={classes.secontInput}
                                            id="outlined-error-helper-text"
                                            label="Total No Of Student On Your School"
                                            defaultValue="45"
                                            helperText="Total No Of Student On Your School"
                                            name="TotalNoOfStudentOnYourSchool"
                                        />
                                    </div>

                                    <div className="pcenter">
                                        <TextField
                                            onChange={handleDateChange}
                                            onChange={HandleInput}
                                            defaultValue={selectedDate}
                                            className={classes.secontInput}
                                            id="DateOfJoining"
                                            label="Date Of Joining"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}

                                            name="DateOfJoining"
                                        />

                                        <TextField
                                            onChange={handleDateChange}
                                            onChange={HandleInput}
                                            defaultValue={selectedDate}
                                            className={classes.secontInput}

                                            id="Birthday"
                                            label="Birthday"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            name="Birthday"
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            className={classes.buttonWidth}
                                            startIcon={<SaveIcon />}
                                            onClick={subscribe}
                                        >
                                            Save
                                        </Button>
                                    </div>

                                </Paper>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Joinus

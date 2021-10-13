import React from 'react'
import Container from '@mui/material/Container';
import { makeStyles, } from '@mui/styles';
import { Box, Grid, TextField, Paper, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
const currencies = [
    {
        value: '24 PARAGANAS NORTH',
        block: ['AMDANGA', 'BADURIA', 'BAGDAH', 'BANGAON', 'BARASAT-I', 'BARASAT-II', 'BARRACKPORE-I', 'BARRACKPORE-II', 'BASIRHAT-I', 'BASIRHAT-II', 'DEGANGA', 'GAIGHATA', 'HABRA-I', 'HABRA-II', 'HAROA', 'HASNABAD', 'HINGALGANJ', 'MINAKHA', 'RAJARHAT', 'SANDESHKHALI-I', 'SANDESHKHALI-II', 'SWARUPNAGAR'],
        Municipalaty: ['Ashokenagar-Kalyangarh Municipality', 'Baduria Municipality', 'ABaranagar Municipality', 'Barasat Municipality', 'Barrackpore Municipality', 'Barrackpore Cantonment Board', 'Basirhat Municipality', 'Bhatpara Municipality', 'Bidhannagar Municipality', 'Bongaon Municipality', 'Dum Dum', 'Garulia Municipality', 'Gobardanga Municipality', 'Habra', 'Halishar Municipality', 'Kamarhati Municipality', 'Kanchrapara Municipality', 'Khardah Municipality', 'Madhyamgram', 'Naihati Municipality', 'New Barrackpore Municipality', 'North Barrackkpore Municipality', 'North Dum Dum Municipality', 'Panihati Municipality', 'Rajarhat Gopalpur Municipality', 'South Dum Dum Municipality', 'Taki Municipality', 'Titagarh Municipality',]
    },
    {
        value: '24 PARAGANAS SOUTH',
        block: ['BARUIPUR', 'BASANTI', 'BHANGAR-I', 'BHANGAR-II', 'BISHNUPUR-I', 'BISHNUPUR-II', 'BUDGE BUDGE-I', 'BUDGE BUDGE-II', 'CANNING-I', 'CANNING-II', 'DIAMOND HARBOUR-I', 'DIAMOND HARBOUR-II', 'FALTA', 'GOSABA', 'JAYNAGAR-I', 'JAYNAGAR-', 'KAK DWIP', 'KULPI', 'KULTALI', 'MAGRA HAT-I', 'MAGRA HAT-II', 'MANDIRBAZAR', 'MATHURAPUR I', 'MATHURAPUR-II', 'NAMKHANA', 'PATHAR PRATIMA', 'SAGAR', 'SONAR PUR', 'THAKURPUKUR MAHESTOLA'],
        Municipalaty: ['Baruipur Municipality', 'Budge Budge Municipality', 'Diamond Harbour Municipality', 'Jaynagar-Mazilpur Municipality', 'Maheshtala Municipality', 'Pujali Municipality', 'Rajpur-Sonarpur Municipality',]
    },
    {
        value: 'ALIPURDUAR',
        block: ['ALIPURDUAR-I', 'ALIPURDUAR-II', 'FALAKATA', 'KALCHINI', 'KUMARGRAM', 'MADARIHAT'],
        Municipalaty: ['Alipurduar Municipality']
    },
    {
        value: 'BANKURA',
        block: ['BANKURA-I', 'BANKURA-II', 'BARJORA', 'CHHATNA', 'GANGAJAL GHATI', 'HIRBANDH', 'INDPUR', 'INDUS', 'JOYPUR', 'KHATRA', 'KOTULPUR', 'MEJHIA', 'ONDA', 'PATRASAYER', 'RAIPUR', 'RANIBUNDH', 'SALTORA', 'SARENGA', 'SIMLAPAL', 'SONAMUKHI', 'TALDANGRA', 'VISHNUPUR',],
        Municipalaty: ['Bankura Municipality', 'Bishnupur Municipality', 'Sonamukhi Municipality',]
    },
    {
        value: 'BIRBHUM',
        block: ['BOLPUR-SRINIKETAN', 'DUBRAJPUR', 'ILLAMBAZAR', 'KHOYRASOL', 'LABPUR', 'MAYURESWAR-I', 'MAYURESWAR-II', 'MOHAMMAD BAZAR', 'MURARAI-I', 'MURARAI-II', 'NALHATI-I', 'NALHATI-II', 'NANOOR', 'RAJNAGAR', 'RAMPURHAT-I', 'RAMPURHAT-II', 'SAINTHIA', 'SURI-I', 'SURI-II'],
        Municipalaty: ['Bolpur Municipality', 'Dubrajpur Municipality', 'Nalhati Municipality', 'Rampurhat Municipality', 'Sainthia Municipality', 'Suri Municipality',]
    },
    {
        value: 'COOCHBIHAR',
        block: ['COOCH BEHAR II', 'COOCH BEHAR-I', 'DINHATA-I', 'DINHATA-II', 'HALDIBARI', 'MATHA BHANGA-II', 'MATHABHANGA-I', 'MEKLIGANJ', 'SITAI', 'SITALKUCHI', 'TUFANGANJ-I', 'TUFANGANJ-II'],
        Municipalaty: ['Cooch Behar Municipality', 'Dinhata Municipality', 'Haldibari Municipality', 'Mathabhanga Municipality', 'Mekhliganj Municipality', 'Tufanganj Municipality']
    },
    {
        value: 'DARJEELING',
        block: ['DARJEELING PULBAZAR', 'JOREBUNGLOW SUKHIA POKHARI', 'KHORIBARI', 'KURSEONG', 'MATIGARA', 'MIRIK', 'NAKSHALBARI', 'PHANSIDEWA', 'RONGLI- RONGLIOT'],
        Municipalaty: ['Darjeeling Municipality', 'Kurseong Municipality', 'Siliguri Municipality Corporation'],
    },
    {
        value: 'DINAJPUR DAKSHIN',
        block: ['Balurghat', 'Bansihari', 'Gangarampur', 'Harirampur', 'Hili', 'Kumarganj', 'Kushmandi', 'Tapan'],
        Municipalaty: ['Balurghat Municipality', 'Buniadpur Municipality', 'Gangarampur Municipality']
    },
    {
        value: 'DINAJPUR UTTAR',
        block: ['CHOPRA', 'GOALPOKHAR II', 'GOALPOKHAR-I', 'HEMTABAD', 'ISLAMPUR', 'ITAHAR', 'KALIAGANJ', 'KARANDIGHI', 'RAIGANJ'],
        Municipalaty: ['Dalkhola Municipality', 'Islampur Municipality', 'Kaliyaganj Municipality', 'Raiganj Municipality']
    },
    {
        value: 'HOOGLY',
        block: ['ARAMBAGH', 'BALAGARH', 'CHANDITALA-I', 'CHANDITALA-II', 'CHINSURAH-MOGRA', 'DHANIAKHALI', 'GOGHAT-I', 'GOGHAT-II', 'HARIPAL', 'JANGIPARA', 'KHANAKUL-I', 'KHANAKUL-II', 'PANDUA', 'POLBA-DADPUR', 'PURSURAH', 'SINGUR', 'SRIRAMPORE-UTTARPARA', 'TARAKESWAR'],
        Municipalaty: ['Arambagh Municipality', 'Baidyabati Municipality', 'Bansberia Municipality', 'Bhadreswar Municipality', 'Champadany Municipality', 'Chandernagar Municipal Corporation', 'Dankuni Municipality', 'Hooghly-Chinsurah Municipality', 'Konnagar Municipality', 'Rishra Municipality', 'Serampore Municipality', 'Tarakeswar Municipality', 'Uttarpara Kotrung Municipality',]
    },
    {
        value: 'HOWRAH',
        block: ['AMTA-I', 'AMTA-II', 'BAGNAN-I', 'BAGNAN-II', 'BALLY-JAGACHA', 'DOMJUR', 'JAGATBALLAVPUR', 'PANCHLA', 'SANKRAIL', 'SHYAMPUR-I', 'SHYAMPUR-II', 'UDAYNARAYANPUR', 'ULUBERIA-I', 'ULUBERIA-II'],
        Municipalaty: ['Bally Municipality', 'Howrah Municipality Corporation', 'Uluberia Municipality']
    },
    {
        value: 'JALPAIGURI',
        block: ['DHUPGURI', 'JALPAIGURI', 'MAL', 'MATIALI', 'MAYNAGURI', 'NAGRAKATA', 'RAJGANJ'],
        Municipalaty: ['Dhupguri Municipality', 'Jalpaiguri Municipality', 'Jaygaon Municipality', 'Mal Municipality', 'Siliguri Municipality Corporation',]
    },
    {
        value: 'JHARGRAM',
        block: ['BINPUR-I', 'BINPUR-II', 'GOPIBALLAV PUR -II', 'GOPIBALLAVPUR-I', 'JAMBANI', 'JHARGRAM', 'NAYAGRAM', 'SANKRAIL'],
        Municipalaty: ['Jhargram Municipality']
    },
    {
        value: 'KALIMPONG',
        block: ['GARUBATHAN', 'KALIMPONG-I', 'KALIMPONG-II'],
        Municipalaty: ['Kalimpong Municipality']
    },
    {
        value: 'MALDA',
        block: ['BAMONGOLA', 'CHANCHAL-I', 'CHANCHAL-II', 'ENGLISH BAZAR', 'GAZOLE', 'HABIBPUR', 'HARISHCHANDRAPUR-I', 'HARISHCHANDRAPUR-', 'KALIACHAK-I', 'KALIACHAK-II', 'KALIACHAK-III', 'MANIKCHAK', 'OLD MALDA', 'RATUA-I', 'RATUA-II'],
        Municipalaty: ['English Bazar Municipality', 'Old Malda Municipality']
    },
    {
        value: 'MURSHIDABAD',
        block: ['BELDANGA- I', 'BELDANGA-II', 'BERHAMPORE', 'BHAGAWANGOLA-II', 'BHAGOBANGOLA- I', 'BHARATPUR-I', 'BHARATPUR-II', 'BURWAN', 'DOMKAL', 'FARAKKA', 'HARIHARPARA', 'JALANGI', 'KANDI', 'KHARGRAM', 'LALGOLA', 'MURSHIDABAD-JIAGUNJ', 'NABAGRAM', 'NAWDA', 'RAGHUNATHGANJ-I', 'RAGHUNATHGANJ-II', 'RANINAGAR-I', 'RANINAGAR-II', 'SAGARDIGHI', 'SAMSHERGANJ', 'SUTI-I', 'SUTI-II'],
        Municipalaty: ['Beldanga Municipality', 'Berhampur Municipality', 'Dhulian Municipality', 'Domkal Municipality', 'Jangipur Municipality', 'Jiaganj-Azimganj Municipality', 'Kandi Municipality', 'Murshidabad Municipality'],
    },
    {
        value: 'NADIA',
        block: ['CHAKDAH', 'CHAPRA', 'HANSKHALI', 'HARINGHATA', 'KALIGANJ', 'KALYANI', 'KARIMPUR-1', 'KARIMPUR-II', 'KRISHNAGANJ', 'KRISHNAGAR-I', 'KRISHNAGAR-II', 'NABADWIP', 'NAKASHIPARA', 'RANAGHAT-I', 'RANAGHAT-II', 'SANTIPUR', 'TEHATTA-I', 'TEHATTA-II'],
        Municipalaty: ['Birnagar Municipality', 'Chakdah Municipality', 'Coopers Camp Municipality', 'Gayeshpur Municipality', 'Haringhata Municipality', 'Kalyani Municipality', 'Krishnagar Municipality', 'Nabadwip Municipality', 'Ranaghat Municipali', 'Santipur Municipality', 'Taherpur Municipality',]
    },
    {
        value: 'PASCHIM BURDWAN',
        block: ['ANDAL', 'BARABANI', 'DURGAPUR FARIDPUR', 'JAMURIA', 'KANKSA', 'PANDABESHWAR', 'RANIGANJ', 'SALANPUR'],
        Municipalaty: ['Asansol Municipality Corporation', 'Durgapur Municipality Corporation', 'Jamuria Municipality', 'Kulti Municipality', 'Raniganj Municipality',]
    },
    {
        value: 'PASCHIM MEDINIPUR',
        block: ['CHANDRAKONA-I', 'CHANDRAKONA-II', 'DANTAN-I', 'DANTAN-II', 'DASPUR-I', 'DASPUR-II', 'DEBRA', 'GARBETA-I', 'GARBETA-II', 'GARBETA-III', 'GHATAL', 'KESHIARY', 'JAMURIA', 'JAMURIA', 'JAMURIA', 'JAMURIA', 'JAMURIA', 'JAMURIA', 'JAMURIA', 'JAMURIA', 'JAMURIA'],
        Municipalaty: ['Chandrakona Municipality', 'Ghatal Municipality', 'Khargapur Municipality', 'Kharar Municipality', 'Khirpai Municipality', 'Midnapur Municipality', 'Ramjibanpur Municipality',]
    },
    {
        value: 'PURBA BURDWAN',
        block: ['AUSGRAM-I', 'AUSGRAM-II', 'BHATAR', 'BURDWAN-II', 'GALSI-I', 'GALSI-II', 'JAMALPUR', 'KALNA-I', 'KALNA-II', 'KATWA-I', 'KATWA-II', 'KETUGRAM-I', 'KETUGRAM-II', 'KHANDAGHOSH', 'MANTESWAR', 'MEMARI-I', 'MEMARI-II', 'MONGOLKOTE', 'PURBASTHALI-I', 'PURBASTHALI-II', 'RAINA-I', 'RAINA-II'],
        Municipalaty: ['Burdwan Municipality', 'Dainhat Municipality', 'Gushkara Municipality', 'Kalna Municipality', 'Katwa Municipality', 'Memari Municipality',]
    },
    {
        value: 'PURBA MEDINIPUR',
        block: ['BHAGWANPUR-I', 'BHAGWANPUR-II', 'CHANDIPUR', 'CONTAI-I', 'CONTAI-III', 'DESHAPRAN', 'EGRA-I', 'EGRA-II', 'HALDIA', 'KHEJURI-I', 'KHEJURI-II', 'KOLAGHAT', 'MAHISHADAL', 'MOYNA', 'NANDAKUMAR', 'NANDIGRAM-I', 'NANDIGRAM-II', 'PANSKURA-I', 'PATASHPUR-I', 'PATASHPUR-II', 'RAMNAGAR-I', 'RAMNAGAR-II', 'SHAHID MATANGINI', 'SUTAHATA', 'TAMLUK'],
        Municipalaty: ['Contai   Municipality', 'Egra Municipality', 'Haldia Municipality', 'Pansukra Municipality', 'Tamluk Municipality',],
    },
    {
        value: 'PURULIA',
        block: ['ARSHA', 'BAGMUNDI', 'BALARAMPUR', 'BARABAZAR', 'BUNDWAN', 'HURA', 'JAIPUR', 'JHALDA-I', 'JHALDA-II', 'KASHIPUR', 'MANBAZAR-I', 'MANBAZAR-II', 'NETURIA', 'PARA', 'PUNCHA', 'PURULIA-I', 'PURULIA-II', 'RAGHUNATH PUR-I', 'RAGHUNATHPUR-II', 'SANTURI'],
        Municipalaty: ['Jhalda Municipality', 'Purulia Municipality', 'Raghunathpur Municipality'],
    },
    {
        value: 'KOLKATA',
        block: [],
        Municipalaty: ['WARD- 001', 'WARD- 002', 'WARD- 003', 'WARD- 004', 'WARD- 005', 'WARD- 006', 'WARD- 007', 'WARD- 008', 'WARD- 009', 'WARD- 010', 'WARD- 011', 'WARD- 012', 'WARD- 013', 'WARD- 014', 'WARD- 015', 'WARD- 016', 'WARD- 017', 'WARD- 018', 'WARD- 019', 'WARD- 020', 'WARD- 021', 'WARD- 022', 'WARD- 023', 'WARD- 024', 'WARD- 025', 'WARD- 026', 'WARD- 027', 'WARD- 028', 'WARD- 029', 'WARD- 030', 'WARD- 031', 'WARD- 032', 'WARD- 033', 'WARD- 034', 'WARD- 035', 'WARD- 036', 'WARD- 037', 'WARD- 038', 'WARD- 039', 'WARD- 040', 'WARD- 041', 'WARD- 042', 'WARD- 043', 'WARD- 044', 'WARD- 045', 'WARD- 046', 'WARD- 047', 'WARD- 048', 'WARD- 049', 'WARD- 050', 'WARD- 051', 'WARD- 052', 'WARD- 053', 'WARD- 054', 'WARD- 055', 'WARD- 056', 'WARD- 057', 'WARD- 058', 'WARD- 059', 'WARD- 060', 'WARD- 061', 'WARD- 062', 'WARD- 063', 'WARD- 064', 'WARD- 065', 'WARD- 066', 'WARD- 067', 'WARD- 068', 'WARD- 069', 'WARD- 070', 'WARD- 071', 'WARD- 072', 'WARD- 073', 'WARD- 074', 'WARD- 075', 'WARD- 076', 'WARD- 077', 'WARD- 078', 'WARD- 079', 'WARD- 080', 'WARD- 081', 'WARD- 082', 'WARD- 083', 'WARD- 084', 'WARD- 085', 'WARD- 086', 'WARD- 087', 'WARD- 088', 'WARD- 089', 'WARD- 090', 'WARD- 091', 'WARD- 092', 'WARD- 093', 'WARD- 094', 'WARD- 095', 'WARD- 096', 'WARD- 097', 'WARD- 098', 'WARD- 099', 'WARD- 100', 'WARD- 101', 'WARD- 102', 'WARD- 103', 'WARD- 104', 'WARD- 105', 'WARD- 106', 'WARD- 107', 'WARD- 108', 'WARD- 109', 'WARD- 110', 'WARD- 111', 'WARD- 112', 'WARD- 113', 'WARD- 114', 'WARD- 115', 'WARD- 116', 'WARD- 117', 'WARD- 118', 'WARD- 119', 'WARD- 120', 'WARD- 121', '122', 'WARD- 123', 'WARD- 124', 'WARD- 125', 'WARD- 126', 'WARD- 127', 'WARD- 128', 'WARD- 129', 'WARD- 130', 'WARD- 131', 'WARD- 132', 'WARD- 133', 'WARD- 134', 'WARD- 135', 'WARD- 136', 'WARD- 137', 'WARD- 138', 'WARD- 139', 'WARD- 140', 'WARD- 141', 'WARD- 142', 'WARD- 143', 'WARD- 144', 'WARD- 145', 'WARD- 146', 'WARD- 147', 'WARD- 148', 'WARD- 149'],
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

    const [selectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

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
    const [muni, setMuni] = React.useState([]);
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRecords({ ...userRecords, [name]: value });

        if (name === 'district') {
            const obj = currencies.find(e => e.value === value);
            setBlock(obj.block)
        }
        if (name === 'district') {
            const Munis = currencies.find(e => e.value === value);
            setMuni(Munis.Municipalaty)

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
                            <h2 style={{ textAlign: 'center' }}>সদস্যপদ গ্রহণ</h2>

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
                                            className={classes.secontInput}
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

                                    </div>
                                    <div className='pcenter'>
                                        <TextField

                                            onChange={HandleInput}
                                            id="Teacher Type"
                                            label="Teacher Type"
                                            defaultValue="Teacher Type"
                                            helperText="Please Enter Your Type"
                                            name='teacherType'
                                        />


                                        <TextField
                                            className={classes.secontInput}
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
                                    </div>
                                    <div className="pcenter">

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
                                            <option >
                                                NA
                                            </option>
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
                                            className={classes.formControl}
                                            id="filled-select-currency-native"
                                            select
                                            label="Municipalaty"
                                            value={userRecords.Municipalaty}
                                            onChange={HandleInput}
                                            SelectProps={{ native: true, }}
                                            name='Municipalaty'
                                            helperText="Municipalaty"
                                            variant="outlined"
                                        >
                                            <option >
                                                NA
                                            </option>
                                            {muni.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </TextField>
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
                                            // onChange={handleDateChange}
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
                                            // onChange={handleDateChange}
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

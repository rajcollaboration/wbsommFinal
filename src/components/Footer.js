import React from 'react'
import { styled } from '@mui/material/styles';
import { makeStyles, } from '@mui/styles';
import { Box, Paper, Grid, Container, TextField, Button } from '@mui/material';
// import { Grid3x3 } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#fff0',
    color: '#f5f2f2de',
    height:'100%'
}));
const useStyle = makeStyles({
    footer: {
        backgroundColor: '#b53f3f',
        marginTop: '40px',
    },
    textustify: {
        textAlign: 'justify',
    },
    footerMidddle: {
        paddingBottom: '139px'
    },
    li: {
        listStyle: 'none !importent'
    },
    footerRight:{
        paddingBottom:'20px',
        backgroundColor:'#fff',
        paddingTop:'20px'
    }
})
function Footer() {
    const classes = useStyle();
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} className={classes.footer}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={4}>
                            <Item>
                                <h3>About Us</h3>
                                <p className={classes.textustify}>
                                    পশ্চিমবঙ্গ শিক্ষক ঐক্য মুক্ত মঞ্চ হল একটি রাজনৈতিক  নিরপেক্ষ ভাবে পেশাগত দাবিতে ও শিক্ষার অধিকারকে প্রতিষ্ঠিত করার লক্ষ্যে আন্দোলন সংগঠিত করা শিক্ষক সংগঠন৷ সমস্ত রকমের শিক্ষক ও শিক্ষার সঙ্গে যুক্ত কর্মীদের শোষণ ও বঞ্চনার হাত থেকে রক্ষা করা, নাগরিকদের শিক্ষার অধিকারকে সুনিশ্চিত করা  ও শিক্ষাঘটিত সমস্যা সমাধান করার লক্ষ্যে ১০ই অক্টোবর ২০১৮ আত্মপ্রকাশ করেন। শিক্ষকদের বঞ্চনার মাত্রা বৃদ্ধির সাথে সাথে শিক্ষক ঐক্য মুক্ত মঞ্চের প্রাসঙ্গিকতা বৃদ্ধি পেয়েছে।এই স্বল্প সময়ে পশ্চিমবঙ্গের এক অন্যতম বৃহৎ শিক্ষক সংগঠনে পরিণত হয়েছে।
                                </p>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item>
                                <h3>Address</h3>
                                <p className={classes.textustify}>
                                    Kaikhali Shikshak Oikya O kalyan Samiti
                                </p>
                                <p className={classes.textustify}>
                                Reg. No: (S0001176 of 2018-19)
                                </p>
                                <p className={classes.textustify}>
                                51/H/4 Chaulpatti Road, Beleghata, Kolkata - 700010
                                </p>
                                <p className={classes.textustify}>
                                Mobile: 9382120884/9641154011
                                </p>
                                <p className={classes.textustify}>
                                E-mail:sommkaikhali@gmail.com
                                </p>
                            </Item>

                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Item >
                                <h3>Contact Us</h3>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '35ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    className={classes.footerRight}
                                >
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                                    <Button style={{ width: '33ch' }}  variant="contained" size="large">
                                        Contact Us
                                    </Button>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item sm={12}>
                            <h6>
                            Copyright © {new Date().getFullYear()} Kaikhali Shikshak Oikya O kalyan Samiti || Developed by <p>Washim Reja khan</p>
                            </h6>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </div>
    )
}

export default Footer

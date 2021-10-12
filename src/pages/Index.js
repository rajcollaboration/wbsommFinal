import * as React from 'react';
import { makeStyles, } from '@mui/styles';
import ThumbImg from '../assets/images/image5.jpg';
import Logo from '../assets/images/logoh.png';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';

import Container from '@mui/material/Container';
import "../style.css";
import image2 from '../assets/images/image2.jpg'
import image6 from '../assets/images/image6.jpg'
import Marquee from "react-easy-marquee";
import PhotoGalary from '../components/PhotoGalary';

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
        position: 'static',
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

function Index() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline /> <Grid container spacing={2}>
                {/* header Bottom Image */}
                <Grid item xs={12}>
                    <Box className={classes.mainOverLay} style={{height:'auto',overflow:'hidden'}}>
                        <div className={classes.overlay}>
                            <div className="pcenter"  style={{ marginTop: '25px' }}>
                                
                            </div>
                            <h1 style={{ color: '#fff', textAlign: 'center' }}>West Bengal Yokko Mukto Manch</h1>
                            <h5 style={{ color: '#fff', textAlign: 'center' }}>Reg-No:- S0001176 of 2018-19</h5>
                        </div>
                        <img src={ThumbImg} alt="Thumbnail" className={classes.TopImg} style={{width:'100%'}} />

                    </Box>
                </Grid>
            </Grid>
            {/* header Bottom Image */}
            {/* Subscription form */}

            <Container fixed>
                <Box>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <Box>
                                <h2 style={{ textAlign: 'center' }}>About Us</h2>
                            </Box>
                            <Paper className={classes.paper}>
                            <Grid container>
                                <Grid item md={8}>

                                    <Box style={{marginTop:'50px'}}>
                                      <p>পশ্চিমবঙ্গ শিক্ষক ঐক্য মুক্ত মঞ্চ হল একটি রাজনৈতিক নিরপেক্ষ ভাবে পেশাগত দাবিতে ও শিক্ষার অধিকারকে প্রতিষ্ঠিত করার লক্ষ্যে আন্দোলন সংগঠিত করা শিক্ষক সংগঠন৷ সমস্ত রকমের শিক্ষক ও শিক্ষার সঙ্গে যুক্ত কর্মীদের শোষণ ও বঞ্চনার হাত থেকে রক্ষা করা</p>  
                                    </Box>
                                    <Button variant="contained">See More</Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box style={{overflow:'hidden'}}>
                                    <img src={image6} style={{width:'100%'}}  alt='about us'/>
                                    </Box>
                                </Grid>
                               
                            </Grid>

                            <Grid container>
                                <Grid item md={8}>
                                    <Box style={{marginTop:'50px'}}>
                                      <p>The West Bengal Teachers 'Unity Free Forum is a teachers' organization organized in a politically neutral manner to establish professional rights and the right to education. To protect all kinds of teachers and education workers from exploitation and deprivation</p>  
                                    </Box>
                                    <Button variant="contained">See More</Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box style={{overflow:'hidden'}}>
                                    <img src={image2} style={{width:'100%'}}  alt='about us'/>
                                    </Box>
                                </Grid>
                               
                            </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} className={classes.fixedSidebar}>

                            <Box>
                                <h2 style={{ textAlign: 'center' }}>দাবি সমূহ</h2>
                            </Box>
                            <Paper 
                            elevation={3} 
                            spacing={1} 
                            style={{ marginLeft: '10px',paddingRight:'15px' }}>

                            <Marquee
                                    style={{ marginRight: '10px' }}
                                    duration={10000}
                                    height="500px"
                                    width="auto"
                                    axis="y"
                                    align="center"
                                    pauseOnHover={true}
                                    reverse={true}>
                                    <ul style={{ whiteSpace: 'normal' }}>
                                        <li style={{ listStyle: 'none', textAlign: 'justify', textJustify: 'inter-word', marginBottom: '4px' }}>
                                            ১। পৌরসভার অর্ন্তগত সমস্ত এস এস কে এম.এস.কে সমূহকে শিক্ষা দপ্তরের অর্ন্তরভূক্ত
                                            করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ২। অ্যাকাডেমিক সুপার ভাইজার ও মাদ্রাসা শিক্ষা কেন্দ্রের শিক্ষক সহ শিক্ষার সাথে যুক্ত
                                            অন্যান্য চুক্তি ভিত্তিক কর্মীদের বাৎসরিক ৩ শতাংশ ইনক্রিমেন্ট ও অবসরকালীন ৩
                                            লক্ষ টাকা প্রদানের জি.ও দ্রুত প্রকাশ করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৩। সমস্ত এস.এস কে, এম.এস.কে. কে গ্রাথমিক ও উচ্চ প্রাথমিক বিদ্যালয় হিসাবে মর্যাদা
                                            প্রদান করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৪। পার্শ্ব শিক্ষক, শিক্ষাবন্ধু, শিক্ষামিত্র, এস.এস. কে. এম.এস.কে সহ মাদ্রাসা শিক্ষা দপ্তর
                                            ও পৌরসভার অর্ন্তগত সমস্ত সহায়ক সহায়িকা সহ সমগ্ৰশিক্ষায় নিযুক্ত কর্মী ও
                                            কর্মচারীদের তাদের যোগ্যতা অনুসারে সুপ্রিমকোর্টের রায় কার্যকরী করে বেতন কাঠামো ও
                                            সমকাজে সমমজুরী প্রদান করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৫। মাদ্রাসা শিক্ষা কেন্দ্রগুলিকে বোর্ড রিকগনাইজ প্রদান করে নবম- দশম শ্রেণি চালু করতে
                                            হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৬। অবসরকালীন ভাতার ব্যবস্থা করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৭। কর্মরত অবস্থায় মারাগেলে তার পরিবারের একজনকে চাকুরী প্রদান করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৮। সমস্ত কর্মীদের ই.পি.এফ চালু করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ৯। শিক্ষামিত্র, কম্পিউটার শিক্ষক, প্রেরক, সহপ্রেরকদের বকেয়া সাম্মানিক দ্রুত পরিশোধ
                                            করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ১০। এজেন্সী মুক্ত করে সমস্ত NSI কম্পিউটার শিক্ষক শিক্ষিকাদের সরকারি আওতায় আনতে
                                            হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ১১। যে সমস্ত কম্পিউটার শিক্ষক ৩মাসের প্রশিক্ষণ নিয়ে বসে আছে অবিলম্বে তাদের
                                            অন্যান্য কম্পিউটার শিক্ষকদের মতো স্কুলে নিয়োগ করতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ১২। NSI/NSOC শিক্ষক শিক্ষিকাদের স্থায়ীকরণ করতে হবে এবং স্থায়ী কর্মীদের যাবতীয়
                                            সুযোগ সুবিধা দিতে হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ১৩। সমস্ত শিক্ষা প্রতিষ্ঠানের শিক্ষক ও শিক্ষাকর্মী শূন্যপদে সচ্ছতার সহিত নিয়োগ করতে
                                            হবে।
                                        </li>
                                        <li style={{
                                            listStyle: 'none', textAlign: 'justify',
                                            textJustify: 'inter-word', marginBottom: '4px'
                                        }}>
                                            ১৪। মাদ্রাসা শিক্ষা কেন্দ্রের গ্রাজুয়েট শিক্ষকদের এক হাজার টাকার বঞ্চনা দূর করতে হবে।react-images
                                        </li>
                                    </ul>
                                </Marquee>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box >
                                <h2 style={{ textAlign: 'center' }}>Galary</h2>
                            </Box>
                            <Paper className={classes.paper}>
                                <Box>
                                    <PhotoGalary />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            {/* body griding System start */}
        </div>
    )
}

export default Index

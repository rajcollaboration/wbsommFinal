import React from 'react'
// import { makeStyles, } from '@mui/styles';
// import ThumbImg from '../assets/images/image5.jpg';
// import Logo from '../assets/images/logoh.png';
// import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Paper, Button } from '@mui/material';

import Container from '@mui/material/Container';
import "../style.css";
import image2 from '../assets/images/image2.jpg'
// import image6 from '../assets/images/image6.jpg'
// import Marquee from "react-easy-marquee";
// import PhotoGalary from '../components/PhotoGalary';
function About() {
    return (
        <div>
            <Container>
            <Grid item xs={12} md={8} style={{margin:'auto',padding:'15px'}}>
                            <Box>
                                <h2 style={{ textAlign: 'center' }}>About Us</h2>
                            </Box>
                            <Paper >
                            <Grid container style={{padding:'15px'}}>
                                <Grid item md={8}>
                                    <Box>
                                      <p style={{textAlign:'justify'}}>The West Bengal Teachers 'Unity Free Forum is a teachers' organization organized in a politically neutral manner to establish professional rights and the right to education. To protect all kinds of teachers and education workers from exploitation and deprivation,Launched on 10 October 2018 with the aim of ensuring the right to education of the citizens and solving the problems related to education. As the level of teacher deprivation has increased, so has the relevance of the Teachers 'Unity Free Forum. In a short span of time, it has become one of the largest teachers' organizations in West Bengal.</p>  
                                    </Box>
                                    <Button variant="contained">See More</Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box style={{overflow:'hidden',marginLeft:'10px'}}>
                                    <img src={image2} style={{width:'100%',height:'255px'}}  alt='about us'/>
                                    </Box>
                                </Grid>
                               
                            </Grid>
                            </Paper>
                        </Grid>
                        </Container>
        </div>
    )
}

export default About

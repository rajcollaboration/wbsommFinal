import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import About from '../pages/About';
import Joinus from '../pages/Joinus';
import contact from '../pages/Contact';
import { BrowserRouter as Router, } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import Logo from '../assets/images/logoh.png';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InfoIcon from '@mui/icons-material/Info';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const useStyles = makeStyles((theme) => ({
  Headerbg: {
    backgroundColor: "#820b0b80 !important",
    width: '100%',
    overflow: 'hidden'
  },
  headerW: {
    position: 'absolute',
    right: '0px',
    top: '0px',
    backgroundColor: 'red',
    padding: '8px 8px 8px 38px !important'
  },
  headerBorder: {
    top: '4px',
    right: '301px',
    width: '95px',
    height: '91px',
    zIndex: '-2',
    position: 'absolute',
    transform: 'rotate(108deg)',
    backgroundColor: 'red',
  },
  menubarItem: {
    display: "flex",
    flex: 0.1,

    cursor: 'pointer',
    marginLeft: '0px'
  },
}));
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function UserHeader() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(isMobile);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const icons = [<HomeIcon />, <AccessibilityIcon />, <InfoIcon />, <ContactSupportIcon />, <SubscriptionsIcon />];
  return (
   
      <Box sx={{ display: 'flex' }}  >
        <CssBaseline />
        <AppBar position="fixed" open={open} className={classes.Headerbg}>
          <Toolbar style={{ width: '100%' }}>
            {isMobile ?
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton> <Typography variant="h6" noWrap component="div">
                  West Bengal Yokko Mukto Manch
                </Typography>
              </> : <>

                <Typography variant="div" noWrap className={classes.menubarItem}>
                  <img src={Logo} style={{ maxHeight: '80px' }} alt="" />
                </Typography>

                <Typography variant="p" noWrap className={classes.menubarItem}>
                  <Link
                    to="/"
                    exact
                  >
                    Home
                  </Link>
                  
                  
                </Typography>
                <Typography variant="p" noWrap className={classes.menubarItem}>
                  <Link
                    to="/about"
                    exact
                  >
                    About Us
                  </Link>
                </Typography>
                <Typography variant="p" noWrap className={classes.menubarItem}>
                  <Link
                    to="joinus"
                  >
                    Join Us
                  </Link>
                </Typography>
                {/* <Typography variant="p" noWrap className={classes.menubarItem}>
                  <Link

                    to="/contact"
                    exact
                  >
                    Contact Us
                  </Link>

                </Typography> */}
                <Typography variant="p" noWrap className={classes.menubarItem}>
                  DONNET NOW
                </Typography>

              </>
            }

          </Toolbar>

          <Typography component="div" className={classes.headerW}>
            <h3>
              West Bengal Yokko Mukto Manch
            </h3>
            <Typography component='div' className={classes.headerBorder}>

            </Typography>
          </Typography>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Home', 'Join Us', 'Donnet Us', 'Contact Us', 'Avout Us'].map((text, index) => {
              const icon = icons[index]
              return (
                <ListItem button key={text}>
                  <ListItemIcon> {icon} </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>


      </Box>
  );
}

export default UserHeader

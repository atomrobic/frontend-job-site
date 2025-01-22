import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact Us Icon
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Logout Icon
import'./navbar.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const DrawerContainer = styled('div')(({ theme }) => ({
  width: 250, // Set the width of the sidebar
  backgroundColor: '#1c1c1c', // Dark background color
  height: '100%', // Full height of the screen
  paddingTop: theme.spacing(2), // Padding from the top
  color: '#fff', // Text color white
}));

const DrawerItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 2), // Add padding to each item
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15), // Hover effect on items
  },
}));

export default function SearchAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleHomeClick = () => {
    console.log('Home clicked!');
  };

  return (
    <Box
    sx={{
      flexGrow: 1,
      backgroundColor: '#1c1c1c',  // Black background
      position: 'sticky',           // Sticky positioning
      top: 0,                       // Stick to the top of the viewport
      zIndex: 1100, 
      color:'#fff', 
      borderBottom: '1px solid #999',                    // Ensure it stays above other content
    }}
  >
    <Toolbar>
      <Tooltip title="Menu" placement="bottom">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
  
      <Tooltip title="Home" placement="bottom">
        <IconButton
          size="large"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
          onClick={handleHomeClick}
        >
          <HomeIcon />
        </IconButton>
      </Tooltip>
  
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}
      >
        MUI
      </Typography>
  
      <Search>
        <SearchIconWrapper>
        <SearchIcon sx={{ color: '#fff' }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Toolbar>
  
    {/* Drawer component (Sidebar) */}
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#1c1c1c', // Same dark background for the sidebar
          width: 250, // Set the width of the sidebar
        },
      }}
    >
      <DrawerContainer>
        <List>
          {/* Job Alert */}
          <DrawerItem button component="a" href="/dashboard">
            <i className="fas fa-bell" style={{ marginRight: "10px", color: "#fff" }}></i>
            <ListItemText primary={<span style={{ color: "white" }}>Job Alert</span>} />
          </DrawerItem>
  
          {/* Saved Jobs */}
          <DrawerItem button component="a" href="/saved-jobs">
            <i className="fas fa-bookmark" style={{ marginRight: "10px", color: "#fff" }}></i>
            <ListItemText primary={<span style={{ color: "white" }}>Saved Jobs</span>} />
          </DrawerItem>
  
          {/* Blogs */}
          <DrawerItem button component="a" href="/Blog">
            <i className="fas fa-edit" style={{ marginRight: "10px", color: "#fff" }}></i>
            <ListItemText primary={<span style={{ color: "white" }}>Blogs</span>} />
          </DrawerItem>
  
          {/* Portfolio */}
          <DrawerItem button component="a" href="/portfolio">
            <i className="fas fa-briefcase" style={{ marginRight: "10px", color: "#fff" }}></i>
            <ListItemText primary={<span style={{ color: "white" }}>Portfolio</span>} />
          </DrawerItem>
  
          {/* Profile */}
          <DrawerItem button component="a" href="/profile">
            <i className="fas fa-user" style={{ marginRight: "10px", color: "#fff" }}></i>
            <ListItemText primary={<span style={{ color: "white" }}>Profile</span>} />
          </DrawerItem>
        </List>
  
        {/* Footer section */}
        <List>
          {/* Contact Us */}
          <DrawerItem button component="a" href="/contact">
            <ContactMailIcon style={{ marginRight: "10px", color: "#fff" }} />
            <ListItemText primary={<span style={{ color: "white" }}>Contact Us</span>} />
          </DrawerItem>
  
          {/* Logout */}
          <DrawerItem button component="a" href="/logout">
            <ExitToAppIcon style={{ marginRight: "10px", color: "#fff" }} />
            <ListItemText primary={<span style={{ color: "white" }}>Logout</span>} />
          </DrawerItem>
        </List>
  
        {/* Community Button */}
        <div style={{ marginTop: "auto", padding: "20px", textAlign: "center" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              background: "#17a2b8", // Light blue background
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "10px 15px",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
            onClick={() => alert("Join our community!")}
          >
            <span>Join our Community</span>
            <i className="fas fa-users" style={{ fontSize: "1rem" }}></i> {/* FontAwesome icon */}
          </button>
        </div>
      </DrawerContainer>
    </Drawer>
  </Box>
  
  );
}

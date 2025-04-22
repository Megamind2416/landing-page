import {React} from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
const Header = () => {
return (
<AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom:'2px solid rgba(0,0,0, 0.2)'}}>
<Container maxWidth="lg">
<Toolbar>
{/* Logo */}
<Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
MyBrand
</Typography>
{/* Navigation Links */}
<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
<Button color="inherit" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
Home
</Button>
<Button color="inherit" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
About
</Button>
<Button color="inherit" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
Services
</Button>
<Button color="inherit" sx={{ textTransform: 'none', fontWeight: 'bold' }}>
Contact
</Button>
</Box>
{/* Call-to-Action Button */}
<Button
variant="contained"
sx={{
backgroundColor: 'black',
color: 'white',
textTransform: 'none',
fontWeight: 'bold',
borderRadius: '20px',
padding: '8px 24px',
marginLeft: 4,
'&:hover': {
backgroundColor: '#333',
},
}}
>
Get Started
</Button>
{/* Mobile Menu Icon */}
<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
<MenuIcon />
</Box>
</Toolbar>
</Container>
</AppBar>
);
};
export default Header;




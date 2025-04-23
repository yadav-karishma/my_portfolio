import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => scrollToSection('home')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('about')}>
            About
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('projects')}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('education')}>
            Education
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('certificates')}>
            Certificates
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
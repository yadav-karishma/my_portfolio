import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoResumeClick = () => {
    // Replace with your actual video resume URL
    window.open('https://drive.google.com/file/d/1l0HF5kvp09FPZMXDGGvkFLOCifPNWXx1/view?usp=sharing', '_blank');
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
          <Button 
            color="inherit" 
            onClick={handleVideoResumeClick}
            startIcon={<VideocamIcon />}
            sx={{
              ml: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Video Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
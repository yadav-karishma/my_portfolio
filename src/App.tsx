import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      light: '#e3f2fd',
      dark: '#42a5f5',
    },
    secondary: {
      main: '#f48fb1',
      light: '#fce4ec',
      dark: '#f06292',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(144, 202, 249, 0.1) 0%, transparent 50%)',
            animation: `${pulse} 8s ease-in-out infinite`,
          }}
        />
        <Navbar />
        <Container maxWidth="lg">
          <Box id="home" sx={{ minHeight: '100vh', pt: 8, pb: 4 }}>
            <Home />
          </Box>
          <Box id="about" sx={{ minHeight: '100vh', pt: 8, pb: 4, bgcolor: 'background.default' }}>
            <About />
          </Box>
          <Box id="projects" sx={{ minHeight: '100vh', pt: 8, pb: 4 }}>
            <Projects />
          </Box>
          <Box id="education" sx={{ minHeight: '100vh', pt: 8, pb: 4, bgcolor: 'background.default' }}>
            <Education />
          </Box>
          <Box id="certificates" sx={{ minHeight: '100vh', pt: 8, pb: 4 }}>
            <Certificates />
          </Box>
          <Box id="contact" sx={{ minHeight: '100vh', pt: 8, pb: 4, bgcolor: 'background.default' }}>
            <Contact />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

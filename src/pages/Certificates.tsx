import React from 'react';
import { Container, Typography, Box, useTheme, Card, CardContent, CardActions, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudIcon from '@mui/icons-material/Cloud';
import WebIcon from '@mui/icons-material/Web';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Certificates = () => {
  const theme = useTheme();

  const certificates = [
    {
      icon: <CodeIcon sx={{ fontSize: 24 }} />,
      title: 'Data Structure and Algorithm',
      provider: 'Programming Pathshala',
      color: '#2196f3',
      link: 'https://drive.google.com/file/d/your-dsa-certificate-link/view'
    },
    {
      icon: <CloudQueueIcon sx={{ fontSize: 24 }} />,
      title: 'The Bits and Bytes of Computer Networking',
      provider: 'Google Cloud',
      color: '#4285f4',
      link: 'https://ibb.co/1GrrxLKB'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 24 }} />,
      title: 'Introduction to Generative AI',
      provider: 'Google Cloud',
      color: '#34a853',
      link: 'https://ibb.co/qYDYV0QQ'
    },
    {
      icon: <WebIcon sx={{ fontSize: 24 }} />,
      title: 'Become a Full Stack Web Developer',
      provider: 'LinkedIn Learning',
      color: '#0077b5',
      link: 'https://drive.google.com/file/d/your-web-dev-certificate-link/view'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 24 }} />,
      title: 'CyberShikshaa for Fundamentals',
      provider: 'Microsoft',
      color: '#00a4ef',
      link: 'https://ibb.co/TqtSs9TJ'
    },
    {
      icon: <CodeIcon sx={{ fontSize: 24 }} />,
      title: 'Python (Basic)',
      provider: 'HackerRank',
      color: '#ff6d00',
      link: 'https://drive.google.com/file/d/your-python-certificate-link/view'
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            color: theme.palette.primary.main,
            mb: 4,
          }}
        >
          Certificates
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
            animation: `${fadeIn} 1s ease-out 0.3s both`,
          }}
        >
          {certificates.map((cert, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                },
                transition: 'all 0.4s ease',
                animation: `${float} 3s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: cert.color,
                      mr: 2,
                      p: 1,
                      borderRadius: '50%',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {cert.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.provider}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<VisibilityIcon />}
                  href={cert.link}
                  target="_blank"
                  sx={{
                    width: '100%',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Certificate
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Certificates; 
import React from 'react';
import { Container, Typography, Box, useTheme, Divider, Link, Paper } from '@mui/material';
import { keyframes } from '@mui/system';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupIcon from '@mui/icons-material/Group';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import StarIcon from '@mui/icons-material/Star';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const About = () => {
  const theme = useTheme();

  const skills = [
    { icon: <CodeIcon sx={{ fontSize: 40 }} />, name: 'C/C++', color: '#2196f3' },
    { icon: <LanguageIcon sx={{ fontSize: 40 }} />, name: 'Python', color: '#4caf50' },
    { icon: <BrushIcon sx={{ fontSize: 40 }} />, name: 'HTML/CSS', color: '#f50057' },
    { icon: <DevicesIcon sx={{ fontSize: 40 }} />, name: 'JavaScript', color: '#ff9800' },
    { icon: <StorageIcon sx={{ fontSize: 40 }} />, name: 'SQL', color: '#9c27b0' },
    { icon: <CloudIcon sx={{ fontSize: 40 }} />, name: 'React.js', color: '#00bcd4' },
    { icon: <SecurityIcon sx={{ fontSize: 40 }} />, name: 'Node.js', color: '#f44336' },
    { icon: <DataObjectIcon sx={{ fontSize: 40 }} />, name: 'MongoDB', color: '#795548' },
  ];

  const achievements = [
    {
      icon: <CodeOffIcon sx={{ fontSize: 40 }} />,
      title: 'Coding Problems Solved',
      description: 'Solved over 350+ coding problems on CodeChef, Leetcode and GeeksForGeeks',
      color: '#2196f3'
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'CodeKaze Competition',
      description: 'Achieved AIR 9,138 in Coding Ninjas\' CodeKaze competition',
      color: '#ffd700'
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'HackerRank Achievements',
      description: 'Earned Silver level in Python and Java on HackerRank',
      color: '#c0c0c0'
    },
    {
      icon: <MilitaryTechIcon sx={{ fontSize: 40 }} />,
      title: '30 Days of Code',
      description: 'Achieved bronze level in \'30 Days of Code\' challenge',
      color: '#cd7f32'
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        {/* About Section */}
        <Box sx={{ mb: 8 }}>
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
            Karishma Yadav
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              animation: `${fadeIn} 1s ease-out 0.3s both`,
              mb: 3,
            }}
          >
            Computer Science Student at Lovely Professional University
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mb: 4,
              animation: `${fadeIn} 1s ease-out 0.6s both`,
            }}
          >
            <Link href="https://github.com/yadav-karishma" target="_blank" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GitHubIcon /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/karishma-yadav2004" target="_blank" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LinkedInIcon /> LinkedIn
            </Link>
            <Link href="mailto:karishmayadav1517@gmail.com" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon /> Email
            </Link>
            <Link href="tel:+918174888945" color="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon /> Phone
            </Link>
          </Box>
          <Typography
            variant="body1"
            paragraph
            sx={{
              animation: `${fadeIn} 1s ease-out 0.9s both`,
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            I am a passionate Computer Science student with a strong foundation in programming and web development.
            I love solving complex problems and creating innovative solutions. My journey in technology has been
            driven by curiosity and a desire to build things that make a difference.
          </Typography>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              animation: `${fadeIn} 1s ease-out 1.2s both`,
              color: theme.palette.primary.main,
            }}
          >
            Technical Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
              animation: `${fadeIn} 1s ease-out 1.5s both`,
            }}
          >
            {skills.map((skill, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    '& .skill-icon': {
                      animation: `${rotate} 1s linear infinite`,
                    },
                  },
                  transition: 'all 0.3s ease',
                  animation: `${float} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Box
                  className="skill-icon"
                  sx={{
                    color: skill.color,
                    mb: 1,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h6" color="text.primary">
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Power Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              animation: `${fadeIn} 1s ease-out 1.8s both`,
              color: theme.palette.primary.main,
            }}
          >
            Power Skills
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
              animation: `${fadeIn} 1s ease-out 2.1s both`,
            }}
          >
            {[
              { icon: <GroupIcon sx={{ fontSize: 40 }} />, name: 'Teamwork', color: '#e91e63' },
              { icon: <TimerIcon sx={{ fontSize: 40 }} />, name: 'Time Management', color: '#9c27b0' },
              { icon: <SchoolIcon sx={{ fontSize: 40 }} />, name: 'Quick Learner', color: '#2196f3' },
              { icon: <LeaderboardIcon sx={{ fontSize: 40 }} />, name: 'Leadership', color: '#4caf50' },
              { icon: <PsychologyIcon sx={{ fontSize: 40 }} />, name: 'Critical Thinking', color: '#ff9800' },
            ].map((skill, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    '& .skill-icon': {
                      animation: `${rotate} 1s linear infinite`,
                    },
                  },
                  transition: 'all 0.3s ease',
                  animation: `${float} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Box
                  className="skill-icon"
                  sx={{
                    color: skill.color,
                    mb: 1,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {skill.icon}
                </Box>
                <Typography variant="h6" color="text.primary">
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Achievements Section */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              animation: `${fadeIn} 1s ease-out 2.4s both`,
              color: theme.palette.primary.main,
            }}
          >
            Achievements
          </Typography>
          <Box
            sx={{
              animation: `${fadeIn} 1s ease-out 2.7s both`,
              display: 'flex',
              overflowX: 'auto',
              gap: 3,
              pb: 2,
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.3)',
                },
              },
            }}
          >
            {achievements.map((achievement, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  minWidth: 300,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                    '& .achievement-icon': {
                      animation: `${rotate} 1s linear infinite`,
                    },
                  },
                  transition: 'all 0.3s ease',
                  animation: `${float} 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Box
                  className="achievement-icon"
                  sx={{
                    color: achievement.color,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {achievement.icon}
                </Box>
                <Typography variant="h6" color="text.primary" align="center">
                  {achievement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {achievement.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About; 
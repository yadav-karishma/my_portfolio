import React from 'react';
import {
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import type { IconType } from 'react-icons';
import { Container, Typography, Box, useTheme, Divider, Link, Button } from '@mui/material';
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
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WebIcon from '@mui/icons-material/Web';
import DescriptionIcon from '@mui/icons-material/Description';

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

interface Skill {
  name: string;
  color: string;
  icon: IconType;
}

const About = () => {
  const theme = useTheme();

  const skills: Skill[] = [
    { name: 'C', color: '#A8B9CC', icon: SiCplusplus },
    { name: 'C++', color: '#00599C', icon: SiCplusplus },
    { name: 'Python', color: '#3776AB', icon: SiPython },
    { name: 'HTML', color: '#E34F26', icon: SiHtml5 },
    { name: 'CSS', color: '#1572B6', icon: SiCss3 },
    { name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript },
    { name: 'SQL', color: '#4479A1', icon: SiMysql },
    { name: 'React.js', color: '#61DAFB', icon: SiReact },
    { name: 'Node.js', color: '#339933', icon: SiNodedotjs },
    { name: 'MongoDB', color: '#47A248', icon: SiMongodb },
  ];

  const handleResumeClick = () => {
    // Replace with your actual resume URL
    window.open('https://ibb.co/kTTHn5k', '_blank');
  };

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
            <Button
              variant="contained"
              color="primary"
              startIcon={<DescriptionIcon />}
              onClick={handleResumeClick}
              sx={{
                ml: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View Resume
            </Button>
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
            I am a B.Tech (Hons.) Computer Science and Engineering student with a solid foundation in programming and web development. I enjoy tackling complex problems and developing innovative solutions. My journey in technology is fueled by curiosity and a strong desire to create impactful and meaningful applications.
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
            {skills.map((skill, index) => {
              const IconComponent = skill.icon as React.ComponentType<{ size: number; color: string }>;
              return (
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
                    <IconComponent size={40} color={skill.color} />
                  </Box>
                  <Typography variant="h6" color="text.primary">
                    {skill.name}
                  </Typography>
                </Box>
              );
            })}
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
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '20px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.3))',
              }
            }}
          >
            {[
              {
                icon: <CodeOffIcon sx={{ fontSize: 24 }} />,
                title: 'Coding Problems Solved',
                description: 'Solved over 350+ coding problems on CodeChef, Leetcode and GeeksForSolved 350+ coding problems across platforms like CodeChef, LeetCode, and GeeksforGeeks, demonstrating strong problem-solving skills.Geeks',
                color: '#2196f3'
              },
              {
                icon: <EmojiEventsIcon sx={{ fontSize: 24 }} />,
                title: 'CodeKaze Competition',
                description: 'Secured an All India Rank of 9,138 in Coding Ninjas CodeKaze competition, showcasing competitive programming proficiency',
                color: '#ffd700'
              },
              {
                icon: <StarIcon sx={{ fontSize: 24 }} />,
                title: 'HackerRank Achievements',
                description: 'Earned Silver badges in Python and Java on HackerRank, reflecting versatility in programming languages.',
                color: '#c0c0c0'
              },
              {
                icon: <MilitaryTechIcon sx={{ fontSize: 24 }} />,
                title: '30 Days of Code',
                description: 'Completed the 30 Days of Code challenge on HackerRank with a Bronze badge, highlighting consistency in coding practice.',
                color: '#cd7f32'
              }
            ].map((achievement, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 4,
                  position: 'relative',
                  '&:last-child': {
                    mb: 0
                  }
                }}
              >
                <Box
                  sx={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.paper',
                    border: `2px solid ${achievement.color}`,
                    color: achievement.color,
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 0 0 4px rgba(255,255,255,0.1)',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: `0 0 0 4px ${achievement.color}33`,
                      '& .achievement-icon': {
                        animation: `${rotate} 1s linear infinite`,
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box className="achievement-icon">
                    {achievement.icon}
                  </Box>
                </Box>
                <Box
                  sx={{
                    ml: 3,
                    flex: 1,
                    pt: 0.5,
                  }}
                >
                  <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{
                      mb: 0.5,
                      fontWeight: 600,
                    }}
                  >
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                    }}
                  >
                    {achievement.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About; 
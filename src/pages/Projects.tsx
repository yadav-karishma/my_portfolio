import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardActions, Button, useTheme, Chip } from '@mui/material';
import { keyframes } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

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

const Projects = () => {
  const theme = useTheme();
  const projects = [
    {
      title: 'Quiz Management System',
      description: 'Developed a full-stack quiz platform for LPU students, featuring OTP-based student registration, teacher-created quizzes, scheduled access, and secure result management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Brevo API'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'Developed an interactive Tic Tac Toe game using HTML, CSS, JavaScript, and React, featuring a clean, user-friendly interface for smooth gameplay. Integrated two-player functionality and enhanced the overall user experience with responsive design elements.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Sudoku Solver',
      description: 'Developed a Sudoku solver in Python, leveraging backtracking algorithms for efficient and accurate puzzle solving. Created a user-friendly interface for custom puzzle input and optimized the algorithm for complex puzzles.',
      technologies: ['Python', 'Backtracking Algorithm'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Restaurant Website',
      description: 'Designed a restaurant website to deliver comprehensive information, showcase the menu, highlight special offers, and enable seamless online booking. Created an eye-catching promotional poster and implemented a pre-table booking system.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <Container maxWidth="lg">
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
          My Projects
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            animation: `${fadeIn} 1s ease-out 0.3s both`,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            mb: 6,
          }}
        >
          Here are some of the projects I've worked on. Each project represents a unique challenge
          and learning experience.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            animation: `${fadeIn} 1s ease-out 0.6s both`,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom color="primary">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                  variant="outlined"
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  Source Code
                </Button>
                <Button
                  startIcon={<LaunchIcon />}
                  href={project.liveLink}
                  target="_blank"
                  variant="contained"
                  color="primary"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Projects; 
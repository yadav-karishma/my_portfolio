import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'Your University Name',
      year: '2020 - 2024',
      description: 'Relevant coursework: Data Structures, Algorithms, Database Management, Web Development'
    },
    {
      degree: 'High School Diploma',
      school: 'Your High School Name',
      year: '2018 - 2020',
      description: 'Focus on Mathematics and Science'
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1" paragraph>
          My academic journey and qualifications
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {education.map((edu, index) => (
            <Paper key={index} elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'flex-start' }}>
              <SchoolIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
              <Box>
                <Typography variant="h6" component="h2">
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.school}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.year}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {edu.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Education; 
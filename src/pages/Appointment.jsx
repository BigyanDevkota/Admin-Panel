import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Button, TextField, MenuItem, Typography, Box } from '@mui/material';

export default function Appointment() {
  const doctors = ['Dr. Sharma', 'Dr. Koirala', 'Dr. Gurung'];
  const patients = ['John Doe', 'Jane Smith', 'Alex Rai'];

  return (
    <Box
      sx={{
        padding: 4,
        background: 'linear-gradient(to bottom right, #f7faff, #eef4ff)',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" fontWeight="700" color="#1e3a8a" gutterBottom>
        Appointments
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Manage and schedule patient appointments seamlessly.
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gap={3}
        mb={5}
        sx={{
          '@media (max-width: 900px)': { gridTemplateColumns: '1fr' },
        }}
      >
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={600}
              color="#1e40af"
              mb={2}
            >
              Book a New Appointment
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                select
                label="Select Doctor"
                fullWidth
                variant="outlined"
                color="primary"
              >
                {doctors.map((doc) => (
                  <MenuItem key={doc} value={doc}>
                    {doc}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Select Patient"
                fullWidth
                variant="outlined"
              >
                {patients.map((pat) => (
                  <MenuItem key={pat} value={pat}>
                    {pat}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                type="datetime-local"
                label="Appointment Date & Time"
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="Notes (optional)"
                fullWidth
                variant="outlined"
                multiline
                rows={3}
              />

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#2563eb',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  '&:hover': { backgroundColor: '#1e40af' },
                }}
              >
                Confirm Appointment
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={600}
              color="#1e40af"
              mb={2}
            >
              Upcoming Appointments
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              maxHeight={400}
              overflow="auto"
            >
              {[
                { patient: 'John Doe', doctor: 'Dr. Sharma', time: 'Oct 25, 10:00 AM' },
                { patient: 'Jane Smith', doctor: 'Dr. Koirala', time: 'Oct 26, 2:30 PM' },
                { patient: 'Alex Rai', doctor: 'Dr. Gurung', time: 'Oct 27, 11:15 AM' },
              ].map((a, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
                  }}
                >
                  <Box>
                    <Typography fontWeight={600}>{a.patient}</Typography>
                    <Typography fontSize={14} color="text.secondary">
                      {a.doctor}
                    </Typography>
                  </Box>
                  <Typography color="#2563eb" fontWeight={500}>
                    {a.time}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

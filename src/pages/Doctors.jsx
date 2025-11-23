import { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    TextField,
    Button,
    Avatar,
    Grid,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    InputAdornment,
} from '@mui/material';
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    Search as SearchIcon,
} from '@mui/icons-material';

export default function Doctors() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const [editingDoctor, setEditingDoctor] = useState(null);

    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: 'Dr. Aayush Sharma',
            specialty: 'Cardiologist',
            experience: '10 years',
            email: 'aayush.sharma@hospital.com',
            phone: '+977-9800000001',
            status: 'Active',
            image: 'https://randomuser.me/api/portraits/men/11.jpg',
        },
        {
            id: 2,
            name: 'Dr. Priya Koirala',
            specialty: 'Pediatrician',
            experience: '8 years',
            email: 'priya.koirala@hospital.com',
            phone: '+977-9800000002',
            status: 'On Leave',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
    ]);

    const [form, setForm] = useState({
        name: '',
        specialty: '',
        experience: '',
        email: '',
        phone: '',
        image: '',
        status: 'Active',
    });

    // --- Handlers ---
    const handleOpen = (doc = null) => {
        if (doc) setForm(doc);
        else
            setForm({
                name: '',
                specialty: '',
                experience: '',
                email: '',
                phone: '',
                image: '',
                status: 'Active',
            });
        setEditingDoctor(doc);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (editingDoctor) {
            setDoctors((prev) =>
                prev.map((doc) =>
                    doc.id === editingDoctor.id ? { ...form, id: doc.id } : doc
                )
            );
        } else {
            setDoctors((prev) => [
                ...prev,
                { ...form, id: Date.now(), image: form.image || 'https://randomuser.me/api/portraits/men/30.jpg' },
            ]);
        }
        setOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this doctor?')) {
            setDoctors((prev) => prev.filter((doc) => doc.id !== id));
        }
    };

    const filteredDoctors = doctors.filter(
        (doc) =>
            doc.name.toLowerCase().includes(search.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(search.toLowerCase())
    );

    // --- JSX ---
    return (
        <Box
            sx={{
                padding: 4,
                background: 'linear-gradient(to bottom right, #f8fbff, #eef4ff)',
                minHeight: '100vh',
            }}
        >
            <Typography variant="h4" fontWeight={700} color="#1e3a8a" gutterBottom>
                Doctors
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={4}>
                Manage doctors: add, update, delete, or search through the hospital staff.
            </Typography>

            {/* Search + Add Button */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
                gap={2}
                flexWrap="wrap"
            >
                <TextField
                    placeholder="Search doctor by name or specialty"
                    variant="outlined"
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ width: { xs: '100%', sm: '300px' } }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#2563eb',
                        textTransform: 'none',
                        borderRadius: 2,
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: '#1e40af' },
                    }}
                    onClick={() => handleOpen()}
                >
                    + Add Doctor
                </Button>
            </Box>

            {/* Doctor List */}
            <Grid container spacing={3}>
                {filteredDoctors.map((doc) => (
                    <Grid item xs={12} md={6} lg={4} key={doc.id}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                padding: 2,
                                backgroundColor: '#fff',
                            }}
                        >
                            <Box display="flex" alignItems="center" gap={2}>
                                <Avatar
                                    src={doc.image}
                                    alt={doc.name}
                                    sx={{ width: 64, height: 64 }}
                                />
                                <Box flex={1}>
                                    <Typography fontWeight={600}>{doc.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {doc.specialty} • {doc.experience}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {doc.email}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {doc.phone}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontSize: 13,
                                            color: doc.status === 'Active' ? 'green' : 'orange',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {doc.status}
                                    </Typography>
                                </Box>
                                <Box>
                                    <IconButton color="primary" onClick={() => handleOpen(doc)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(doc.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Add/Edit Doctor Dialog */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    {editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}
                </DialogTitle>
                <DialogContent dividers>
                    <Box display="flex" flexDirection="column" gap={2} mt={1}>
                        <TextField
                            label="Full Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Specialty"
                            name="specialty"
                            value={form.specialty}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Experience"
                            name="experience"
                            value={form.experience}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            label="Profile Image URL"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            select
                            label="Status"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="On Leave">On Leave</MenuItem>
                        </TextField>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        {editingDoctor ? 'Save Changes' : 'Add Doctor'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

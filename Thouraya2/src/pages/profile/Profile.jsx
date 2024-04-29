import React from 'react'
import './profile.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import { Grid, Card, CardContent, Typography, Box, TextField, Button } from '@mui/material';
import Logo from '../../assets/oussama.jpg';

const Profile = () => {
  const handleChange = (e) => {
    // Mettre en œuvre la logique pour gérer les changements d'entrée ici
    console.log(e.target.value);
  };
  return (
    <div className='profile'>
      <Sidebar />
      <div className="profileContainer ml-2 pt-2 mt-4">
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Card>
                <CardContent>
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src={Logo} alt=" Admin" className='logo' />
                    </div>
                    <Typography variant="h5" className="user-name">User name</Typography>
                    <Typography variant="subtitle1" className="user-email">xyz@email.com</Typography>
                  </div>
                  <div className="about">
                    <Typography variant="h6">About</Typography>
                    <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={9}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Personal Details</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Full Name" fullWidth onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Email" fullWidth onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Phone" fullWidth onChange={handleChange} />
                    </Grid>

                  </Grid>
                  <Typography variant="h6" className="mt-3" gutterBottom>Address</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Street" fullWidth onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="City" fullWidth onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Typography variant="h6" className="mt-3" gutterBottom>Password</Typography>
                  <Grid container spacing={2}>

                    <Grid item xs={12} sm={6}>
                      <TextField label="password" type="password" fullWidth onChange={handleChange} />
                    </Grid>

                  </Grid>
                  <Box sx={{ m: 2 }} >
                    <Button className="m-2" variant="contained" color="secondary">Cancel</Button>
                    <Button variant="contained" color="primary" className="ms-2">Update</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </div>
      </div>
    </div>
  )
}

export default Profile

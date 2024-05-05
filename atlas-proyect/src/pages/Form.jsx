import { Button, Container, Grid, TextField } from "@mui/material"
import { useState } from "react"

export const Form = () => {

    const [user, setUser] = useState({
        id: '',
        name: "",
        email: "",
        city: "",
        username: "",
        website: ""
        },)

        const handleOnChange = (e) => {
            const {name,value} = e.target 
            setUser({...user,[name]:value})
        }

        console.log(user)
  return (
    <>
    <Container sx={{m:5}}>
      <form >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              name="name"
              variant="outlined"
              fullWidth
              value={user.name}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              value={user.email}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              variant="outlined"
              fullWidth
              value={user.city}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Website"
              name="website"
              variant="outlined"
              fullWidth
              value={user.website}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </>
  )
}

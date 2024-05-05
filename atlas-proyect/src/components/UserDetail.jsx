import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import { useApi } from "../hooks/useApi"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export const UserDetail = () => {

    const {userId} = useParams()

    const { data, isError, isLoading } = useApi(`https://api-spartan-143a3bbd2958.herokuapp.com/users/${userId}`)

    if(isLoading){
        return <Typography>Cargando</Typography>
      }
      console.log(data)

  return (
    <>

        <Link to='/' style={{display:'flex'}} >
        <ArrowLeftIcon/>
        <Typography >Back</Typography>
        </Link>

        <Card>
        <CardActionArea>
        <CardContent>
            <Typography variant="h4" sx={{mb:2}}>{data.name}</Typography>
            <Typography component='p' variant="button">Id: {data.id}</Typography>
            <Typography component='p' variant="button">E-mail: {data.email}</Typography>
            <Typography component='p' variant="button">City: {data.city}</Typography>
            <Typography component='p' variant="button">website: {data.website}</Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    

    </>
  )
}

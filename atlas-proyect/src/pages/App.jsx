import { CardActionArea, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useApi } from '../hooks/useApi'
import { Link } from 'react-router-dom'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export const App = () => {

  const {data, isError, isLoading} = useApi('https://api-spartan-143a3bbd2958.herokuapp.com/users')

  if(isLoading){
    return <Typography>Cargando</Typography>
  }

  return (
    <>
    <Container>


    <TableContainer >
      <CardActionArea>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">website</TableCell>
            <TableCell align="right">Detail</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((item)=>{
          return(
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">{item.id}</TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.city}</TableCell>
              <TableCell align="right">{item.website}</TableCell>
              <TableCell align="right">
                <Link to={`user/${item.id}`}>
                  <ArrowDropDownCircleIcon color='success' fontSize='large'/>
                </Link>
                
                </TableCell>
            </TableRow>
          )
        })}
            
        </TableBody>
      </Table>
      </CardActionArea>
    </TableContainer>

    </Container>
    </>
  )
}

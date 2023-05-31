import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>

            <Grid container >

                <Grid item xl={2}>

                    <Link to='/Dashboard'>    Dashboard </Link>
                    <Link to='/Movies'>   Movies </Link>
                    <Link to='/Admin'>  Admin </Link>
                    <Link to='/UserInfo'>   user </Link>

                </Grid>
                <Grid item xl={8}>


                    <h1> welcome to Dashboards</h1>
                    <Grid container spacing={1} padding={2} margin={2}>
                        <CustomeCard name={"Movies"} number={23} />
                        <CustomeCard name={"Admin"} number={2} />
                        <CustomeCard name={"Users"} number={45} />  </Grid>
                </Grid>

            </Grid>

        </div>
    )
}






const CustomeCard = (props) => {

    return (<>
        <Card style={{
            height: "200px", width: "200px", margin: "3px", backgroundColor: "#e2b949a3", ":hover": {
                backgroundColor: "#22ae11"
            }
        }}>

            <center>
                <Typography>
                    {props.number}
                </Typography>
                <Typography>
                    {props.name}
                </Typography>

            </center>

        </Card>

    </>)
}
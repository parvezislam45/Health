import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";


const Nav = () => {
    return (
        <div>
           <Container>
            <Stack py={2} direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component ={Link} href="/" fontWeight={600}>
                    P
                    <Box component="span" color="primary.main">
                        H
                    </Box>{" "}
                    Health Care
                </Typography>
                <Stack direction="row" justifyContent="space-between" gap={4}>
                <Typography component ={Link} href="/consultation">Consultation</Typography>
                <Typography component ={Link} href="/planes">Health Planes</Typography>
                <Typography component ={Link} href="/medicine">Medicine</Typography>
                <Typography component ={Link} href="/diagnostics">Diagnostics</Typography>
                <Typography component ={Link} href="/ngos">NGOs</Typography>
            </Stack>
            <Button component ={Link} href="/login">Login</Button>
            </Stack>
           </Container>
           
        </div>
    );
};

export default Nav;
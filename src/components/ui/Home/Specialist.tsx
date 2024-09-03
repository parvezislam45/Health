import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:3000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialist } = await res.json();
  console.log(specialist);

  return (
    <Container>
      <Box sx={{
               margin: '80px 0px',
               textAlign: 'center',
            }}>
                <Box sx={{
                  textAlign: 'start',
               }}>
                <Typography variant="h4" fontWeight={600}>
          Explore Treatment Across Specialist
        </Typography>
        <Typography component="p" fontWeight={300} fontSize={18}>
          Experience Doctor Across Specialist
        </Typography>
                </Box>
                {specialist && specialist.length > 0 && (
        <Stack direction="row" gap={4} mt={5}>
          {specialist.map((item: any) => (
            <Box
              key={item.id}
              sx={{
                flex: 1,
                width: '150px',
                backgroundColor: 'rgba(245, 245, 245,1)',
                border: '1px solid rgba(250, 250, 250, 1)',
                borderRadius: '10px',
                textAlign: 'center',
                padding: '40px 10px',
                '& img': {
                   width: '50px',
                   height: '50px',
                   margin: '0 auto',
                },
                '&:hover': {
                   border: '1px solid rgba(36, 153, 239, 1)',
                   borderRadius: '10px',
                   cursor: 'pointer',
                   transition: 'all 0.5s',
                },
             }}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  width={100}
                  height={100}
                  alt="Specialist Icon"
                />
              )}
              <Box>
                <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      )}

      <Button
        variant="outlined"
        sx={{
          marginTop: "20px",
        }}
      >
        View All
      </Button>
        
      </Box>
      
    </Container>
  );
};

export default Specialist;

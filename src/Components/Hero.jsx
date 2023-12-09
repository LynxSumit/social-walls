
import {
  Box,

  Grid,
  
  Sheet,
  
  Typography,
} from "@mui/joy";





const Hero = () => {
 

  return (
    <Sheet
      sx={{
        borderRadius: "0px",
       marginTop : '1.6rem',
        mb: 1,
        width: "100vw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: {md : "100% 20%", xs : "center"},
        backgroundBlendMode : 'multiply',
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),  url(https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80) `,
      }}
    >
      <Grid>
       
        
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems : 'center',
              width: "100vw",
              height: "250px",
              flexDirection: "column",
              textAlign: "center",
              marginTop: "2vmax",
              paddingX: 2,
             
            }}
          >
            <Typography
              // level="h1"
              // variant="plain"
              color="primary"
              sx={{ color: `white`, fontWeight : '400', fontSize  :'60px', lineHeight : '71.94px' }}
              gutterBottom
            >
              SOCIAL WALLS
            </Typography>

            <Typography
              textOverflow={"clip"}
              sx={{ wordWrap: "break-word", color: `orangered`, fontSize : '22px', fontWeight : '300', lineHeight : '26.38px' }}
              level="body-lg"
              color="neutral"
              paragraph
            >
              #beyerdymanic            </Typography>
          </Box>
          
         
        </Grid>
      </Grid>
    </Sheet>
  );
};

export default Hero;


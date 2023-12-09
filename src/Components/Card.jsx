import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import { Avatar, Box, Card as CARD, DialogContent, DialogTitle,  Modal, ModalClose, ModalDialog } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";

import Typography from "@mui/joy/Typography";
import {  Facebook } from "@mui/icons-material";

export default function Card({ img, desc , title  = "Titlle Comes Here"}) {
    const [open, setOpen] = React.useState(false);
  
  return (
    <>
    <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
        <ModalClose/>
          <DialogTitle>{title}</DialogTitle>
          <AspectRatio ratio={2}>
         <img src={img} alt="ImageInModal" style={{ backgroundPosition : 'center', backgroundRepeat : 'no-repeat', backgroundSize : 'cover', backgroundBlendMode : 'multiply'}} />

          </AspectRatio>
          <DialogContent>{desc}</DialogContent>
                 <Box>
           
         </Box>
        </ModalDialog>
      </Modal>
    <CARD
    
    onClick={() => setOpen(true)}
      variant="soft"
      sx={{
        padding: "0",
        borderRadius: "10px",
        width: "auto",
        margin: "1vmax",
        filter : 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.12))',
        cursor : 'pointer'
      }}
    >
      <CardOverflow>
        <img
          src={img}
          alt=""
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            display: "block",
          }}
        />
      </CardOverflow>

      <Box padding={1} fontSize={{xs : 20, md : 25}}>
        <Typography  >
          {desc.length > 80  ? (desc.substring(0, 80) + "...") : desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap :  2
            , flexDirection : {xs : 'column', md : 'row'}
          }}
          marginY={2}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {" "}
            <Avatar src={img} />
            <Box
              sx={{ display: "flex", flexDirection: "column", fontWeight: 800, fontSize : 30 }}
            >
              {" "}
              <Typography>

              Full Name
              </Typography>
              <Typography level="body-xs">43 min ago</Typography>
            </Box>
          </Box>
          <Facebook sx={{ fontSize: 28, color: "#2763C2" }} />
        </Box>
      </Box>
    </CARD>
    </>
  );
}

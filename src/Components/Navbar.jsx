import * as React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import { Person2Outlined, Search } from "@mui/icons-material";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.6,
        width: "100%",
        paddingTop: "1em",
      }}
    >
      <Typography
        sx={{
          alignSelf: "center",
          fontSize: "1.5rem",
          fontWeight: 500,
        }}
      >
        beyerdynamic
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          width : '100%',
          justifyContent: "space-between",
        }}
      >
       <Box sx={{ display: { xs: "inline-flex", md: "none" } , alignSelf : 'flex-start', marginLeft : '10px'}}>
              <IconButton
                variant="plain"
                color="neutral"
                onClick={() => setOpen(true)}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Box>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
      mx={"auto"}
            spacing={7}
            sx={{ display: { xs: "none", md : 'flex'}, }}
          >
            <Box
              component={Link}
              to="#"
              sx={{
                alignSelf: "center",
                ":hover": { color: "#0056b3" },
                cursor: "pointer",
                textDecoration : "none",
                color : 'black'
              }}
            >
              Headphones and Headsets
            </Box>
            <Box
              component={Link}
              to="#"
              sx={{
                alignSelf: "center",
                ":hover": { color: "#0056b3" },
                cursor: "pointer",
                textDecoration : "none",
                color : 'black'
              }}
            >
              Microphones
            </Box>
            <Box
              component={Link}
              to="#"
              sx={{
                alignSelf: "center",
                ":hover": { color: "#0056b3" },
                cursor: "pointer",
                textDecoration : "none",
                color : 'black'
              }}
            >
              Conference Technology
            </Box>
            <Box
              component={Link}
              to="#"
              sx={{
                alignSelf: "center",
                ":hover": { color: "#0056b3" },
                cursor: "pointer",
                textDecoration : "none",
                color : 'black'
              }}
            >
              Company{" "}
            </Box>
            <Box
              component={Link}
              to="#"
              sx={{
                alignSelf: "center",
                ":hover": { color: "#0056b3" },
                cursor: "pointer",
                textDecoration : "none",
                color : 'black'
              }}
            >
              Services and support
            </Box>
            <Box
              component={Link}
              to="#"
              sx={{
                alignSelf: "center",
                ":hover": { color: "#0056b3" },
                cursor: "pointer",
                textDecoration : "none",
                color : 'black'
              }}
            >
              FAQ
            </Box>
          </Stack>
          <Stack
              sx={{ display: "flex", flexDirection: "row", float : 'right',marginRight : '10px'}}
            >
              <IconButton sx={{  }}>
                <Search />
              </IconButton>
              <IconButton sx={{  }}>
                <Person2Outlined />
              </IconButton>
            </Stack>
        </Box>
        <Drawer
                size="lg"
                sx={{ display: { xs: "inline-flex", md: "none" } }}
                open={open}
                onClose={() => setOpen(false)}
              >
                <ModalClose />
                <DialogTitle
                  sx={{
                    alignSelf: "center",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    my: 1.4,
                  }}
                >
                  beyerdynamic
                </DialogTitle>

                <Box sx={{ px: 1 }}>
                  <Box>
                    <Box sx={{ alignSelf: "center", marginY: 4 }}>
                      Headphones and Headsets
                    </Box>
                    <Box sx={{ alignSelf: "center", marginY: 4 }}>
                      Microphones
                    </Box>
                    <Box sx={{ alignSelf: "center", marginY: 4 }}>
                      Conference Technology
                    </Box>
                    <Box sx={{ alignSelf: "center", marginY: 4 }}>Company </Box>
                    <Box sx={{ alignSelf: "center", marginY: 4 }}>
                      Services and support
                    </Box>
                    <Box sx={{ alignSelf: "center", marginY: 4 }}>FAQ</Box>
                  </Box>
                </Box>
              </Drawer>
    </Box>
  );
}

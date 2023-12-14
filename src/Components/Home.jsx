import React, {  useState } from "react";
import Hero from "./Hero";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Stack,
  Typography,
} from "@mui/joy";
import {
  Add,
  Facebook,
  Instagram,
  LinkedIn,
  MusicNoteSharp,
  Twitter,
} from "@mui/icons-material";
import Masonry from "react-masonry-css";
import Card from "./Card";
import { toast } from "react-toastify";
import { Client } from "twitter-api-sdk";


const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  650: 1,
};
const itemData = [
  {
    img: "https://source.unsplash.com/random/boy?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/love?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/dance?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/hot?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/boy?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/lion?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/moon?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/sky?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/city?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/pen?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/book?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: "https://source.unsplash.com/random/girl?",
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
];
const Home = () => {
  const { handleSubmit, register } = useForm();
  const clientt = new Client(process.env.TWITTER_BEARER_TOKEN);
  const [open, setOpen] = useState(false);
  const submitHandler = async (data) => {
    let text = JSON.stringify(data);

  
try {
  const response = await clientt.tweets.createTweet(
    {
      text: text,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`, 
      },
    }
  );   
  console.log(response)
  toast.success("Tweet created successfully")
} catch (error) {
  console.log(error)
  toast.error("Some Error Occurred")
}
   
   


  };
  
  return (
    <Box sx={{ width: "100%" }}>
      {/* Hero Section  */}

      <Hero />

      {/* Social Container  */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          marginTop: 3,
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            paddingLeft: "1em",
            fontSize: "1.4rem",
            marginX: "1em",
            flex: 1 / 2,
          }}
        >
          SHARE YOUR PHOTOS OR VIDEOS USING{" "}
          <Typography sx={{ color: "orangered" }}>#BEYERDYNAMIC</Typography> FOR
          THE CHANCE TO GET FEATURED ON OUR SOCIAL WALL!
        </Typography>
        {
          <Box
            sx={{
              display: { md: "flex", sm: "none", xs: "none" },
              flex: 1 / 2,
              marginX: "1em",
              gap: 1.4,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Typography sx={{ textTransform: "uppercase", paddingLeft: "1em" }}>
              Follow Us :{" "}
            </Typography>
            <Instagram
              sx={{ cursor: "pointer", fontSize: 30, color: "#A353A6" }}
            />
            <Facebook
              sx={{ cursor: "pointer", fontSize: 30, color: "#2763C2" }}
            />
            <Twitter
              sx={{ cursor: "pointer", fontSize: 30, color: "#1D9BF0" }}
            />
            <LinkedIn
              sx={{ cursor: "pointer", fontSize: 30, color: "#2763C2" }}
            />
            <MusicNoteSharp
              sx={{ cursor: "pointer", fontSize: 30, color: "#050510" }}
            />
          </Box>
        }
      </Box>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {itemData.map((item, index) => (
          <Card key={index} img={item.img} desc={item.desc} />
        ))}

        <Button
          variant="soft"
          color="danger"
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
        >
          New Post
        </Button>
      </Masonry>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog sx={{ borderRadius: 0 }}>
          <DialogTitle>Create new Post</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Write your tweet Tweet</FormLabel>
                <Input
                  {...register("tweet", { required: true })}
                  autoFocus
                  required
                />
              </FormControl>
              {/* <FormControl>
                <FormLabel>Consumer Key</FormLabel>
                <Input {...register("consumerKey")} autoFocus required />
              </FormControl>
                <FormLabel>Consumer Key</FormLabel>
                <Input {...register("consumerKey")} autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Consumer Secret</FormLabel>
                <Input {...register("consumerSecret")} autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Access Token</FormLabel>
                <Input {...register("accessToken")} autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Access Token Secret</FormLabel>
                <Input {...register("accessTokenSecret")} autoFocus required />
              </FormControl> */}
              <Button variant="solid" color="danger" type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </Box>
  );
};

export default Home;

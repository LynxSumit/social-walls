import React from 'react'
import Hero from './Hero'
import { Box, Typography } from '@mui/joy'
import { Facebook, Instagram, LinkedIn, MusicNoteSharp, Twitter } from '@mui/icons-material'
import Masonry from 'react-masonry-css'
import Card from './Card'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  
};
const itemData = [
  
  {
    img: 'https://source.unsplash.com/random/boy?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/love?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/dance?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/hot?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/boy?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/lion?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/moon?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/sky?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/city?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/pen?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/book?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  },
  {
    img: 'https://source.unsplash.com/random/girl?',
    desc: `Some Quick Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quae, porro. Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad tempore. Voluptate aut perspiciatis illum enim, exercitationem tenetur reprehenderit ratione laborum ipsam maiores aperiam obcaecati dolor expedita dignissimos impedit accusamus eveniet delectus laudantium pariatur.`,
  }
];
const Home = () => {
  return (
    <Box sx={{width : '100%'}}>

    {/* Hero Section  */}

      <Hero/>

      {/* Social Container  */}

      <Box sx={{display : 'flex', flexDirection : {xs : 'column', md : 'row', justifyContent : 'space-between', marginTop : '3rem', mx : 'auto', width : '100%'  }}}>
        <Typography sx={{paddingLeft : '1em', fontSize : '1.4rem', marginX : '1em'}}>
        SHARE YOUR PHOTOS OR VIDEOS USING <Typography sx={{color: 'orangered'}}>#BEYERDYNAMIC</Typography> FOR THE  CHANCE TO GET FEATURED ON OUR SOCIAL WALL!
        </Typography>
        <Box sx={{display : 'flex',flex : 1/4, marginX : 'auto', gap : 1.4, marginY : '1em', alignItems : 'self-start'}}>
<Typography  sx={{textTransform : 'uppercase', paddingLeft : '1em'}}>Follow Us : </Typography>
<Instagram sx={{cursor : 'pointer', fontSize : 30, color : '#A353A6'}}/>
<Facebook sx={{cursor : 'pointer', fontSize : 30, color : '#2763C2'}}/>
<Twitter sx={{cursor : 'pointer', fontSize : 30, color : '#1D9BF0'}}/>
<LinkedIn sx={{cursor : 'pointer', fontSize : 30, color : '#2763C2'}}/>
<MusicNoteSharp sx={{cursor : 'pointer', fontSize : 30, color : '#050510'}}/>
        </Box>
      </Box>



      
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"> 
        {itemData.map((item, index) => (
          <Card key={index} img={item.img} desc={item.desc} />
        ))}


       </Masonry> 
    

    </Box>
  )
}


export default Home

import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ChevronRightIcon  from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon  from '@mui/icons-material/ChevronLeft';


const Catalog = () => {
  const [images, setImages] = useState([
    { name:"Maldives",
      url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      thumbnailUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      details: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ad iusto non quam sint recusandae commodi, autem mollitia sequi excepturi eius aspernatur dolores corporis, eveniet eum voluptates! Iusto, libero velit?   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ad iusto non quam sint recusandae commodi, autem mollitia sequi excepturi eius aspernatur dolores corporis, eveniet eum voluptates! Iusto, libero velit?',
    },
    {
        name:"Maldives",
      url: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      thumbnailUrl: 'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      details: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ad iusto non quam sint recusandae commodi, autem mollitia sequi excepturi eius aspernatur dolores corporis, eveniet eum voluptates! Iusto, libero velit?  aspernatur dolores corporis, eveniet eum voluptates! Iusto, libero velit?',
    },
    {
        name:"Maldives",
      url: 'https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80',
      thumbnailUrl: 'https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1726&q=80',
      details: '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ad iusto non quam sint recusandae commodi, autem mollitia sequi excepturi eius aspernatur dolores corporis, eveniet eum voluptates! Iusto, libero velit?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ad iusto non quam sint recusandae commodi, autem mollitia sequi excepturi eius aspernatur dolores corporis, eveniet eum voluptates! Iusto, libero velit?',
    },
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const handlePreviousImage = () => {
    const previousIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousIndex);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleSlideshowToggle = () => {
    setIsSlideshowActive((prevState) => !prevState);

    // Reset to the first image if slideshow is activated
    if (!isSlideshowActive) {
      setCurrentImageIndex(0);
    }
  };

  useEffect(() => {
    let intervalId;
    if (isSlideshowActive) {
      intervalId = setInterval(() => {
        handleNextImage();
      }, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isSlideshowActive, currentImageIndex])

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={6} m={"30px"}>
          {/* Display current image with details */}
          <Box style={{ maxWidth: '100%' }}>
            <img
              src={images[currentImageIndex].url}
              alt="Catalog Image"
              style={{ maxWidth: '100%', borderRadius: '30px' }}
            />
          </Box>

          <Box display={"flex"} >
            <Box display={"flex"} mt="40px" width={"100%"}>
      <IconButton onClick={handlePreviousImage}>
          <ChevronLeftIcon />
        </IconButton>
        {images.map((image, index) => (
          <IconButton
            key={index}
            onClick={() => handleThumbnailClick(index)}
            color={currentImageIndex === index ? 'primary' : 'default'}
          >
            <img
  src={image.thumbnailUrl}
  height={100}
  alt={`Thumbnail ${index}`}
  style={{
    maxWidth: isSmallScreen ? '60px' : '100%',
    width: isSmallScreen ? '100px' : 'auto',
  }}
/>
          </IconButton>
        ))}
        <IconButton onClick={handleNextImage}>
          <ChevronRightIcon />
        </IconButton>
        
      </Box>
      <Box marginLeft={isSmallScreen ? 0 : 20} marginTop={9.5}>
  <IconButton onClick={handleSlideshowToggle}>
    {isSlideshowActive ? <PauseIcon /> : <PlayArrowIcon />}
  </IconButton> 
</Box>
      </Box> 
        </Grid>
        <Grid
    item
    xs={12}
    sm={4}
    m={5}
    overflow={isSmallScreen ? 'scroll' : undefined}
    height={isSmallScreen ? '340px' : undefined}
  >
    <Typography align='justify' p="10px" fontSize={36} fontWeight={600}>
      {images[currentImageIndex].name}
    </Typography>
    <Typography align='justify' variant="body1">
      {images[currentImageIndex].details}
    </Typography>
  </Grid>
      </Grid>
      {/* Thumbnail images */}
    
    </Box>
  );
};

export default Catalog;

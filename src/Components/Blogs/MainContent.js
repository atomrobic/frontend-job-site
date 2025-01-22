import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import './MainContent.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function InstagramPost() {
  const dummyData = {
    username: "john_doe",
    postImage: "https://cdn.pixabay.com/photo/2023/09/16/20/14/ai-generated-8257503_1280.jpg",
    likes: 120,
    description: "Exploring the beauty of AI-generated art. #AIArt #DigitalCreativity",
    timeAgo: "2 DAYS AGO",
    tags: ["AI Art", "Digital Creativity", "Inspiration"], // Tags for the post
    link: "https://example.com/post/123", // Link to the post
  };

  return (
    <Card
      className="card-container"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '8px',
        padding: 2,
      }}
    >
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 1 }}>
        <Box className="icon-container">
          <AccountCircleIcon sx={{ fontSize: '30px', color: 'white' }} /> {/* User Icon */}
        </Box>
        <Typography sx={{ fontWeight: 'lg' }}>{dummyData.username}</Typography>
        <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto' }}>
          <MoreHoriz sx={{ color: 'white' }} />
        </IconButton>
      </CardContent>

      <CardOverflow>
        <AspectRatio className="images_blog">
          <Link href={dummyData.link} target="_blank" rel="noopener noreferrer">
            <img src={dummyData.postImage} alt="Post" loading="lazy" />
          </Link>
        </AspectRatio>
      </CardOverflow>

      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }}>
        <Box className="icon-buttons">
          <IconButton
            className="iconss-button"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ color: 'white' }}
          >
            <FavoriteBorder />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '20px' }}>
          <IconButton
            className="icons-button"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ color: 'white' }}
          >
            <BookmarkBorderRoundedIcon />
          </IconButton>
        </Box>
      </CardContent>

      <CardContent>
        <Typography sx={{ fontSize: 'sm' }}>
          <Link
            href={dummyData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            component="button"
          >
            <div>
            <strong>
              <h3>heading</h3>
            </strong>
            </div>
          </Link>
          {' '}
          <div>
          <Link
            href={dummyData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <div className="discrp">{dummyData.description}</div>
          </Link>
          </div>
        </Typography>
        <Link
          className="link"
          component="button"
          sx={{ fontSize: '10px', my: 0.5 }}
          href={dummyData.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dummyData.timeAgo}
        </Link>
      </CardContent>

      {/* Tag Post Section */}
      <CardContent>
        <Typography sx={{ fontSize: 'sm', marginTop: '10px' }}>
          <strong>Tags</strong>
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '5px' }}>
          {dummyData.tags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '16px',
                padding: '4px 12px',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              #{tag}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

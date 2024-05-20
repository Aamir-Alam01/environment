import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const OutlinedButtons =()=> {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" href="#outlined-buttons">
        Create
      </Button>
    </Stack>
  );
}

const ContainedButtons =() =>{
  return (
    <Stack direction="row" spacing={2}>

      <Button variant="contained" href="#contained-buttons">
        CREATE
      </Button>
    </Stack>
  );
}



const BasicTextFields = ({labelName}) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={labelName} variant="outlined" />
    </Box>
  );
}





const BasicButtons = ({name})=> {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{name}</Button>
    </Stack>
  );
}



const MediaCard = ({value, title, para, path}) =>{
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={path}
        title="Cards"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        <span className='icon'><WorkspacePremiumIcon color='primary'/></span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>{para}</p>
        </Typography>
      </CardContent>
      <CardActions>
      
        <BasicButtons name={value}/>
        
      </CardActions>
    </Card>
  );
}


const ResourceCard = ({ title, para, path, link})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={path}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {para}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="whatsapp://send?text="link>Share</Button>
        <Button size="small" href={link} target='_blank'>Learn More</Button>
      </CardActions>
    </Card>
  );
}





export {
  BasicTextFields,
  BasicButtons,
  MediaCard,
  OutlinedButtons,
  ContainedButtons,
  ResourceCard
  // CommunityPostCard,
  // CardCreator
}



// const CardCreator = ()=>{
//   return(
//     <CCard style={{ width: '18rem' }}>
//   <CCardImage orientation="top" src={ReactImg} />
//   <CCardBody>
//     <CCardTitle>Card title</CCardTitle>
//     <CCardText>
//       Some quick example text to build on the card title and make up the bulk of the card's content.
//     </CCardText>
//     <CButton color="primary" href="#">Go somewhere</CButton>
//   </CCardBody>
// </CCard>
//   );
// }



// import { styled } from '@mui/material/styles';
// import CardHeader from '@mui/material/CardHeader';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// import { CCard, CCardBody, CCardImage, CCardTitle, CButton } from '@coreui/react';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// const CommunityPostCard =()=> {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
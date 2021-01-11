import { Container, Paper } from '@material-ui/core';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Home from '../src/pages/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(150),
      height: theme.spacing(80),
      backgroundColor: '#cfe8fc'

    },
  },
}));
function App(props) {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
         <Header />
           <div className={classes.root}>
             <Paper elevation={3}>
               <Home />
             </Paper>
           </div>
      </Container>
    </div>
  );
}

export default App;

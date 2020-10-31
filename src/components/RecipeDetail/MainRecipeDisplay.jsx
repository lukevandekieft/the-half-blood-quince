import React from 'react';
import PropTypes from 'prop-types';
import NavButton from '../Widgets/NavButton/NavButton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeRecipe } from '../../actions';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function MainRecipeDisplay({author, createdDate, currentRecipe, dispatch, imageLink, name, rating, url, user}){
  const altText = `${name} Recipe`;
  const backgroundImage = {
    backgroundImage: `url(${imageLink})`
  };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  //delete recipe from popup
  const handleClickDelete = () => {
    dispatch(removeRecipe(currentRecipe, user));
  };

  return (
    <div className='mainRecipeContainer'>
      <div>
        <div className='recipeDetailPicture'>
          <div className='imagePlaceholder'>
          </div>
          <div className='recipeImage'  style={backgroundImage} alt={altText}></div>
        </div>
        {(createdDate) && (
          <p className='centerMe'><em>Added on {moment(createdDate).format('M/D/YYYY')}</em></p>
        )}
        {(rating) && (
          <Rating name="read-only" value={rating} readOnly />
        )}
      </div>

      <div className='mainDetailContainer'>
        <h1 className='centerMe'>{name}</h1>
        {author && (
          <h3 className='centerMe'>{author}</h3>
        )}
        <div>
          {(url) && (
            <div className='centerMe'>
              <Button className='navButtonStyle button-green' variant="contained"> 
                <a className='linkStyle' href={url} target="_blank" rel="noopener noreferrer">Link to Page</a>
              </Button>
            </div>
          )}
          <NavButton
            linkPath={`/edit-recipe/${currentRecipe}`}
            linkText='Edit Recipe'
          />
          <div className='centerMe'>
            <Button variant="outlined" color="primary" className='navButtonStyle button-red' onClick={handleClickOpen}>
              Delete Recipe
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to delete this recipe?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Link to='/'><Button onClick={handleClickDelete} color="secondary">
                  Delete
                </Button></Link>
              </DialogActions>
            </Dialog> 
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

MainRecipeDisplay.propTypes = {
  currentRecipe: PropTypes.string,
  imageLink: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  url: PropTypes.string
};

export default connect(mapStateToProps)(MainRecipeDisplay);

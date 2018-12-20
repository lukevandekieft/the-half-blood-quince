import React from 'react';
import NavButton from './NavButton';

function EditRecipeForm(){
  return (
    <div>
      <form>
        <button type="submit">Submit</button>
        <NavButton
          linkPath='/'
          linkText='Cancel Changes'
        />
      </form>
    </div>
  );
}

export default EditRecipeForm;

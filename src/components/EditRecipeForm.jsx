import React from 'react';
import NavButton from './NavButton';

function EditRecipeForm(){
  return (
    <div>
      <form>
        <button type="submit">Submit</button>
        <NavButton />
        <NavButton />
      </form>
    </div>
  );
}

export default EditRecipeForm;

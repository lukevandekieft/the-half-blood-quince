import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    searchMenuOpen: false
  });

  const toggleDrawer = (menuBoolean) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ searchMenuOpen: menuBoolean });
  };

  const searchModal = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      Toggle Search List
    </div>
  );

  return (
    <div key={"top"}>
      <Button onClick={toggleDrawer(true)}>Search</Button>
      <SwipeableDrawer
        anchor={"top"}
        open={state["searchMenuOpen"]}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {searchModal()}
      </SwipeableDrawer>
    </div>
  );
}
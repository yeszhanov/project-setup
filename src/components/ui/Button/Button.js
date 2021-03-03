import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    background: '#004B94',
    borderRadius: '6px',
    padding: '16px 44px',
    color: 'white',
    '&:hover': {
      background: '#004B94',
    },
    '&.MuiButton-root.Mui-disabled': {
      color: 'grey',
    },
  },
});

const MyButton = (props) => {
  const classes = useStyles();

  return (
    <Button {...props} className={` ${classes.button} `}>
      {props.children}
    </Button>
  );
};

MyButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
};

MyButton.defaultProps = {
  fullWidth: false,
  size: 'medium',
};

export default MyButton;

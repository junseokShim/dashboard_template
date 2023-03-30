import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px 0',
  },
  button: {
    marginTop: '10px',
  },
}));

function MyComponent() {
  const classes = useStyles();
  const [checkedA, setCheckedA] = React.useState(false);
  const [checkedB, setCheckedB] = React.useState(false);
  const [checkedC, setCheckedC] = React.useState(false);

  const handleCheckA = (event) => {
    setCheckedA(event.target.checked);
  };

  const handleCheckB = (event) => {
    setCheckedB(event.target.checked);
  };

  const handleCheckC = (event) => {
    setCheckedC(event.target.checked);
  };

  return (
    <div className={classes.container}>
      <div className={classes.checkboxGroup}>
        <Checkbox
          checked={checkedA}
          onChange={handleCheckA}
          color="primary"
        />
        <label>A</label>
      </div>
      <div className={classes.checkboxGroup}>
        <Checkbox
          checked={checkedB}
          onChange={handleCheckB}
          color="primary"
        />
        <label>B</label>
      </div>
      <div className={classes.checkboxGroup}>
        <Checkbox
          checked={checkedC}
          onChange={handleCheckC}
          color="primary"
        />
        <label>C</label>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        확인
      </Button>
    </div>
  );
}

export default MyComponent;
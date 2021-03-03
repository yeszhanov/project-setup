import { makeStyles, createStyles } from '@material-ui/core/styles';

const userDataFormStyle = makeStyles(() =>
  createStyles({
    formControl: {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'flex-start',
      flex: '0 0 33.333333%',
    },
    formWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      borderLeft: '2px solid #E8E8E8',
      paddingLeft: '25px',
    },
    selectStyle: {
      width: '167px',
    },
    applicationFormWrapper: {
      display: 'inline-flex',
      flexFlow: 'column',
      alignItems: 'flex-start',
      marginTop: '34px',
      height: '100px',
      justifyContent: 'space-between',
    },
    applicationWrapper: {
      width: '60%',
    },
    inoutError: {
      color: 'red',
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#333333',
    },
  })
);

export default userDataFormStyle;

import BackDrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const PageLoader = () => {
  return (
    <BackDrop open={true} sx={theme => ({ zIndex: theme.zIndex.drawer + 1 })}>
      <CircularProgress color='inherit' />
    </BackDrop>
  );
};

export default PageLoader;

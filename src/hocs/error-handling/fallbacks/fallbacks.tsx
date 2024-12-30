import RestartIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import resetApp from '@/utils/resetApp';

function AppErrorBoundaryFallback() {
  return (
    <Box height={400} display='flex' justifyContent='center' alignItems='center'>
      <Paper sx={{ p: 5 }}>
        <Typography variant='h5' component='h3'>
          Oooops... Sorry, I guess, something went wrong. You can:
        </Typography>
        <Button startIcon={<RestartIcon />} sx={{ mt: 3 }} variant='outlined' onClick={resetApp}>
          Press here to reset the application
        </Button>
      </Paper>
    </Box>
  );
}

export default AppErrorBoundaryFallback;

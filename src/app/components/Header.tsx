import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import logo from '../icon.png'

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: '4px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '8px 16px',
      }}
    >
      <Image src={logo} alt="logo" width={40} height={40} />
      <Typography level="h4" sx={{ marginLeft: 2 }}>
        Avax Chad
      </Typography>
      {/* Add more items here if needed */}
    </Box>
  );
}
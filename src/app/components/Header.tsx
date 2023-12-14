import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import logo from '../icon.png';
import joe from '../../../public/joe-logo.png';
import st from '../../../public/snowtrace.png';
import x from '../../../public/x.png';
import tg from '../../../public/tg.png';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: '4px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
      }}
    >
      <Box display="flex">
        <Image src={logo} alt="logo" width={40} height={40} />
        <Typography level="h4" sx={{ marginLeft: 2 }}>
          Avax Chad
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            src={st}
            alt="snowtrace logo"
            priority
            width={36}
            height={36}
            />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            src={joe}
            alt="trader jpe logo"
            priority
            width={32}
            height={32}
            />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            src={x}
            alt="x logo"
            priority
            width={42}
            height={42}
            />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            src={tg}
            alt="telegram logo"
            priority
            width={32}
            height={32}
            />
        </a>
      </Box>
      {/* Add more items here if needed */}
    </Box>
  );
}
"use client"
import Image from 'next/image';
import styles from './page.module.css';
import { Box, Button, Container, Divider, Typography, typographyClasses } from '@mui/joy';
import TwoSidedLayout from './components/TwoSidedLayout';
import { ArrowForward } from '@mui/icons-material';
import CopyToClipboardButton from './components/CopyToClipboard';
import Header from './components/Header';
import { Tweet } from 'react-tweet';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TwoSidedLayout>
        <Typography color="primary" fontSize="lg" fontWeight="lg">
          $CHAD on Avalanche
        </Typography>
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          The Chad Coin for the Chad Chain
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Its about time <strong>$CHAD</strong> comes to <strong>AVAX</strong>. Lets show those jeet chains what we&apos;re made of!
        </Typography>
        <Link href="#">
          <Button color="primary" size="lg" endDecorator={<ArrowForward />}>
            Buy on Trader Joe
          </Button>
        </Link>
        <Box display="flex" alignItems="center">
          <Typography>
            Token:{' '}
            <span>
              <code className={styles.code}>{process.env.NEXT_PUBLIC_ERC20_CONTRACT}</code>
            </span>
          </Typography>
          <CopyToClipboardButton message={process.env.NEXT_PUBLIC_ERC20_CONTRACT!!} />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>
            LP:{' '}
            <span>
              <code className={styles.code}>{process.env.NEXT_PUBLIC_POOL_CONTRACT}</code>
            </span>
          </Typography>
          <CopyToClipboardButton message={process.env.NEXT_PUBLIC_POOL_CONTRACT!!} />
        </Box>
      </TwoSidedLayout>
      <section className={styles.section}>
      <Typography textAlign="center" fontWeight={600}>Available on</Typography>
      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            className={styles.logo}
            src="/avalanche.png"
            alt="avax logo"
            priority
            width={200}
            height={40}
            />
        </a>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            className={styles.logo}
            src="/dexscreener.png"
            alt="dexscreener logo"
            priority
            width={200}
            height={40}
            />
        </a>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            className={styles.logo}
            src="/dextools.png"
            alt="dextools logo"
            priority
            width={140}
            height={40}
            />
        </a>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          >
          <Image
            className={styles.logo}
            src="/joe.png"
            alt="trader joe logo"
            priority
            width={146}
            height={40}
            />
        </a>
      </div>
      </section>
      <Container
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: 'row',
          gap: 6,
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: 'stretch',
          [theme.breakpoints.up(834)]: {
            alignSelf: 'initial',
            flexGrow: 1,
          },
          borderRadius: 'sm',
          bgcolor: 'background',
          flexBasis: '50%',
        })}
      >
        <div className='light'>
          <Tweet id='1590420350009233408' />
        </div>
        <div className='light'>
          <Tweet id='1588191874715623426' />
        </div>
       </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          maxWidth: '50ch',
          textAlign: 'center',
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: 'flex-start',
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        <Typography
          level="h1"
          fontWeight="xl"
          fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
        >
          C-Chain =
          <br /> 
          Chad Chain
        </Typography>
        <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
          Listen up, Chads! The moment we&apos;ve all been memeing of is upon us - it&apos;s high time for Avalanche (AVAX) to ascend its rightful throne as the Chad Chain of the crypto world. 
        </Typography>
        <Divider />
        <Typography
          level="h3"
          fontWeight="xl"
        >
          Ownership Renounced
        </Typography>
        <code className={styles.code}>0x000000000000dfwsfsdf<span><CopyToClipboardButton message='0x000000000000dfwsfsdf' /></span></code>
        <Typography
          level="h3"
          fontWeight="xl"
        >
          100% Liquidity Locked
        </Typography>
        <code className={styles.code}>3 Months</code>
        <Typography
          level="h3"
          fontWeight="xl"
        >
          Buy / Sell Tax
        </Typography>
        <code className={styles.code}>2%</code>
        </Box>
      </Container>
      <p>NFA. $CHAD is a meme coin with no intrinsic value or expectation of financial return.</p>
    </main>
  )
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function HeroSection() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        $CHAD on Avalanche
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        The Meme Coin for the Chad Chain
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Its about time <strong>$CHAD</strong> comes to <strong>AVAX</strong>. Lets show those jeet chains what we&apos;re made of!
      </Typography>
      <Button color="primary" size="lg" endDecorator={<ArrowForward />}>
        Buy on Trader Joe
      </Button>
    </TwoSidedLayout>
  );
}

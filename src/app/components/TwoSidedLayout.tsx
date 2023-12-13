"use client"
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import Image from 'next/image';

export default function TwoSidedLayout({
  children,
  reversed,
}: React.PropsWithChildren<{ reversed?: boolean }>) {
  return (
    <Container
      sx={(theme) => ({
        display: 'flex',
        flexDirection: reversed ? 'column-reverse' : 'column',
        alignItems: 'center',
        py: 4,
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
        sx={{
          display: 'flex',
          position:'relative',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1rem',
          flex: 1,
        }}
      >
        {children}
      </Box>
      <AspectRatio
        sx={{
          flex: 1,
          width: "100%",
        }}
        ratio={900/895}
      >
        <Image
          src="/Chad-Meme.png"
          alt="Hero"
          priority
          fill
        />
      </AspectRatio>
    </Container>
  );
}

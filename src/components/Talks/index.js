import React from 'react';
import {Box, Heading} from 'rebass';
import styled from 'styled-components/macro';

import talks from './talks.json';
import TalkCard from '../TalkCard';

const Container = styled.div`
  position: relative;

  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  &:before {
    content: '';

    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;

    background-color: rgba(44, 62, 80, 0.9);
  }
`;

function Talks() {
  return (
    <Container>
      <Box
        css={{maxWidth: '948px', position: 'relative'}}
        m="0 auto"
        px={[3, 4, 0]}
        py={5}
        width={[null]}
      >
        <Heading color="white" fontSize={28} fontWeight="normal">
          Charlas
        </Heading>

        <Box
          mt={3}
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gridGap: '20px',
          }}
        >
          {talks.map(talk => (
            <TalkCard key={talk.id} {...talk} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Talks;

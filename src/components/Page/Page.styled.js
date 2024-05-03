import styled from 'styled-components';

/**
 * Styled page container to contain main page elements.
 */
const Page = styled('div')({
  height: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '32px',
  lineHeight: '1.15',
  color: '#000000',
  '&:last-child': {
    marginBottom: '40px',
  },
});

export default Page;

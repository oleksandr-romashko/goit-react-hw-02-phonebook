import styled from 'styled-components';

/**
 * Simple styled header to display a page title.
 */
const Header = styled('p')({
  width: '100%',
  paddingTop: '16px',
  paddingBottom: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  fontSize: '64px',
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  backgroundColor: '#000000',
});

export default Header;

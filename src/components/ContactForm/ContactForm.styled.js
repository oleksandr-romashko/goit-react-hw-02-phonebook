import styled from 'styled-components';

/**
 * Styled from to contain new contact information.
 */
export const Form = styled('form')(props => {
  return {
    width: '100%',
    maxWidth: '677px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 18px',
    alignItems: 'flex-start',
    rowGap: '40px',
    border: '2px solid #212121',
  };
});

/**
 * Label for input element.
 */
export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '14px',

  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '32px',
});

import styled from 'styled-components';

const Button = styled('button')({
  display: 'inline-flex',
  padding: '6px 16px',
  justifyContent: 'center',
  alignItems: 'center',

  fontFamily: 'inherit',
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '22px',

  /* prevent text selection */
  '-webkit-user-select': 'none' /* Safari */,
  '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  'user-select': 'none' /* Standard syntax */,

  borderRadius: '6px',
  border: '1px solid #d0d0d0',
  backgroundColor: '#fff',
  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',

  '&:active': {
    border: '1px solid #2764bb',
    background: 'linear-gradient(180deg, #4a94fc 0%, #0a67e3 100%)',
  },
});

export default Button;

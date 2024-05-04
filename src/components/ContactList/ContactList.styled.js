import styled from 'styled-components';

/**
 * Styled list to display contacts.
 */
export const List = styled('ul')({
  width: 'fit-content',
  marginLeft: '52px',
  listStyleType: 'disc',
});

/**
 * Styled list item to display specific contact.
 */
export const Item = styled('li')({
  width: '100%',
  '&:not(:first-child) ': {
    marginTop: '32px',
  },
  '& > *': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: '24px',
  },
});

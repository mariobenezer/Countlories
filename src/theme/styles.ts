const styles = {
  global: {
    body: {
      overflowX: 'hidden',
      fontFamily: 'Nunito',
      background: '#8F9779',
    },
    '.js-focus-visible :focus:not([data-focus-visible-added])': {
      outline: 'none',
      boxShadow: 'none',
    },
    '.rc-menu__item--hover': {
      backgroundColor: '#EDF2F7',
    },
    '.rc-menu__item--active': {
      color: 'black',
      backgroundColor: '#E2E8F0',
    },
  },
}

export default styles

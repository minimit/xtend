module.exports = {
  component: {
    '.group-number': {
      'input[type="number"]': {
        '-moz-appearance': 'textfield',
        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
          appearance: 'none',
        },
      },
    },
  },
}

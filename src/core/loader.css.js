module.exports = {
  component: theme => ({
    '.loader': {
      // setup
      position: 'absolute',
      zIndex: theme('zIndex.top'),
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      borderRadius: 'inherit !important',
      overflow: 'hidden',
    },
    '.filler': {
      // setup
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      margin: 'auto',
      span: {
        position: 'absolute',
        top: '0',
        left: '0',
      },
    },
    '.spinner': {
      // setup
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      margin: 'auto',
      // styles
      width: '25px',
      height: '25px',
      lineHeight: '0',
      '.btn &': {
        width: '1em',
        height: '1em',
      },
      svg: {
        circle: {
          fill: 'none',
          strokeWidth: '30',
          transformBox: 'border-box',
          transformOrigin: 'center center',
          '.btn &': {
            strokeWidth: '40',
          },
        },
        '&:nth-child(1)': {
          position: 'relative',
          zIndex: theme('zIndex.active'),
          circle: {
            strokeDashoffset: '628',
            transform: 'rotateY(0deg) rotateZ(-90deg)',
          },
        },
        '&:nth-child(2)': {
          position: 'absolute',
          top: '0',
          left: '0',
          circle: {
            strokeDashoffset: '0',
          },
        },
      },
    },
    '.loader-x': {
      // setup
      '.filler': {
        span: {
          width: '100%',
          height: '100%',
        },
        // styles
        'span:nth-child(1)': {
          width: '0',
        },
      },
    },
    '.loader-y': {
      // setup
      '.filler': {
        span: {
          width: '100%',
          height: '100%',
        },
        // styles
        'span:nth-child(1)': {
          height: '0',
        },
      },
    },
    '.loader-size-top': {
      // setup
      '.filler': {
        bottom: 'auto',
        span: {
          top: '0',
        },
      },
    },
    '.loader-size-bottom': {
      // setup
      '.filler': {
        top: 'auto',
        span: {
          bottom: '0',
        },
      },
    },
    '.loader-size-left': {
      // setup
      '.filler': {
        right: 'auto',
        span: {
          left: '0',
        },
      },
    },
    '.loader-size-right': {
      // setup
      '.filler': {
        left: 'auto',
        span: {
          right: '0',
        },
      },
    },
    '.loader-size-x, .loader-size-top, .loader-size-bottom': {
      // styles
      '.filler': {
        height: '3px',
      },
    },
    '.loader-size-y, .loader-size-left, .loader-size-right': {
      // styles
      '.filler': {
        width: '3px',
      },
    },
    '.loader-size-x': {
      // styles
      '.filler': {
        left: '25%',
        right: '25%',
      },
    },
    '.loader-size-y': {
      // styles
      '.filler': {
        top: '25%',
        bottom: '25%',
      },
    },
    '.spinner-animated': {
      // animation
      svg: {
        '&:nth-child(1)': {
          circle: {
            animation: 'spinner 1500ms infinite',
          },
        },
      },
    },
    '.loader-x-animated': {
      // animation
      '.filler': {
        'span:nth-child(1)': {
          animation: 'filler-x 1500ms infinite',
        },
      },
    },
    '.loader-y-animated': {
      // animation
      '.filler': {
        'span:nth-child(1)': {
          animation: 'filler-y 1500ms infinite',
        },
      },
    },
  }),
}

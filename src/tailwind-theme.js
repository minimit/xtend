const merge = require('lodash.merge')

module.exports = function (custom = {}) {
  const base = {
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.8' }],
      sm: ['0.875rem', { lineHeight: '1.6' }],
      base: ['1rem', { lineHeight: '1.6' }],
      lg: ['1.125rem', { lineHeight: '1.5' }],
      xl: ['1.25rem', { lineHeight: '1.4' }],
      '2xl': ['1.5rem', { lineHeight: '1.2' }],
      '3xl': ['1.875rem', { lineHeight: '1.2' }],
      '4xl': ['2.25rem', { lineHeight: '1.2' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['4rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        // https://javisperez.github.io/tailwindcolorshades/#/?hawkes-blue=bdd3ff
        gray: {
          100: '#F8FBFF',
          200: '#EFF4FF',
          300: '#E5EDFF',
          400: '#D1E0FF',
          500: '#BDD3FF',
          600: '#AABEE6',
          700: '#717F99',
          800: '#555F73',
          900: '#393F4D',
        },
        // https://javisperez.github.io/tailwindcolorshades/#/?Azure%20Radiance=0078ff&tv=1
        accent: {
          100: '#E6F2FF',
          200: '#BFDDFF',
          300: '#99C9FF',
          400: '#4DA1FF',
          500: '#0078FF',
          600: '#006CE6',
          700: '#004899',
          800: '#003673',
          900: '#00244D',
        },
      },
      zIndex: {
        base: '0',
        active: '5',
        top: '50',
        backdrop: '500',
        drop: '600',
        sticky: '800', // same as javascript and decreses with sequential sticky
        overlay: '900',
        last: '1000',
      },
      inset: {
        '100': '100%',
      },
      transitionTimingFunction: {
        in: 'cubic-bezier(.25,.46,.45,.94)', // outQuad
        out: 'cubic-bezier(.455,.03,.515,.955)', // inOutQuad
        inSine: 'cubic-bezier(.47,0,.745,.715)',
        outSine: 'cubic-bezier(.39,.575,.565,1)',
        inOutSine: 'cubic-bezier(.445,.05,.55,.95)',
        inQuad: 'cubic-bezier(.55,.085,.68,.53)',
        outQuad: 'cubic-bezier(.25,.46,.45,.94)',
        inOutQuad: 'cubic-bezier(.455,.03,.515,.955)',
        inCubic: 'cubic-bezier(.55,.055,.675,.19)',
        outCubic: 'cubic-bezier(.215,.61,.355,1)',
        inOutCubic: 'cubic-bezier(.645,.045,.355,1)',
        inQuart: 'cubic-bezier(.895,.03,.685,.22)',
        outQuart: 'cubic-bezier(.165,.84,.44,1)',
        inOutQuart: 'cubic-bezier(.77,0,.175,1)',
        inQuint: 'cubic-bezier(.755,.05,.855,.06)',
        outQuint: 'cubic-bezier(.23,1,.32,1)',
        inOutQuint: 'cubic-bezier(.86,0,.07,1)',
        inExpo: 'cubic-bezier(.95,.05,.795,.035)',
        outExpo: 'cubic-bezier(.19,1,.22,1)',
        inOutExpo: 'cubic-bezier(1,0,0,1)',
        inCirc: 'cubic-bezier(.6,.04,.98,.335)',
        outCirc: 'cubic-bezier(.075,.82,.165,1)',
        inOutCirc: 'cubic-bezier(.785,.135,.15,.86)',
        inBack: 'cubic-bezier(.6,-.28,.735,.045)',
        outBack: 'cubic-bezier(.175,.885,.32,1.275)',
        inOutBack: 'cubic-bezier(.68,-.55,.265,1.55)',
      },
      keyframes: theme => ({
        'anim-spinner': {
          '0%': {
            strokeDashoffset: '628',
            transform: 'rotateY(0deg) rotateZ(-90deg)',
            animationTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
          '50%': {
            strokeDashoffset: '0',
            transform: 'rotateY(0deg) rotateZ(90deg)',
          },
          '50.0001%': {
            strokeDashoffset: '0',
            transform: 'rotateY(180deg) rotateZ(90deg)',
            animationTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
          '100%': {
            strokeDashoffset: '628',
            transform: 'rotateY(180deg) rotateZ(-90deg)',
          },
        },
        'anim-filler-x': {
          '0%': {
            left: '0',
            width: '0',
            animationTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
          '50%': {
            left: '0',
            width: '100%',
            animationTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
          '100%': {
            left: '100%',
            width: '0',
          },
        },
        'anim-filler-y': {
          '0%': {
            top: '0',
            height: '0',
            animationTimingFunction: theme('transitionTimingFunction.ease.in'),
          },
          '50%': {
            top: '0',
            height: '100%',
            animationTimingFunction: theme('transitionTimingFunction.ease.out'),
          },
          '100%': {
            top: '100%',
            height: '0',
          },
        },
      }),
    },
  }
  return merge(base, custom)
}
import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  synthWave: {
    themeName: 'synthWave',
    colors: {
      primary: colors.synthBabyBlue,
      text: colors.white,
      bodyBg: colors.white,
      headerBg: colors.synthBabyBlue,
      footerBg: colors.synthBabyBlue,
      footerText: colors.white,
      signUp: colors.synthHotPink,
      signUpText: colors.white,
      link: colors.synthDarkPurple,
      socialIcons: colors.synthYellow,
      ...colors,
    },
  },
  default: {
    themeName: 'default',
    colors: {
      primary: colors.synth.palette1.darkPurple,
      text: colors.synth.palette1.darkPurple,
      bodyBg: colors.gray,
      headerBg: colors.synth.palette1.darkPurple,
      footerBg: colors.synth.palette1.darkPurple,
      footerText: colors.white,
      signUp: colors.synth.palette3.darkBlue,
      signUpText: colors.white,
      link: colors.synth.palette1.pink,
      socialIcons: colors.white,
      accent: colors.synth.palette1.pink,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.synth.palette1.darkPurple),
      text: colors.white,
      bodyBg: colors.synth.palette1.darkPurple,
      headerBg: colors.synth.palette3.darkBlue,
      footerBg: colors.synth.palette3.darkBlue,
      footerText: colors.white,
      signUp: colors.synth.palette3.darkBlue,
      signUpText: colors.white,
      link: lighten(0.05, colors.synth.palette1.pink),
      socialIcons: colors.white,
      accent: colors.synth.palette1.pink,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }

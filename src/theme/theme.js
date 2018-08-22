const colour = {
  darkGrey: '#191f21',
  darkestGrey: '#0f1618',
  textPrimaryOnDark: '#c4cecf',
  textSecondaryOnDark: '#808586',
  borderOnDark: '#2e3233'
}

const type = {
  baseFontSize: 15,
  baseLineHeight: 1.5,
  headingLineHeight: 1.2,
  baseFontFamily: '"IBM Plex Sans Condensed", sans-serif',
  monoFontFamily: '"IBM Plex Mono", monospace'
}

export default {
  colour,
  type,
  app: {
    bgColour: colour.darkestGrey,
    textColour: colour.textSecondaryOnDark
  },
  iconButton: {
    fillColour: colour.textSecondaryOnDark,
    hoverFillColour: colour.textPrimaryOnDark
  },
  header: {
    bgColour: colour.darkestGrey,
    borderColour: colour.borderOnDark,
    height: 36
  },
  sidebar: {
    bgColour: colour.darkestGrey,
    borderColour: colour.borderOnDark
  },
  tabs: {
    bgColour: colour.darkestGrey,
    borderColour: colour.borderOnDark
  },
  section: {
    bgColour: colour.darkestGrey
  },
  card: {
    headerBgColour: colour.darkGrey,
    headerTextColour: colour.textPrimaryOnDark,
    bodyBgColour: colour.darkGrey,
    borderColour: colour.borderOnDark
  }
}

/**
 * Created by leon<silenceace@gmail.com> on 22/2/21.
 */

import { TextStyle, ImageSourcePropType } from 'react-native'

export interface IThemeColor {
  /**
   * ========================= Primary color : (Brand color) =========================
   * primaryDark: color for the status bar and for dark tint
   * primary: to be used as a background color for appbar(toolbar)
   * appBarTintColor: to be used for appbar title text, appbar icons color and for back button
   *
   * Example: If primary color is dark, make appbarTintColor light
   */
  primaryDark: string
  primary: string
  tabBarBackground: string
  tabBarIconInactive: string
  tabBarIconActive: string
  appbarTint: string

  lightGrey: string
  tabShadowColor: string
  tabActiveTintColor: string
  tabInactiveTintColor: string

  /**
   * ========================= Secondary color =========================
   * secondaryLight: to be used for hover state
   * secondary: to be used as default button, checkbox, spinner, radio button and other component color
   * secondaryDark: to be used for active state
   */
  secondaryLight: string
  secondary: string
  secondaryDark: string

  /**
   * disabled: To be used for disabled component background
   * disabledDark: To be used for disabled component border and text color
   */
  disabled: string
  disabledDark: string

  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older AndroiddisabledDark devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: string

  /**
   * The screen background.
   */
  background: string

  /**
   * To be used as a default background for all components, like Card, CardSection, List etc
   */
  surface: string

  /**
   * Use it for card border
   */
  border: string

  /**
   * Success messages and icons.
   */
  success: string

  /**
   * Error messages and icons.
   */
  error: string

  /**
   * The default color of text in many components.
   * To be used for heading, subheading, label text
   */
  titleText: string

  /**
   * To be used for normal text like paragraph
   */
  bodyText: string

  /**
   * To be used for hint text component
   */
  captionText: string
  black: string
  white: string
  modalBackground: string
}

export interface IThemeDimen {
  /**
   * App level constants
   */
  WINDOW_WIDTH: number
  WINDOW_HEIGHT: number
  headerHeight: number
  headerButtonSize: number
  badgeSize: number
  borderRadius: number
  defaultButtonWidth: number
  defaultButtonHeight: number
  defaultInputBoxHeight: number

  /**
   * avatar witth
   */
  avatarSize: number
}

export interface IThemeSpacing {
  tiny: number
  small: number
  medium: number
  large: number
  extraLarge: number
}

export interface IThemeTypography {
  /**
   * Title is reserved for the title of a screen(Toolbar)
   * and the titles of Modal dialogs.
   */
  titleText: TextStyle
  titleTextSemiBold: TextStyle
  /**
   * Use the Heading style for card titles.
   */
  headingText: TextStyle
  headingTextBold: TextStyle
  /**
   * Use the Subheading style to denote new sections within cards.
   */
  subheadingText: TextStyle
  subheadingTextBold: TextStyle
  /**
   * The Body text style is used widely throughout the UI.
   * Any text that isn???t a title, heading, subheading, label
   * or caption would generally use the Body style.
   */
  bodyText: TextStyle
  bodyTextBold: TextStyle
  /**
   * Use labels with form field and input elements to
   * signify the element???s function to the user.
   */
  labelText: TextStyle
  labelTextBold: TextStyle
  /**
   * Use the Caption style for help/hint text.
   * It???s used with some form fields which require a description,
   * and can also be used stand-alone within a card when necessary.
   */
  captionText: TextStyle
  captionTextBold: TextStyle
  /**
   * Use this style to change <Input /> element text style
   */
  inputText: TextStyle
}

export interface IThemeAssets {
  images: {
    icons: {
      logo: ImageSourcePropType
      icon: ImageSourcePropType
      home: ImageSourcePropType
      homeInactive: ImageSourcePropType
      discovery: ImageSourcePropType
      discoveryInactive: ImageSourcePropType
      notification: ImageSourcePropType
      notificationInactive: ImageSourcePropType
      profile: ImageSourcePropType
      profileInactive: ImageSourcePropType
      moreCycleGrey: ImageSourcePropType
      personCycleGrey: ImageSourcePropType
      timeCycleGrey: ImageSourcePropType
      heartGrey: ImageSourcePropType
      heartRed: ImageSourcePropType
      gold: ImageSourcePropType
      silver: ImageSourcePropType
      bronze: ImageSourcePropType
      arrowRightGrey: ImageSourcePropType
      send: ImageSourcePropType
      starOutline: ImageSourcePropType
      starFilled: ImageSourcePropType
      chatGrey: ImageSourcePropType
    }
  }
}

export interface ITheme {
  name: string
  colors: IThemeColor
  spacing: IThemeSpacing
  dimens: IThemeDimen
  typography: IThemeTypography
  assets: IThemeAssets
}

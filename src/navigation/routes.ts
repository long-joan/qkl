/**
 * Created by leon<silenceace@gmail.com> on 22/2/24.
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ITheme } from '@src/types'

export type RootStackParamList = {
  Draw: undefined
  Main: {
    initialRouteName: string
  }
  HomeTabs: undefined
  Node: undefined
  Notification: undefined
  My: undefined
  SignIn: undefined
  NodeTopics: { nodeName: string; nodeTitle: string }
  TopicDetail: { topicId: string }
  Profile: { username: string }
  FollowPeople: undefined
  LikeTopics: undefined
  Setting: undefined
  Language: undefined
  About: undefined
  Feedback: undefined
  Theme: undefined
  Search: { query: string }
  Readed: undefined
  WebLink: { url: string; title?: string }
}

export type CommonScreenProps = {
  loading: boolean
  error: string | null
  success: string | null
  theme: ITheme
}

export type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'> & CommonScreenProps

export type ReadedScreenProps = NativeStackScreenProps<RootStackParamList, 'Readed'> & CommonScreenProps

export type HomeTabsScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeTabs'> & CommonScreenProps

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'> &
  CommonScreenProps & {
    auth: (token: string) => void
  }

export type NotificationScreenProps = NativeStackScreenProps<RootStackParamList, 'Notification'> & CommonScreenProps

export type NodeScreenProps = NativeStackScreenProps<RootStackParamList, 'Node'> & CommonScreenProps

export type NodeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'NodeTopics'> & CommonScreenProps

export type TopicDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'TopicDetail'> & CommonScreenProps

export type MyScreenProps = NativeStackScreenProps<RootStackParamList, 'My'> & CommonScreenProps

export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'> & CommonScreenProps

export type FollowPeopleScreenProps = NativeStackScreenProps<RootStackParamList, 'FollowPeople'> & CommonScreenProps

export type LikeTopicsScreenProps = NativeStackScreenProps<RootStackParamList, 'LikeTopics'> & CommonScreenProps

export type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'> & CommonScreenProps

export type LanguageScreenProps = NativeStackScreenProps<RootStackParamList, 'Language'> & CommonScreenProps

export type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'> & CommonScreenProps

export type FeedbackScreenProps = NativeStackScreenProps<RootStackParamList, 'Feedback'> & CommonScreenProps

export type ThemeScreenProps = NativeStackScreenProps<RootStackParamList, 'Theme'> & CommonScreenProps

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'> & CommonScreenProps

export type WebLinkScreenProps = NativeStackScreenProps<RootStackParamList, 'WebLink'> & CommonScreenProps

type k1 = keyof RootStackParamList

export const ROUTES = {
  /**
   * @description ??????
   */
  Draw: 'Draw',
  /**
   * @description ?????????
   */
  Main: 'Main',
  /**
   * @description ??????
   */
  HomeTabs: 'HomeTabs',
  /**
   * @description ????????????
   */
  Profile: 'Profile',
  /**
   * @description ????????????
   */
  LatestTopics: 'LatestTopics',
  /**
   * @description ??????
   */
  HotTopics: 'HotTopics',
  /**
   * @description ??????
   */
  SignIn: 'SignIn',
  /**
   * @description ??????
   */
  Readed: 'Readed',
  /**
   * @description ??????
   */
  Notification: 'Notification',
  /**
   * @description ????????????
   */
  Node: 'Node',
  /**
   * @description ????????????
   */
  NodeTopics: 'NodeTopics',
  /**
   * @description ????????????
   */
  TopicDetail: 'TopicDetail',
  /**
   * @description ??????
   */
  My: 'My',
  /**
   * @description ??????????????????
   */
  FollowPeople: 'FollowPeople',
  /**
   * @description ?????????????????????
   */
  LikeTopics: 'LikeTopics',
  /**
   * @description ??????
   */
  Setting: 'Setting',
  /**
   * @description ????????????
   */
  Language: 'Language',
  /**
   * @description ??????
   */
  About: 'About',
  /**
   * @description ??????
   */
  Feedback: 'Feedback',
  /**
   * @description ????????????
   */
  Theme: 'Theme',
  /**
   * @description ??????
   */
  Search: 'Search',
  /**
   * @description WebUrl
   */
  WebLink: 'WebLink'
} as const

// see https://stackoverflow.com/questions/52393730/typescript-string-literal-union-type-from-enum
export type ROUTES = typeof ROUTES[keyof typeof ROUTES]

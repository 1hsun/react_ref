//@flow
// import { onSubmitUserId, onCatchUserId } from '../actions/getGithub'

export type MainProps = {
  children?: React$Element<*>,
}
export type payloadProps = {
  name: string,
  userId: string,
  avatar_url: string,
  followers: number,
  following: number,
  authed:boolean
}
export type parentProps = {
  data:Object
}
export type HomePageProps = {
  userId: string,
  onSubmitUserId: Function,
  onChangeUserId: Function,
}
export type GithubBoxProps = {
  data:string,
  onSearching:Function
}
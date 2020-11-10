export interface User {
  firstName?: string,
  lastName?: string,
  email?: string,
  profilePictureUrl?: string,
}

export enum UserAvatarSize {
  small = 'small',
  small2 = 'small-2',
  regular = 'regular',
}

export enum UserAvatarWithPlaceholderVariant {
  grey = 'grey',
  white = 'white',
}

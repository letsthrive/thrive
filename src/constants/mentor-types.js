const mentorTypes = {
  FRONTEND_DEVELOPER: 'frontend developer',
  BACKEND_DEVELOPER: 'backend developer',
  FULLSTACK_DEVELOPER: 'fullstack developer',
  CONTENT_WRITER: 'content writer',
  QUALITY_ASSURANCE: 'quality assurance',
  BUSINESS_ANALYST: 'business analyst',
  ENTREPRENEUR: 'entrepreneur',
  ANDROID_DEVELOPER: 'android developer',
  IOS_DEVELOPER: 'ios developer',
  SOLUTIONS_ARCHITECT: 'solutions architect',
}

export const isValueInList = (list, value) => {
  return list.includes(getKeyFromValue(value));
}

export const getKeyFromValue = (value) => {
  return Object.keys(mentorTypes).find(key => {
    return mentorTypes[key] === value;
  })
}

export default mentorTypes;
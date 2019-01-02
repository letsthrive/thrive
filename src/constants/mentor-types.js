const mentorTypes = {
  FRONTEND_DEVELOPER: 'frontend developer',
  BACKEND_DEVELOPER: 'backend developer',
  FULLSTACK_DEVELOPER: 'fullstack developer',
  CONTENT_WRITER: 'content writer',
  ENTREPRENEUR: 'entrepreneur',
  SOLUTIONS_ARCHITECT: 'solutions architect',
  HUMAN_RESOURCE: 'human resource',
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
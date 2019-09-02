const isDevMode = process.env.NODE_ENV === 'development'

if (isDevMode) {
  console.info('You\'re listening to the dev mode channel.')
}

export default isDevMode

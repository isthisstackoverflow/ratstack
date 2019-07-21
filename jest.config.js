module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura']
  // moduleDirectories: ['node_modules', '.'] // why? leaving this here in case I need it.
}

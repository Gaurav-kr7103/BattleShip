module.exports = {
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],

  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // FIXED: Only mapping react core lib, not all react-related packages
    'react$': '<rootDir>/vendor/react-master',
    '^config$': '<rootDir>/configs/app-config.js',
  },
};

module.exports = {
    "transform": {
      "^.+\\.(ts|tsx)?$": 'ts-jest'
    },
    "testEnvironment": "node",
    "roots": ['<rootDir>/src'],
    "collectCoverageFrom": [
       "src/**/*.ts",
       "!<rootDir>/node_modules/",
       "!src/index.ts",
       "!src/**/*.d.ts",
       "!src/**/models/*.ts",
       "!src/**/*.dataset.ts",
        "!<rootDir>/path/to/dir/"
     ],
  }
  

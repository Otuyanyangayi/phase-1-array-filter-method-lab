// Code your solution here
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Sammy',
    hometown: 'New York'
  },
  {
    name: 'Sally',
    hometown: 'Cleveland'
  },
  {
    name: 'Annette',
    hometown: 'Los Angeles'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }
];
const findMatching = (driver, check) => {
  return driver.filter((match) => match.toLowerCase() === check.toLowerCase()

  )
}


const fuzzyMatch = (driver, checkString) => {
  return driver.filter((match) => match.toLowerCase().indexOf(checkString.toLowerCase()) === 0)


}
const matchName = (driver, checkName) => {
  return driver.filter((record) => record.name === checkName)
}
// All of this is based around this stackoverflow post:
// https://stackoverflow.com/questions/48191942/using-github-api-to-retrieve-files-with-specific-extension

// To get the file path
// https://api.github.com/search/code?q=extension:md+repo:Pitt-Cyber-Security/Write-Ups

// get the value
// https://raw.githubusercontent.com/Pitt-Cyber-Security/Write-Ups/master/README.md

const pathURL = 'https://api.github.com/search/code?q=extension:md+repo:';

const getGithubPaths = repo => {
  return pathURL + repo;
};

export default getGithubPaths;

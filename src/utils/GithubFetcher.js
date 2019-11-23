// All of this is based around this stackoverflow post:
// https://stackoverflow.com/questions/48191942/using-github-api-to-retrieve-files-with-specific-extension

// To get the
// https://api.github.com/search/code?q=extension:md+repo:Pitt-Cyber-Security/Write-Ups

//
// https://raw.githubusercontent.com/Pitt-Cyber-Security/Write-Ups/master/README.md

const pathURL = 'https://api.github.com/search/code?q=extension:md+repo:';

const getGithubPaths = repo => {
  const pathsObj = {};

  fetch(pathURL + repo)
    .then(resp => resp.json())
    .then(data => {
      console.log('----data---');
      pathsObj.success = true;

      data.items.map(value => {
        console.log(value);
        if (value.path.indexOf('README.md') == -1) {
          const pathArr = value.path.split('/');
          const nestPath = (arr, index) => {
            if (arr.length - 1 === index) {
              return arr[index];
            }
            const temp = {};
            temp[arr[index]] = nestPath(arr, index + 1);
            return temp;
          };
          pathsObj.filePath = nestPath(pathArr, 0);
        }
      });
    })
    .catch(error => {
      console.log(error);
      pathsObj.success = false;
    });

  return pathsObj;
};

export default getGithubPaths;

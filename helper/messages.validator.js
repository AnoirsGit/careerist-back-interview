const checkForEmptyness = (str) =>{
  if(str && str.trim().length !== 0) return true;
  return false
}

const checkName = (str) => {
  const pattern = /^[a-zA-Z0-9_-]+$/;
  return pattern.test(str);
}

module.exports = { checkForEmptyness, checkName}
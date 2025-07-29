const sendEmail = () => {
  const characterMap = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","@","."];
  const address =
    characterMap[17] +
    characterMap[4] +
    characterMap[15] +
    characterMap[8] +
    characterMap[8] +
    characterMap[19] +
    characterMap[37] +
    characterMap[22] +
    characterMap[14] +
    characterMap[17] +
    characterMap[10] +
    characterMap[14] +
    characterMap[20] +
    characterMap[19] +
    characterMap[18] +
    characterMap[36] +
    characterMap[6] +
    characterMap[12] +
    characterMap[0] +
    characterMap[8] +
    characterMap[11] +
    characterMap[37] +
    characterMap[2] +
    characterMap[14] +
    characterMap[12]

  window.location.href = "mailto:" + address;
}
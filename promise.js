const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emotion) => {
  let sumEmotion = 0;
  await promiseTheaterIXX().then(
    (resultIXX) =>{
      resultIXX.forEach((e)=>{
          if(e.hasil == emotion) sumEmotion++;
      });
    }
    );
  await promiseTheaterVGC().then(
    (resultVGC) => {
      resultVGC.forEach((e)=>{
        if(e.hasil == emotion) sumEmotion++;
      })
    }
  );
  return sumEmotion;
};

module.exports = {
  promiseOutput,
};

let verdadero = true;

const promise = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      if(verdadero){
        resolve(task);
      } else{
        reject("ERROR");
      }
    }, time);
  });
}

export default promise; 






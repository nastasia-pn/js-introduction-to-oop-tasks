// BEGIN
const magic = (...args) => {  
    const sum = args.reduce((acc, num) => acc + num, 0);
    
    const inner = (...newArgs) => magic(sum, ...newArgs);
  
    inner.valueOf = () => sum;
  
    return inner;
  };
  export default magic;
// END

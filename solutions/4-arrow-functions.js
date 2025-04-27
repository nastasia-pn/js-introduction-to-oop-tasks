// BEGIN
const each = (collection, fn) => {
   for (const item of collection) {
    fn.call(item)
   }
}
export default each;
// END
 
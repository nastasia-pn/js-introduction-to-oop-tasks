// BEGIN
function Point(x, y) {
    this.x = x;
    this.y = y;
  
    this.getX = function () {
      return this.x;
    };
  
    this.getY = function () {
      return this.y;
    };
  }
 
  function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
  
    this.getBeginPoint = function () {
      return this.beginPoint;
    };
  
    this.getEndPoint = function () {
      return this.endPoint;
    };
  }

  function reverse(segment) {
    const originalBegin = segment.getBeginPoint();
    const originalEnd = segment.getEndPoint();
  
    const reversedBegin = new Point(originalEnd.getX(), originalEnd.getY());
    const reversedEnd = new Point(originalBegin.getX(), originalBegin.getY());
  
    return new Segment(reversedBegin, reversedEnd);
  }
  export { Point, Segment, reverse };
// END

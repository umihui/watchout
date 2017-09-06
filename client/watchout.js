// start slingin' some d3 here.
var start = [20,30,40,50,35,15,60,30,25,40];
//var newPosition = [60,70,80,10,30,75];
// d3.select('svg').append("g").selectAll('circle')
//               .data(start)
//               .enter()
//               .append('circle')
//               .attr("cx",function(d){
//                 return d*5;
//               })
//               .attr('cy',function(d){
//                 return d*10;
//               })
//               .attr("r",function(d){
//                 return d;
//               })
//               .style("stroke","red")
//               .append('image')
//               .attr("src","asteroid.png")
//               .attr("height",function(d){
//                 return d;
//               });
d3.select('.mouse').style({
  top: '50%',
  left: '50%',
  'width': '20px',
  'height': '20px',
  'background-color': 'yellow',
  position: 'absolute',
  'border-radius' : '15px'
});



d3.select('svg').selectAll('image')
              .data(start)
              .enter()
              .append('image')
              .attr("xlink:href","asteroid.png")
              .attr("x",function(d){
                return d*10;
              })
              .attr('y',function(d){
                return d*10;
              })
              .attr('alt','umi')
              .attr('height',function(d){
                return d;
              })
              .attr('width',function(d){
                return d;
              });

// setInterval(setNewPosition, 1000);

var setNewPosition = function(){
  var currentLocation = start.map(function(item) {
    var position= [];
    if(item < 50){
      position[0] = item*Math.random()*50;
      position[1] = item*Math.random()*50;
      return position;
    } else {
      position[0] = item*Math.random()*25;
      position[1] = item*Math.random()*25;
      return position;
    }
  });

  var circle = d3.select('svg').selectAll("image")
       .data(currentLocation);

      circle.exit().remove();
      circle.enter().append('image');


        circle.transition()
            .duration(750).ease('linear-in-out')
            .attr("xlink:href","asteroid.png")

            .attr("x",function(d){
              return d[0];
            })
            .attr('y',function(d){
              return d[1];
            });
            // .attr("opacity",0.5);

}

// d3.select('.collisions').append('button')
//   .text('click me!')
//   .style("float","right")
//   .on('click',function(){
//
//      var currentLocation ;
//
//      var circle = d3.select('svg').selectAll("image")
//           .data(newPosition);
//
//          circle.exit().remove();
//          circle.enter().append('image');
//
//
//            circle.transition()
//                .duration(1000)
//                .attr("xlink:href","asteroid.png")
//
//                .attr("x",function(d){
//                  return d*5;
//                })
//                .attr('y',function(d){
//                  return d*10;
//                })
//                .attr("opacity",0.5);
//   })

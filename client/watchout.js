// start slingin' some d3 here.
var start = [20,30,40,50]

d3.select('.board').selectAll('img')
              .data(start)
              .enter()
              .append('img')
              .attr("x",function(d){
                return d*10;
              })
              .attr("src", "asteroid.png")
              .attr("width", function(d){
                return d;
              })
              .attr("height", "auto")
              .style("left",function(d){
                return d*10;
              });


d3.select('.collisions').append('button')
  .text('click me!')
  .style("float","right")
  .on('click',function(){
     var newPosition = [60,70,80];

     var circle = d3.select(".board").selectAll("img")
         .data(newPosition);

         circle.exit().remove();
         circle.enter().append('img')
           .attr("opacity",0);

           circle.transition()
               .duration(500)
               .attr("width", function(d){
                 return d;
               })
               .attr("height", "auto")
               .attr("src", "asteroid.png")
               .attr("opacity",0.5);
  })

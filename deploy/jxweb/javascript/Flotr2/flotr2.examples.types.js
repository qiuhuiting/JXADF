!function(){var a=function(){this.examples={}};a.prototype={add:function(a){this.examples[a.key]=a},get:function(a){return a?this.examples[a]||null:this.examples},getType:function(a){return Flotr._.select(this.examples,function(t){return t.type===a})}},Flotr.ExampleList=new a}(),function(){function a(a){var t,e,o=[[0,3],[4,8],[8,5],[9,13]],i=[];for(t=0;14>t;t+=.5)i.push([t,Math.sin(t)]);e=Flotr.draw(a,[o,i],{xaxis:{minorTickFreq:4},grid:{minorVerticalLines:!0}})}Flotr.ExampleList.add({key:"basic",name:"Basic",callback:a})}(),function(){function a(a){var t,e=[[0,3],[4,8],[8,2],[9,3]],o=[[0,2],[4,3],[8,8],[9,4]];t=Flotr.draw(a,[e,o],{lines:{show:!0,stacked:!0},xaxis:{minorTickFreq:4},grid:{minorVerticalLines:!0}})}Flotr.ExampleList.add({key:"basic-stacked",name:"Basic Stacked",callback:a,type:"test"})}(),function(){function a(a){var t,e,o=[[0,3],[4,8],[8,5],[9,13]],i=[];for(t=0;14>t;t+=.5)i.push([t,Math.sin(t)]);e=Flotr.draw(a,[o,i],{lines:{steps:!0,show:!0},xaxis:{minorTickFreq:4},yaxis:{autoscale:!0},grid:{minorVerticalLines:!0},mouse:{track:!0,relative:!0}})}Flotr.ExampleList.add({key:"basic-stepped",name:"Basic Stepped",callback:a,type:"test"})}(),function(){function a(a){function t(a){return"("+a+")"}for(var e,o=[],i=[],n=[],l=[],r=[],s=[[0,"Lower"],10,20,30,[40,"Upper"]],c=0;10>=c;c+=.1)o.push([c,4+Math.pow(c,1.5)]),i.push([c,Math.pow(c,3)]),n.push([c,5*c+3*Math.sin(4*c)]),l.push([c,c]),c.toFixed(1)%1==0&&r.push([c,2*c]);n[30][1]=null,n[31][1]=null,e=Flotr.draw(a,[{data:o,label:"y = 4 + x^(1.5)",lines:{fill:!0}},{data:i,label:"y = x^3"},{data:n,label:"y = 5x + 3sin(4x)"},{data:l,label:"y = x"},{data:r,label:"y = 2x",lines:{show:!0},points:{show:!0}}],{xaxis:{noTicks:7,tickFormatter:t,min:1,max:7.5},yaxis:{ticks:s,max:40},grid:{verticalLines:!1,backgroundColor:{colors:[[0,"#fff"],[1,"#ccc"]],start:"top",end:"bottom"}},legend:{position:"nw"},title:"Basic Axis example",subtitle:"This is a subtitle"})}Flotr.ExampleList.add({key:"basic-axis",name:"Basic Axis",callback:a})}(),function(){function a(a,t){var e,o,t=t?!0:!1,i=[],n=[];for(o=0;4>o;o++)e=t?[Math.ceil(10*Math.random()),o]:[o,Math.ceil(10*Math.random())],i.push(e),e=t?[Math.ceil(10*Math.random()),o+.5]:[o+.5,Math.ceil(10*Math.random())],n.push(e);Flotr.draw(a,[i,n],{bars:{show:!0,horizontal:t,shadowSize:0,barWidth:.5},mouse:{track:!0,relative:!0},yaxis:{min:0,autoscaleMargin:1}})}Flotr.ExampleList.add({key:"basic-bars",name:"Basic Bars",callback:a}),Flotr.ExampleList.add({key:"basic-bars-horizontal",name:"Horizontal Bars",args:[!0],callback:a,tolerance:5})}(),function(){function a(a,t){var e,o,i=[],n=[],l=[];for(o=-10;10>o;o++)t?(i.push([Math.random(),o]),n.push([Math.random(),o]),l.push([Math.random(),o])):(i.push([o,Math.random()]),n.push([o,Math.random()]),l.push([o,Math.random()]));e=Flotr.draw(a,[{data:i,label:"Serie 1"},{data:n,label:"Serie 2"},{data:l,label:"Serie 3"}],{legend:{backgroundColor:"#D2E8FF"},bars:{show:!0,stacked:!0,horizontal:t,barWidth:.6,lineWidth:1,shadowSize:0},grid:{verticalLines:t,horizontalLines:!t}})}Flotr.ExampleList.add({key:"basic-bar-stacked",name:"Stacked Bars",callback:a}),Flotr.ExampleList.add({key:"basic-stacked-horizontal",name:"Stacked Horizontal Bars",args:[!0],callback:a,tolerance:5})}(),function(){function a(a){var t,e=[[0,4]],o=[[0,3]],i=[[0,1.03]],n=[[0,3.5]];t=Flotr.draw(a,[{data:e,label:"Comedy"},{data:o,label:"Action"},{data:i,label:"Romance",pie:{explode:50}},{data:n,label:"Drama"}],{HtmlText:!1,grid:{verticalLines:!1,horizontalLines:!1},xaxis:{showLabels:!1},yaxis:{showLabels:!1},pie:{show:!0,explode:6},mouse:{track:!0},legend:{position:"se",backgroundColor:"#D2E8FF"}})}Flotr.ExampleList.add({key:"basic-pie",name:"Basic Pie",callback:a})}(),function(){function a(a){var t,e,o={label:"Actual",data:[[0,3],[1,8],[2,5],[3,5],[4,3],[5,9]]},i={label:"Target",data:[[0,8],[1,7],[2,8],[3,2],[4,4],[5,7]]};e=[[0,"Statutory"],[1,"External"],[2,"Videos"],[3,"Yippy"],[4,"Management"],[5,"oops"]],t=Flotr.draw(a,[o,i],{radar:{show:!0},grid:{circular:!0,minorHorizontalLines:!0},yaxis:{min:0,max:10,minorTickFreq:2},xaxis:{ticks:e},mouse:{track:!0}})}Flotr.ExampleList.add({key:"basic-radar",name:"Basic Radar",callback:a})}(),function(){function a(a){var t,e,o,i=[],n=[];for(o=0;10>o;o++)t=[o,Math.ceil(10*Math.random()),Math.ceil(10*Math.random())],i.push(t),t=[o,Math.ceil(10*Math.random()),Math.ceil(10*Math.random())],n.push(t);e=Flotr.draw(a,[i,n],{bubbles:{show:!0,baseRadius:5},xaxis:{min:-4,max:14},yaxis:{min:-4,max:14}})}Flotr.ExampleList.add({key:"basic-bubble",name:"Basic Bubble",callback:a})}(),function(){function a(a){var t,e,o,i,n,l=[],r=3.206;for(e=0;50>e;e++)o=Math.random(),i=Math.random(),n=Math.random()*(o+i)-i,l.push([e,r,r+o,r-i,r+n]),r+=n;t=Flotr.draw(a,[l],{candles:{show:!0,candleWidth:.6},xaxis:{noTicks:10}})}Flotr.ExampleList.add({key:"basic-candle",name:"Basic Candle",callback:a})}(),function(){function a(a){var t,e,o,i,n,l=[],r=3.206;for(e=0;50>e;e++)o=Math.random(),i=Math.random(),n=Math.random()*(o+i)-i,l.push([e,r,r+o,r-i,r+n]),r+=n;t=Flotr.draw(a,[l],{candles:{show:!0,candleWidth:.6,barcharts:!0,upFillColor:"#00A048",downFillColor:"#CB2020"},xaxis:{noTicks:10}})}Flotr.ExampleList.add({key:"basic-candle-barchart",name:"Basic Candle Barchart",callback:a})}(),function(){function a(a){function t(a){return"y = "+a}var e,o,i,n=[],l=[],r=[];for(i=0;15>i;i+=.5)n.push([i,i+Math.sin(i+Math.PI)]),l.push([i,i]),r.push([i,15-Math.cos(i)]);e=[{data:n,label:"x + sin(x+&pi;)"},{data:l,label:"x"},{data:r,label:"15 - cos(x)"}],o=Flotr.draw(a,e,{legend:{position:"se",labelFormatter:t,backgroundColor:"#D2E8FF"},HtmlText:!1})}Flotr.ExampleList.add({key:"basic-legend",name:"Basic Legend",callback:a})}(),function(){function a(a){var t,e,o=[],i=[],n=[];for(e=0;20>e;e+=.5)o.push([e,2*e]),i.push([e,1.5*e+1.5*Math.sin(e)]),n.push([e,3*Math.cos(e)+10]);t=Flotr.draw(a,[{data:o,mouse:{track:!1}},i,n],{mouse:{track:!0,lineColor:"purple",relative:!0,position:"ne",sensibility:1,trackDecimals:2,trackFormatter:function(a){return"x = "+a.x+", y = "+a.y}},crosshair:{mode:"xy"}})}Flotr.ExampleList.add({key:"mouse-tracking",name:"Mouse Tracking",callback:a})}(),function(){function a(a){function t(t){var o=Flotr._.extend(Flotr._.clone(e),t||{});return Flotr.draw(a,[n,l,r],o)}var e,o,i,n=[],l=[],r=[];for(i=0;40>i;i+=.5)n.push([i,Math.sin(i)+3*Math.cos(i)]),l.push([i,Math.pow(1.1,i)]),r.push([i,40-i+10*Math.random()]);e={selection:{mode:"x",fps:30},title:"Mouse Zoom"},o=t(),Flotr.EventAdapter.observe(a,"flotr:select",function(a){o=t({xaxis:{min:a.x1,max:a.x2},yaxis:{min:a.y1,max:a.y2}})}),Flotr.EventAdapter.observe(a,"flotr:click",function(){t()})}Flotr.ExampleList.add({key:"mouse-zoom",name:"Mouse Zoom",callback:a,description:"<p>Select an area of the graph to zoom.  Click to reset the chart.</p>"})}(),function(){function a(a){function t(t){var e=Flotr._.extend(Flotr._.clone(n),t||{});return Flotr.draw(a,[c,d,m],e)}function e(t){r=l.getEventPosition(t),Flotr.EventAdapter.observe(a,"flotr:mousemove",o),Flotr.EventAdapter.observe(a,"flotr:mouseup",i)}function o(a,e){var o=l.axes.x,i=r.x-e.x;l=t({xaxis:{min:o.min+i,max:o.max+i}})}function i(){Flotr.EventAdapter.stopObserving(a,"flotr:mousemove",o)}var n,l,r,s,c=[],d=[],m=[];for(s=-40;40>s;s+=.5)c.push([s,Math.sin(s)+3*Math.cos(s)]),d.push([s,Math.pow(1.1,s)]),m.push([s,40-s+10*Math.random()]);n={xaxis:{min:0,max:20},title:"Mouse Drag"},l=t(),Flotr.EventAdapter.observe(a,"flotr:mousedown",e)}Flotr.ExampleList.add({key:"mouse-drag",name:"Mouse Drag",callback:a})}(),function(){function a(a){function t(t){return l=Flotr._.extend(Flotr._.clone(e),t||{}),Flotr.draw(a,[r],l)}var e,o,i,n,l,r=[],s=new Date("2009/01/01 01:00").getTime();for(i=0;100>i;i++)n=s+1e3*i*3600*24*36.5,r.push([n,i+30*Math.random()+20*Math.sin(i/20+2*Math.random())+10*Math.sin(i/10+Math.random())]);e={xaxis:{mode:"time",labelsAngle:45},selection:{mode:"x"},HtmlText:!1,title:"Time"},o=t(),Flotr.EventAdapter.observe(a,"flotr:select",function(a){o=t({xaxis:{min:a.x1,max:a.x2,mode:"time",labelsAngle:45},yaxis:{min:a.y1,max:a.y2}})}),Flotr.EventAdapter.observe(a,"flotr:click",function(){o=t()})}Flotr.ExampleList.add({key:"basic-time",name:"Basic Time",callback:a,description:"<p>Select an area of the graph to zoom.  Click to reset the chart.</p>"})}(),function(){function a(a){var t,e,o,i,n,l,r,s=[],c=[],d=[],m=0,u=0,h=0,p=0;for(n=0;20>n;n++)l=n,r=l+8*Math.random()-15,s.push([l,0]),c.push([l,r]),m+=l,u+=r,h+=l*r,p+=Math.pow(l,2);for(t=m/n,e=u/n,i=(n*h-m*u)/(n*p-Math.pow(m,2)),o=e-i*t,n=0;20>n;n++)d.push([n,o+i*n]);graph=Flotr.draw(a,[{data:s,shadowSize:0,color:"#545454"},{data:c,label:"y = x + (Math.random() * 8) - 15",points:{show:!0}},{data:d,label:"y = "+o.toFixed(2)+" + "+i.toFixed(2)+"*x"}],{legend:{position:"se",backgroundColor:"#D2E8FF"},title:"Negative Values"})}Flotr.ExampleList.add({key:"negative-values",name:"Negative Values",callback:a})}(),function(){function a(a){var t,e,o=[[0,0]];t={xaxis:{min:0,max:15},yaxis:{min:0,max:15},lines:{show:!0},points:{show:!0},mouse:{track:!0},title:"Click Example"},e=Flotr.draw(a,[o],t),Flotr.EventAdapter.observe(a,"flotr:click",function(i){o.push([i.x,i.y]),o=o.sort(function(a,t){return a[0]-t[0]}),e=Flotr.draw(a,[o],t)})}Flotr.ExampleList.add({key:"click-example",name:"Click Example",callback:a})}(),function(){function a(a){var t,e,o=[],i=[],n=[],l=[],r=[];for(e=0;10>=e;e+=.1)o.push([e,4+Math.pow(e,1.5)]),i.push([e,Math.pow(e,3)]),n.push([e,5*e+3*Math.sin(4*e)]),l.push([e,e]),e.toFixed(1)%1==0&&r.push([e,2*e]);return t=Flotr.draw(a,[{data:o,label:"y = 4 + x^(1.5)",lines:{fill:!0}},{data:i,label:"y = x^3",yaxis:2},{data:n,label:"y = 5x + 3sin(4x)"},{data:l,label:"y = x"},{data:r,label:"y = 2x",lines:{show:!0},points:{show:!0}}],{title:"Download Image Example",subtitle:"You can save me as an image",xaxis:{noTicks:7,tickFormatter:function(a){return"("+a+")"},min:1,max:7.5,labelsAngle:45,title:"x Axis"},yaxis:{ticks:[[0,"Lower"],10,20,30,[40,"Upper"]],max:40,title:"y = f(x)"},y2axis:{color:"#FF0000",max:500,title:"y = x^3"},grid:{verticalLines:!1,backgroundColor:"white"},HtmlText:!1,legend:{position:"nw"}}),this.CurrentExample=function(a){var e=$("#image-download input:radio[name=format]:checked").val();Flotr.isIE&&Flotr.isIE<9&&alert("Your browser doesn't allow you to get a bitmap image from the plot, you can only get a VML image that you can use in Microsoft Office.<br />"),"to-image"==a?t.download.saveImage(e,null,null,!0):"download"==a?t.download.saveImage(e):"reset"==a&&t.download.restoreCanvas()},t}Flotr.ExampleList.add({key:"download-image",name:"Download Image",callback:a,description:'<form name="image-download" id="image-download" action="" onsubmit="return false"><label><input type="radio" name="format" value="png" checked="checked" /> PNG</label><label><input type="radio" name="format" value="jpeg" /> JPEG</label><button name="to-image" onclick="CurrentExample(\'to-image\')">To Image</button><button name="download" onclick="CurrentExample(\'download\')">Download</button><button name="reset" onclick="CurrentExample(\'reset\')">Reset</button></form>'})}(),function(){function a(a){var t,e,o,i=[],n=[],l=[],r=[],s=[];for(e=0;100>=e;e+=1)o=e/10,i.push([o,4+Math.pow(o,1.5)]),n.push([o,Math.pow(o,3)]),l.push([o,5*e+3*Math.sin(4*o)]),r.push([o,o]),o%1===0&&s.push([o,2*o]);t=Flotr.draw(a,[{data:i,label:"y = 4 + x^(1.5)",lines:{fill:!0}},{data:n,label:"y = x^3"},{data:l,label:"y = 5x + 3sin(4x)"},{data:r,label:"y = x"},{data:s,label:"y = 2x",lines:{show:!0},points:{show:!0}}],{xaxis:{noTicks:7,tickFormatter:function(a){return"("+a+")"},min:1,max:7.5},yaxis:{ticks:[[0,"Lower"],10,20,30,[40,"Upper"]],max:40},grid:{verticalLines:!1,backgroundColor:"white"},legend:{position:"nw"},spreadsheet:{show:!0,tickFormatter:function(a){return a+""}}})}Flotr.ExampleList.add({key:"download-data",name:"Download Data",callback:a})}(),function(){function a(a){var t,e,o=[],i=[],n=[],l=[],r=[];for(e=0;10>=e;e+=.1)o.push([e,4+Math.pow(e,1.5)]),i.push([e,Math.pow(e,3)]),n.push([e,5*e+3*Math.sin(4*e)]),l.push([e,e]),e.toFixed(1)%1==0&&r.push([e,2*e]);t=Flotr.draw(a,[{data:o,label:"y = 4 + x^(1.5)",lines:{fill:!0}},{data:i,label:"y = x^3",yaxis:2},{data:n,label:"y = 5x + 3sin(4x)"},{data:l,label:"y = x"},{data:r,label:"y = 2x",lines:{show:!0},points:{show:!0}}],{title:"Advanced Titles Example",subtitle:"You can save me as an image",xaxis:{noTicks:7,tickFormatter:function(a){return"("+a+")"},min:1,max:7.5,labelsAngle:45,title:"x Axis"},yaxis:{ticks:[[0,"Lower"],10,20,30,[40,"Upper"]],max:40,title:"y = f(x)"},y2axis:{color:"#FF0000",max:500,title:"y = x^3"},grid:{verticalLines:!1,backgroundColor:"white"},HtmlText:!1,legend:{position:"nw"}})}Flotr.ExampleList.add({key:"advanced-titles",name:"Advanced Titles",callback:a})}(),function(){function a(a){var t,e,o,i={data:[],bars:{show:!0,barWidth:.8,lineWidth:0,fillColor:{colors:["#CB4B4B","#fff"],start:"top",end:"bottom"},fillOpacity:.8}},n={data:[],markers:{show:!0,position:"ct"}},l={data:[],lines:{show:!0,fillColor:["#00A8F0","#fff"],fill:!0,fillOpacity:1}};for(o=0;8>o;o++)t=[o,Math.ceil(10*Math.random())],i.data.push(t),n.data.push(t);for(o=-1;9>o;o+=.01)l.data.push([o,o*o/8+2]);e=Flotr.draw(a,[l,i,n],{yaxis:{min:0,max:11},xaxis:{min:-.5,max:7.5},grid:{verticalLines:!1,backgroundColor:["#fff","#ccc"]}})}Flotr.ExampleList.add({key:"color-gradients",name:"Color Gradients",callback:a})}(),function(){function a(a,t){var e,o,t=t?!0:!1,i=[],n=[];for(o=0;5e3>o;o++)e=t?[Math.ceil(10*Math.random()),o]:[o,Math.ceil(10*Math.random())],i.push(e),e=t?[Math.ceil(10*Math.random()),o+.5]:[o+.5,Math.ceil(10*Math.random())],n.push(e);Flotr.draw(a,[i,n],{bars:{show:!0,horizontal:t,barWidth:.5},mouse:{track:!0,relative:!0},yaxis:{min:0,autoscaleMargin:1}})}Flotr.ExampleList.add({key:"profile-bars",name:"Profile Bars",type:"profile",callback:a})}(),function(){function a(a){var t,e,o=[[1,4,5]],i=[[3.2,3,4]],n=[[1.9,2,2],[5,2,3.3]],l=[[1.55,1,9]],r=[[5,0,2.3]],s=[],c={show:!0,barWidth:.5},d=[],m=["Obama","Bush","Clinton","Palin","McCain"];Flotr._.each([o,i,n,l,r],function(a){s.push({data:a,timeline:Flotr._.clone(c)})}),Flotr._.each([o,i,n,l,r],function(a){e=a[0],d.push([e[0],e[1]])}),s.push({data:d,markers:{show:!0,position:"rm",fontSize:11,labelFormatter:function(a){return m[a.index]}}}),t=Flotr.draw(a,s,{xaxis:{noTicks:3,tickFormatter:function(a){var a=parseInt(a),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return t[(a-1)%12]}},yaxis:{showLabels:!1},grid:{horizontalLines:!1}})}Flotr.ExampleList.add({key:"basic-timeline",name:"Basic Timeline",callback:a})}(),function(){function a(a){var t,e,o,i=new Image,n=new Image,l={data:[],bars:{show:!0,barWidth:.6,lineWidth:0,fillOpacity:.8}},r={data:[],markers:{show:!0,position:"ct",labelFormatter:function(a){return a.y>=5?n:i}}},s=Flotr;for(o=0;8>o;o++)t=[o,Math.ceil(10*Math.random())],l.data.push(t),r.data.push(t);var c=function(){return i.complete&&n.complete?void(e=s.draw(a,[l,r],{yaxis:{min:0,max:11},xaxis:{min:-.5,max:7.5},grid:{verticalLines:!1}})):void setTimeout(c,50)};i.onload=c,i.src="images/xmark.png",n.src="images/checkmark.png"}Flotr.ExampleList.add({key:"advanced-markers",name:"Advanced Markers",callback:a,timeout:150})}();
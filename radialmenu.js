$(window).load(function(){
	var mouseX = 0;
	var mouseY = 0;
	var radialMidX = 0;
	var radialMidY = 0;
	var currentRadialSelected = null;
	var canMove = true;

	$(document).bind('mousemove', awesome);


	$('#click').click(function(){
	    canMove = !canMove;
	});

	$(document).mouseup(function(e){
	   mouseX = e.pageX;
	   mouseY = e.pageY;
	   if(!canMove){
	        var isRightMB;
	        e = e || window.event;
	        if ("which" in e)
	            isRightMB = e.which == 3; 
	        else if ("button" in e)
	            isRightMB = e.button == 2; 
	        
	        if(isRightMB){
	            var deltax = mouseX - radialMidX;
	            var deltay = -mouseY + radialMidY;
	            var d = Math.sqrt(Math.pow(deltax,2)+Math.pow(deltay,2));
	             $('.sector').css('border-bottom-color','royalblue');
	            if(d>13){ // is 5 pixels a good amount to signify a drag evt
	                $('.vertex').removeClass('selvertex');
	                if(deltay>=0){
	                    if(deltax>=0) // Q1
	                        var r =(3*Math.PI/2)-Math.atan(deltay/deltax);
	                    else  // Q2
	                        var r =(Math.PI/2)+Math.atan(deltay/(-deltax));
	                }
	                else {
	                    if(deltax>=0)// Q4
	                        var r =(3*Math.PI/2)+Math.atan((-deltay)/(deltax));
	                    else // Q3
	                        var r =(Math.PI/2)-Math.atan((-deltay)/(-deltax));
	                }
	                var sang = (2*Math.PI)/n;
	                var matchwhichsector = Math.floor((r+(sang/2))/sang);
	                if(matchwhichsector == n) // because im dumb
	                    matchwhichsector = 0;
	                $('#sector'+matchwhichsector).css('border-bottom-color','darkblue');
	                window.location = $('#sectorlabel'+matchwhichsector).find('a').get(0).href;
	            }
	            else {
	                $('.vertex').addClass('selvertex');
	            }
	        }
	       canMove = true;
	       $('.radialmenu').removeClass('paused');
	    }
	});

	$(document).bind("contextmenu",function(e){
	    if(!e.altKey){ // ALT Right Click => Standard Context Menu
	        if(canMove){
	            canMove=false;
	            $('.radialmenu').addClass('paused');
	        }
	        else{
	            canMove=true;
	            $('.radialmenu').removeClass('paused');
	        }
	    return false;
	    }
	});

	function awesome(e){
	   mouseX = e.pageX;
	   mouseY = e.pageY;
	    if(canMove){
	       $('div.radialmenu').css('top',e.pageY).css('left',e.pageX-w-2);
	        radialMidX = e.pageX;
	        radialMidY = e.pageY;
	    }  

	   if(!canMove){
	        var isRightMB;
	        e = e || window.event;
	        if ("which" in e)
	            isRightMB = e.which == 3; 
	        else if ("button" in e)
	            isRightMB = e.button == 2; 
	        
	        if(isRightMB){
	            var deltax = mouseX - radialMidX;
	            var deltay = -mouseY + radialMidY;
	            var d = Math.sqrt(Math.pow(deltax,2)+Math.pow(deltay,2));
	            $('.sector').css('border-bottom-color','royalblue');
	            if(d>13){ // is 5 pixels a good amount to signify a drag evt
	                $('.vertex').removeClass('selvertex');
	                if(deltay>=0){
	                    if(deltax>=0) // Q1
	                        var r =(3*Math.PI/2)-Math.atan(deltay/deltax);
	                    else  // Q2
	                        var r =(Math.PI/2)+Math.atan(deltay/(-deltax));
	                }
	                else {
	                    if(deltax>=0)// Q4
	                        var r =(3*Math.PI/2)+Math.atan((-deltay)/(deltax));
	                    else // Q3
	                        var r =(Math.PI/2)-Math.atan((-deltay)/(-deltax));
	                }
	                var sang = (2*Math.PI)/n;
	                var matchwhichsector = Math.floor((r+(sang/2))/sang);
	                if(matchwhichsector == n) // because im dumb
	                    matchwhichsector = 0;
	                $('#sector'+matchwhichsector).css('border-bottom-color','darkblue');
	            }
	            else {
	                $('.vertex').addClass('selvertex');
	            }
	        }
	    }
	}

	String.prototype.repeat = function( num )
	{
	    return new Array( num + 1 ).join( this );
	}

	$('body').append('<div class="radialmenu">\
	      <div class="sectors"></div>\
	      <div class="sectorlabels"></div>\
	      <div class="vertex">x</div>\
	      <div class="trajectory"></div>\
	  </div>');
	var n = $('.radial ul').children().length;
	var radian = 2*Math.PI;
	var ia = radian/n;
	var oas = (Math.PI - (radian/n))/2;
	var c = 100; // constant hypothenuse length
	var h = c*Math.sin(oas);
	var w = Math.sqrt(Math.pow(c,2)-Math.pow(h,2));
	$.each($('.radial ul').children(),function(index,child){
	    $('.sectors').append('<div class="sector" id="sector'+index+'"></div>');
	    $('.sectorlabels').append('<div class="sectorlabel" id="sectorlabel'+index+'"><div>'+child.innerHTML+'</div></div>');
	});

	$('.sectorlabel').css('width',2*w+'px');
	$('.sectorlabel').css('padding-top',h+'px');
	$('.sector').css('border-width','0 '+w+"px "+h+"px "+w+"px");
	$('.vertex').css('left',w-5+'px');

	$.each($('.sectors').children(),function(index,child){
	    var rot = index*(360/n);
	    $(child).css("-webkit-transform-origin", "50% 0%" );
	    $(child).css("-ms-transform-origin", "50% 0%" );
	    $(child).css("transform-origin", "50% 0%" );
	    $(child).css('-webkit-transform','rotate('+rot+'deg)');
	   	$(child).css('-ms-transform','rotate('+rot+'deg)');
	    $(child).css('transform','rotate('+rot+'deg)');
	    if(n%2 ==0){
	        if(index%2==0){
	            //$(child).css('border-bottom-color','royalblue');
	        }
	    }
	    else {
	    
	    }
	});

	$.each($('.sectorlabels').children(),function(index,child){
	    var rot = index*(360/n);
	    $(child).css("-webkit-transform-origin", "50% 0%" );
	    $(child).css("-ms-transform-origin", "50% 0%" );
	    $(child).css("transform-origin", "50% 0%" );
	    $(child).css('-webkit-transform','rotate('+rot+'deg)');
	   	$(child).css('-ms-transform','rotate('+rot+'deg)');
	    $(child).css('transform','rotate('+rot+'deg)');
	    if(90<rot && rot<270){
	        //$(child).childNodes()[0].css("-webkit-transform-origin", "50% 0%" );
	        //$(child).css('top',h+'px)');
		    $($(child).children()[0]).css('-webkit-transform','rotate(180deg)');
		    $($(child).children()[0]).css('-ms-transform','rotate(180deg)');
	        $($(child).children()[0]).css('transform','rotate(180deg)');
	        //$(child).css('margin-top',-h-20+'px');
	    }
	});
});
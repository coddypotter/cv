//https://dcc.secureserver.net/manage/
$( function() {
	var p = '<p class="type-text" title="wget http://www/~1^600.sudeepst.com/ 0~1^200 -P sudeep/ **~2^200 && open sudeep/portfolio.php --design = Material^200000"></p>';
	$('.Bootloading > div').hide();
	$('.Bootloadingsub > div').hide();
	var i = 1;
	var interval = Math.random(2000) * 2000;	
	var Boot = setInterval(function(){
		interval = Math.random() * 100;
		console.log(Math.round(interval));
		if(i == 11){
			clearInterval(Boot);
			$('.Bootloading > div').hide(600);
			$('.Bootloadingsub').prepend(p);
			$( '.type-text' ).each( function() {
				var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
				var thing = $( this ).empty().attr( 'title', '' ).teletype( {
					text: items.split( ';' ),
					typeDelay: 10,
					backDelay: 0,
					cursor: '_',
					delay: 3000,
					preserve: false,
					prefix: '[Sudeep Tavarkhed ~]# ',
					loop: 0,
					humanise : true,
					smoothBlink: true,
					callbackType: function( letter, current, teletype ) {
						console.log(current.index, current.position);
						if ( current.index == 0 && current.position == 91 ) {
							var subi = 1;
							teletype.setCursor( '' );
							var	subinterval = Math.round(Math.random(2000) * 1000);
							var s = setInterval(function(){
								subinterval = Math.random(2000) * 2000;
								console.log(Math.round(interval));
								if(subi == 9){
									clearInterval(s);
									setInterval(function(){
										window.location = "portfolio.php";
									},6000);
								}
								$('.Bootloadingsub .'+subi).fadeIn(800);
								$('.'+i).show();
								subi++;

							},subinterval);
						}
						if ( current.index == 0 && current.position == 37 ) {
							teletype.setCursor( '_' );
						}
					},
					callbackFinished: function( teletype ) {

					    
					}
				} );
			} );
		}
		$('.Bootloading .'+i).show();
		i++;
	}, interval);	
} );
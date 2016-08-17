	$( function() {
		$( '.type-text' ).each( function() {
			var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
			var thing = $( this ).empty().attr( 'title', '' ).teletype( {
				text: items.split( ';' ),
				typeDelay: 0,
				backDelay: 0,
				cursor: '|',
				delay: 3000,
				preserve: false,
				prefix: ' ',
				loop: 0,
				humanise : true,
				smoothBlink: true,
				callbackType: function( letter, current, teletype ) {
					if ( current.index == 0 && current.position == 270 ) {
						$('.takehome').show(1500);
					}
					if ( current.index == 0 && current.position == 37 ) {
						//teletype.setCursor( '_' );
					}
				},
				callbackFinished: function( teletype ) {

				    
				}
			} );
		} );
	});
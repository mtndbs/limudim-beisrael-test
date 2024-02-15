MP.comments_popup = function(){
	
	var $html_hold = $('#comments_popup');

	$html_hold.length && $('.btn-comments-popup').each( function(){
		
		var $it = $(this);

		$it.on('click', function(){
			$.ajax({
				url: './admin/comments-popup.html',
				dataType: 'html',
				success: function(data){
					
					$html_hold[0].innerHTML = '';

					$html_hold.append(data);

					new Popup('comments_popup');

					new Main().decorations();

					requestAnimationFrame( function(){
						
						$('#popup-id-comments_popup .popup-comment-body').mCustomScrollbar({
							mouseWheel: { enable: true }
						});

					});

					navigate_forum_questions();

				}
			});
		});

	});

	function navigate_forum_questions(){

		var qs = $( '.popup-comments-link' );

		qs.each( function(){

			var $q = $(this);

			$q.html('<span class="l-fg1-w0 t-bullet">' + $q.text() + '</span><i class="svgIcon icon-drop-b">' + new SvgIcons().render( 'drop-b' ) + '</i>')

			$q.after('<div class="mobile-appender t-box" style="display:none"><div class="l-center mobile-appender-loader"><i class="svgIcon icon-spinner">' + new SvgIcons().render( 'spinner' ) + '</i></div></div>');

			$q.on( 'click', function(e){
				
				e.preventDefault();

				$(this).toggleClass('is-active');

				var id = this.getAttribute('data-get'),
					title = this.textContent,
					$mobile_appender = $q.next();

				$.ajax({
					
					url: './admin/fake-forum-db.php?id=' + id,
					dataType: 'html',
					success: function(data){
						
						var $article_hold = ( lib.viewport().width > mobile ) ?
												$('#popup-id-comments_popup .ajax-comment-load') : 
												$mobile_appender,
							$title_hold = $('#popup-id-comments_popup .forum_question_title ');
						
						$article_hold[0].innerHTML = '';

						$article_hold.append(data);

						$title_hold.text( title );

						new Main().forum_comment_tip_mobile();

					}
				});

				var effect;

				if ( lib.viewport().width <= mobile ){

					effect = ( $mobile_appender.css( 'display' ) === 'none' ) ? 'Down' : 'Up';

					$mobile_appender['slide' + effect]();
				}


			});

		});

	}
	
};

<?php

	$src = 'assets/images/tip.jpg';
	if ( $i !== 1 ){
		$src = 'assets/images/tip.jpg';
	}
?>

<div class="tips-item">

	<div class="h100 l-column tips-item-in">

		<a href="<?= $src; ?>" data-alt="משהו" class="lazy_load"></a>

		<div class="l-fg1 svg-tip-down l-column tips-item-text">
			
			<div class="l-auto l-frame tips-item-imge">
				<noscript><img src="<?= $src; ?>" alt="משהו"/></noscript>
			</div>
			
			<?php 
			if (is('mosad')){
				include ( 'templates/c-star-count.php' ) ;
				echo '<div class="t-row-small"></div>';
			}
			?>
			
			<blockquote class="l-layer-up l-fg1 fs-small fw-light tips-item-qt">
				

				<?php if ( empty ( $less ) ) : ?>

					פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum
					היה טקסט סטנדרטי עוד במאה ה-16,
					כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו
					כדי ליצור סוג של ספר דגימה
					ספר זה שרד לא רק חמש
					<?php if ( $i !== 1) : ?>
					מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרוניתפשוט
					טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum
					היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא
					ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר
					דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך
					<?php endif; ?>

				<?php else : ?>
				
					פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאש הדפסה לא ידועה לקחה מגש
				
				<?php endif; ?>
				
			</blockquote>
			
			<div class="l-tac l-layer-up">
				<a href="#" class="fs-small read-more">לסיפור המלא</a>
			</div>

		</div>

		<div class="l-tac tips-item-meta">
			<div class="tips-item-meta-name">
				לירון כהן
			</div>
			<div class="fs-smallest tips-item-meta-title">
				סטודנטית למנהל עסקים
			</div>
		</div>

	</div>

</div>

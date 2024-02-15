<?php
	$src = 'assets/images/tip.jpg';
	if ( isset($i) && $i === 1 ){
		$src = 'assets/images/tip.jpg';
	}

?>
<section class="tips-item opinion-item">

	<div class="h100 l-column tips-item-in">

		<div class="w100 t-row-small l-flex f-t opinion-tab-item-top">

			<div class="t-bullet l-frame opinion-tab-image">
        <?php
        list($width, $height, $type, $attr) = getimagesize($src);
        echo "<img src=" . $src . " $attr alt=\"Description\" loading=\"lazy\">";
        ?>
			</div>

			<div class="l-fg1">

				<strong class="t-line-height fw-regular l-block">
					לירון כהן
				</strong>

				<p class="norm-p fs-small">
					תואר שני בניהול מערכות חינוך
					<br/>
					05/07/2017
				</p>

			</div>

			
		</div>

		<div class="l-fg1 t-box-w svg-tip">

			<div class="l-center t-row-half" data-stars="5"></div>
			
			<div class="opinion-tab-text">

				<?php if (isset($sampleContent)): ?>
					<h3>
						<?php echo substr(strip_tags($sampleContent), 0, 70); ?>
					</h3>
					<?php echo $sampleContent; ?>
				<?php else: ?>
					<h3>
						מה אתה אוהב/לא אוהב במוסד הלימודים?
					</h3>
					<p>
						פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית
					</p>
				<?php endif; ?>

				<?php if ( isset($i) && $i !== 3 ) : ?>
				<h3>
					על הקמפוס
				</h3>
				<p>
					פשוט טקסט גולמי של תעשיית ההדפסה וההקלדה. Lorem Ipsum היה טקסט סטנדרטי עוד במאה ה-16, כאשר הדפסה לא ידועה לקחה מגש של דפוס ועירבלה אותו כדי ליצור סוג של ספר דגימה. ספר זה שרד לא רק חמש מאות שנים אלא גם את הקפיצה לתוך ההדפסה האלקטרונית						
				</p>
				<?php endif; ?>
				
			</div>

		</div>

		<div class="l-center opinion-tab-puller">
			<a href="#" class="fs-small read-more norm-a l-ibm">
				קרא עוד
			</a>
		</div>

	</div>

</section>

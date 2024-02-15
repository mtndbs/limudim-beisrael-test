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

			<div class="opinion-tab-text">

				<?php if (isset($sampleContent)): ?>
					<h3>
						<?php echo substr(strip_tags($sampleContent), 0, 70); ?>
					</h3>
					<?php echo $sampleContent; ?>
				<?php else: ?>
					<p>
						תחום לימודי הדיפלומטיה הוא תחום אינטר-דסיפלינרי, כלומר שהוא מורכב מדיסיפלינות רבות, כמו תקשורת, פסיכולוגיה פוליטית, יחסים בינלאומיים, מדע המדינה ועוד. כן קיימת אפשרות לבחור את מה שקרוב ללב הסטודנט ולהתעמק בכך. יחד עם זאת, רצוי להבין שזהו לא תואר יישומי שמקנה כלים לאדםתחום לימודי הדיפלומטיה הוא תחום אינטר-דסיפלינרי, כלומר שהוא
					</p>
					<p>
						תחום לימודי הדיפלומטיה הוא תחום אינטר-דסיפלינרי, כלומר שהוא מורכב מדיסיפלינות רבות, כמו תקשורת, פסיכולוגיה פוליטית, יחסים בינלאומיים, מדע המדינה ועוד. כן קיימת אפשרות לבחור את מה שקרוב ללב הסטודנט ולהתעמק בכך. יחד עם זאת, רצוי להבין שזהו לא תואר יישומי שמקנה כלים לאדםתחום לימודי הדיפלומטיה הוא תחום אינטר-דסיפלינרי, כלומר שהוא מורכב מדיסיפלינות רבות, כמו תקשורת, פסיכולוגיה פוליטית, יחסים בינלאומיים, מדע המדינה ועוד. כן קיימת אפשרות לבחור את מה שקרוב ללב הסטודנט ולהתעמק בכך יחד עם זאת.
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

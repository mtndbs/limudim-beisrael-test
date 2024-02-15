<li class="box l-column t-row2-half w-inst-item">

	<div class="t-bg-white t-shadow-small c-c2 l-flex t-box-pad f-c w-inst-item-top">
		
    <figure class="l-center t-bullet w-inst-item-image">
      <?php
      list($width, $height, $type, $attr) = getimagesize("assets/images/schools-sidebar/" . $i . ".jpg");
      echo "<img src=\"assets/images/schools-sidebar/" . $i . ".jpg\" $attr alt=\"Description\" loading=\"lazy\">";
      ?>
		</figure>

		<div class="fw-medium l-fg1 fs-small">
			<p class="norm-p">
				אוניברסיטת חיפה - תואר שני מנהל עסקים
			</p>

			<button class="w-inst-toggleForm" data-icon="v">
				שירות אישי חינם
			</button>

		</div>

	</div>

	<div class="t-bg-c2 t-box-pad w-inst-form-hold side-form-hold" style="display:none" aria-hidden="true">

		<h3 class="fs-small">
			השאר/י פרטים ונציגי אוניברסיטת אריאל
			יחזרו אליך 
		</h3>

		<div class="t-row-small"></div>

		<?php include ( 'templates/c-side-form.php' ) ; ?>

	</div>

</li>

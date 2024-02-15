<?php
	$btn_type = is('course') ? 'btn-comments-popup': 'btn-toggle-forumContent'; 
?>

<section class="t-shadow-small t-bg-white t-bor t-row-small forum-item">

	<header class="l-flex t-hover t-box-pad forum-item-top <?= $btn_type; ?>" aria-label="הצג תוכן ותשובות" data-messageid="fake-data" role="button">
		
		<div class="l-flex f-c forum-cell forum-cell--wide ">

			<button class="t-bullet-wide l-center forum-item-icon">
				<?= mb_substr ( $item['user_name'], 0 , 1); ?>

			</button>

			<div class="forum-user">
				<?= $item['user_name']; ?>
			</div>

		</div>

		<div class="t-sep is-hidden--mobile"></div>

		<div class="forum-cell forum-cell--wide l-fg1-w0 forum-subject">
			<strong>
				<?= $item['subject']; ?>
			</strong>

		</div>

		<?php if ( $item['comments_count'] ) : ?>
		
		<div class="t-space is-hidden--mobile"></div>
		
		<div class="forum-cell forum-cell--thin l-nowrap">
			<span class="svg-tip-down t-bor fs-small forum-commentsCount">
				<?= $item['comments_count']; ?>
				תגובות
			</span>
		</div>
		
		<?php endif; ?>

		<div class="t-sep is-hidden--mobile"></div>

		<div class="forum-cell forum-cell--thin l-nowrap forum-date">
			
			<time class="fs-small">
				<?= $item['date']; ?>

			</time>

		</div>

		<div class="t-space mobile-forum-item-top-sep"></div>

	</header>

	<?php if ( ! is('course' ) ) : ?>

	<div class="fourm-body" style="display:none;" aria-hidden="true">

		<div class="t-box-pad forum-panel">
			
			<div class="t-row-half forum-desc">

				<?= $item['desc']; ?>

			</div>

			<ul class="norm-ul forum-comments-list t-row">

				<?php foreach( $item['comments'] as $comment ) :
				
					include ( 'templates/loop-comment-sub.php' );
				
				endforeach; ?>

			</ul>

			<div class="l-flex f-jl fw-medium forum-item-controls">
				
				<button class="t-btn t-bullet btn-forum btn-forum-addComment" data-icon="plus">
					הוסף תגובה
				</button>

				<button class="t-btn t-bullet is-hidden--mobile btn-forum btn-forum-print" data-icon="print">
					הדפס
				</button>

				<button class="t-btn t-bullet btn-forum btn-forum-close" data-icon="forum-x">
					סגור
				</button>

			</div>

			<div class="t-box-pad svg-tip tip-equilateral add-comment">

				<?php include ( 'templates/c-form-ask-experts.php' ); ?>

			</div>

		</div>

		<div class="l-flex f-c t-bg-c2 forum-item-form-h">

			<h3 class="norm-title fs-medium t-bullet-wide forum-item-form-title">
				יש לכם עדיין שאלות?
				<br>
				קבלו ייעות אישי חינם
			</h3>

			<form class="l-flex l-fg1 t-boxes-small forum-item-form">

				<div class="forum-item-form-cell">
					<input type="text" class="h100 t-field" placeholder="שם מלא"/>
				</div>

				<div class="forum-item-form-cell">
					<input type="tel" class="h100 t-field" placeholder="טלפון"/>
				</div>

				<div class="forum-item-form-cell">
					<input type="email" class="h100 t-field" placeholder="אימייל"/>
				</div>

				<div class="l-fg1-w0 is-hidden--mobile">
					<input type="text" class="h100 t-field" name="comment" placeholder="פרטי הפניה"/>
				</div>

				<div class="forum-item-form-cell is-hidden--desktop">
					<textarea class="t-field" name="comment" placeholder="פרטי הפניה" ></textarea>
				</div>

				<div class="l-rela forum-item-form-cell-submit">

					<label class="t-checkbox form-strip-checkbox">
						<input checked type="checkbox" name="approve terms"/>
						<span>
							אני מסכים/ה לתנאי השימוש ומדיניות הפרטיות
						</span>
					</label>
					
					<label class="l-rela t-btn w100 h100 submit-hold">
						<strong class="h100 l-center fs-large t-arr-left">
							שלח
						</strong>
						<input type="submit" class="l-spread t-submit" aria-label="שלח">
					</label>

				</div>


			</form>

		</div>

	</div>

	<?php endif; ?>

</section>
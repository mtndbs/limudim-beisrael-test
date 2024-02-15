<li class="l-flex f-t t-row-half forum-comment">

	<div class="l-shrink l-flex t-bullet f-c forum-comment-meta">

		<i class="t-bullet-wide l-center forum-item-icon" aria-hidden="true">
			<?= mb_substr ( $comment['user_name'], 0 , 1); ?>

		</i>

		<div class="l-fg1">

			<strong class="forum-user t-line-height l-block comment-user">
				<?= $comment['user_name']; ?>

			</strong>

			<time class="fs-small c-greyt">
				<?= $comment['date']; ?>

			</time>

		</div>
		
	</div>

	<div class="l-fg1 svg-tip-right t-box-w forum-comment-desc">
		<?= $comment['desc']; ?>

	</div>

</li>

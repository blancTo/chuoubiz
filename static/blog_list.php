<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>広島の探偵　浮気調査なら55年の実績｜総合探偵社 中央リサーチ広島本社</title>
<link type="text/css" href="https://www.chuou.biz/css/blog_list.css" rel="stylesheet">
</head>
<body>

<?php require('./blog/wp-blog-header.php');?>


<div id="blog_list">
<?php query_posts("showposts=2&cat=1"); ?>
<?php if(have_posts()): while(have_posts()): the_post(); ?>
		<dl>
			<dt><?php the_time('Y/m/d') ?></dt>
			<dd><a href="<?php the_permalink(); ?>" target="_parent"><?php the_title(); ?></a></dd>
		</dl>
<?php endwhile; else: ?>
<?php endif; ?>
</div>


</body>
</html>
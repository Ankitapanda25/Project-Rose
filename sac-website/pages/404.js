import React from 'react';
import style from "../styles/errorPage.module.css"

export default function errorPage() {
  return (
    <section className={style.page_404}>
	<div className={style.container}>
		<div className={style.row}>	
		<div className="col-sm-12" >
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className={style.four_zero_four_bg}>
			<h1 className="text-center" >404</h1>
		
		
		</div>
		
		<div className={style.contant_box_404}>
		<h3 className={style.h2}>
		Looks like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href= "" className={style.link_404}>Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  )
  } 
import React from 'react';
import {Link} from 'react-router-dom';

import './breadCrumbsComponent.less';

const BreadCrumbs = (props) => {
	// let location = pathname.split('/').filter((l) => l !== "");
	let href = "";
	console.log(props)
	return (
		 <div className="bread-crumbs">

		 </div>
	)
}
export default BreadCrumbs;
// {
// 	location.map((l, key) => {
// 		if(!href.includes(l)) {
// 			href = href.concat(`/${l}`)
// 		}
// 		return (
// 			<div key={key}>
// 			 <span className="bread-separator">/</span>
// 			 <Link to={href}>{l}</Link>
// 			</div>
// 		)
// 	})
// }

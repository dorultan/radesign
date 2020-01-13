import React from 'react';
import path from 'path';
import ReactDOMServer from 'react-dom/server'
import {createStore} from 'redux';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import rootReducer from '../app/reducers';
import routes from '../app/routes';
import {Provider} from 'react-redux';
import {StaticRouter, Route} from 'react-router-dom';
import {matchPath} from 'react-router-dom';
import App from '../app/components';

const statsFile = process.cwd() + '/dist/loadable-stats.json';

const renderHtml = (html, content, INIT_DATA, extractor) => {
	return `
	 <!DOCTYPE html>
	 <html>
		<head>
			<title>Radesign - Let's brand you up !</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta property="og:description" content"If you have eye catching visuals based on a logo and a fixed color palette that both work together to give your potential clients something to relate to and make your business stand out , then YES! If not…..well, that’s why we’re here !"/>
			<meta property="og:image" content="https://radesign.s3.eu-west-2.amazonaws.com/meta/radesign-card.jpg"/>
			<meta name="description" content="If you have eye catching visuals based on a logo and a fixed color palette that both work together to give your potential clients something to relate to and make your business stand out , then YES! If not…..well, that’s why we’re here !"/>
			<link rel="shortcut icon" href="https://radesign.s3.eu-west-2.amazonaws.com/meta/favicon.ico" type="image/x-icon">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.6/cropper.css"/>
			<link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|PT+Sans" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
				<link
	  rel="stylesheet"
	  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	  crossorigin="anonymous"
	/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  			<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/atom-one-dark.min.css">
				${extractor.getStyleTags()}
		</head>
		<body>
		<div id="root">${html}</div>

			${extractor.getScriptTags()}
		<script>const INIT_DATA = ${JSON.stringify(INIT_DATA)};</script>
			<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156100886-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-156100886-1');
		</script>

		</body>
	 </html>
	`
};

const serverRenderer = () => {
	return (req, res, next) => {
		const ActiveRoute = routes.find((route) => matchPath(req.url, route));

		const store = createStore(rootReducer, {});
		const content = `Radesign - Portfolio`;
		const INIT_DATA = {name: "Radesign"};
		const extractor = new ChunkExtractor({statsFile});

		const Jsx = extractor.collectChunks(
			<Provider store={store}>
				<StaticRouter location={req.url} context={INIT_DATA}>
					<App>
						{ActiveRoute ? ActiveRoute.component.render : routes[0].component.render}
					</App>
				</StaticRouter>
			</Provider>
		);


		const html = ReactDOMServer.renderToString(Jsx);

		res.status(200).send(renderHtml(html, content, INIT_DATA, extractor));
	}
}

export default serverRenderer;

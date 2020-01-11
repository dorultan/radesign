import userController from '../api/controllers/userController';
import authenticationController from '../api/controllers/authenticationController';
import projectsController from '../api/controllers/projectsController';
import expressSession from 'express-session';
import expressJwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';
import passport from './passport';
import config from './';
import connectFlash from 'connect-flash';

const initApiRoutes = (app) => {


	// Profile routes
	// =====================

	// app.get('/api/profile', profileController.get);
	// app.post('/api/profile', profileController.create);
	// app.put('/api/profile', profileController.update);
	// ===============================================

	// app.get('/api/overview', overviewController);
	//
	// // Authentication routes
	// // // =====================
	// // app.use(connectFlash());
	// const checkForToken = (req, res, next) => {
	// 	const token = req.headers['authorization'];
	// 	if(token) {
	// 		req.token = token;
	//
	// 		return next();
	// 	}
	//
	// 	res.status(403).json({message: "You must have a token in order to make requests to this endpoint."})
	// }

	// const verifyToken = (req, res, next) => {
	// 	let token = req.token;
	//
	// 	if(token) {
	// 		token = token.replace('bearer ', '');
	// 		jsonwebtoken.verify(token, config.secret, (err, decoded) => {
	// 			if(err) {
	//
	// 				return res.status(403).json({message: "Invalid token."})
	// 			}
	// 			req.user = decoded.user;
	// 			return next();
	// 		})
	//
	// 	}
	// }

	app.get('/user', userController.getUser)
	app.post('/user/auth/login', passport.authenticate('local', {session: false}), authenticationController.login);
	app.post('/user/auth/singup', authenticationController.singup);
	app.get('/user/isAuthenticated', passport.authenticate('jwt', {session: false}), authenticationController.isAuthenticated);

	app.get('/api/projects/', projectsController.get, projectsController.getAll);
	app.post('/api/projects', projectsController.create);
	app.put('/api/projects/', projectsController.updateImage, projectsController.update);
	app.put('/api/projects/galery/add', projectsController.addImage);
	app.put('/api/projects/galery/remove', projectsController.removeImage);
	app.delete('/api/projects', projectsController.delete);
	app.put('/api/projects/reorder', projectsController.reOrder);
	// ============================================================
	app.get('/api/uploads/:imagePath', (req, res) => {
		const params = req.params;

		return res.sendFile(process.cwd() + '/api/uploads/' + params.imagePath);
	})
	// app.post('/user/avatar', userController.updateUserAvatar)
	// app.put('/user/password', userController.updateUserPassword)
	// app.put('/user/username', userController.updateUsername)
	// app.put('/user/social', userController.updateUserSocial)
	// app.put('/user/email', userController.updateUserEmail)
};

export default initApiRoutes;

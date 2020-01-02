import User from '../api/models/user';
import passport from 'passport';
import passportLocal from 'passport-local';
import passportGithub from 'passport-github';
import passportJwt from 'passport-jwt';
import config from './index';
// Passport local strategy:

const github_client_id = '61449a4e2cadd4fa92d7';
const github_client_secret = '6a776aacd1f9f23a95fbe9d5cf41e74714d5894f';

// Local strategy
// ===================================================================================

const local_opts = {
	usernameField: 'username',
	passwordField: 'password',
	passReqToCallback: true
};

const LocalStrategy = new passportLocal.Strategy(local_opts, (req, attendantUsername, AttendantPassword, done) => {
	// Find if any user name matches the attendant user name.
	User.findOne({
		username: attendantUsername
	}, (error, user) => {
		console.log(user)
		if(error) {
			return done(null, error);
		}

		if(!user) {
			return done(null, false, req.user = { message: 'The username is not found'});
		}

		// The user schema have a comparePassword method.
		// Use that method to compare the password and base on that
		// we'll find out if the password is correct.
		user.comparePassword(AttendantPassword, (err, isMatch) => {

			if(err) {
				return done(err);
			}

			if(!isMatch) {
				return done(null, false);
			}

			if(isMatch) {
				let _user = {
					_id: user._id,
					username: user.username,
					avatar_url: user.avatar_url,
					github_url: user.github_url,
					facebook_url: user.facebook_url,
					linkedin_url: user.linkedin_url,
					email: user.email,
					updatedAt: user.updatedAt,
					createdAt: user.createdAt
				}

				return done(null, _user);
			}
		})
	})
});

// Json web token strategy
// ============================================================
const jwt_opts = {
	secretOrKey: config.secret,
	jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken('authorization')
};
const JwtStrategy = new passportJwt.Strategy(jwt_opts, (payload, done) => {
	User.findById(payload.user._id, (err, data) => {
		if(err) {
			return done(err);
		}

		if(!data) {
			return done(null, false);
		}

		if(data) {
			done(null, data);
		}

	})
})
// Gitub strategy:
// ========================================================================
const GithubStrategy = new passportGithub.Strategy({
	clientID: '61449a4e2cadd4fa92d7',
	clientSecret: '6a776aacd1f9f23a95fbe9d5cf41e74714d5894f',
	callBackURL: 'http://localhost:3000/auth/github/callback'
}, (accessToken, refreshToken, profile, done) => {

	User.findOrCreate({
		githubId: profile.id,
		username: profile.name,
		email: profile.email,
		avatar_url: profile.avatar_url
	}, (err, user) => {

		if(err) {
			return done(err);
		}

		return done(null, user);
	})
});

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

passport.use(GithubStrategy);
passport.use(LocalStrategy);
passport.use(JwtStrategy);

export default passport;

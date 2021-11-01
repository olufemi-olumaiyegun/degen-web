import { Session } from 'next-auth';

const AuthUtils = {
	validateLoginSession: (session: Session | null, isLoading: boolean) => {
		if (isLoading) {
			return null;
		}

		if (!isLoading && !session) {
			window.open('/api/auth/signin', '_self');
		}
	},
};

export default AuthUtils;
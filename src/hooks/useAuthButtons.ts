import { useLocation } from 'react-router-dom';

import { store } from '@/redux';
import { routerArray } from '@/routers';
import { searchRoute } from '@/utils/util';

/**
 * @description 页面按钮权限 hooks
 * */
const useAuthButtons = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);

	return {
		BUTTONS: store.getState().auth.authButtons[route.meta!.key!] || {},
	};
};

export default useAuthButtons;

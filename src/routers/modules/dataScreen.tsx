import React from 'react';

import { RouteObject } from '@/routers/interface';
import lazyLoad from '@/routers/utils/lazyLoad';

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		path: '/dataScreen/index',
		element: lazyLoad(React.lazy(() => import('@/views/dataScreen/index'))),
		meta: {
			requiresAuth: true,
			title: '数据大屏',
			key: 'dataScreen',
		},
	},
];

export default dataScreenRouter;

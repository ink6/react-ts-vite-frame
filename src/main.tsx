import '@/styles/reset.less';
import '@/assets/iconfont/iconfont.less';
import '@/assets/fonts/font.less';
import '@/styles/common.less';
import 'virtual:svg-icons-register';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '@/App';
import { persistor, store } from '@/redux';
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

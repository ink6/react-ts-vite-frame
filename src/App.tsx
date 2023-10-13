import '@/language/index';
import 'moment/dist/locale/zh-cn';

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import useTheme from '@/hooks/useTheme';
import { setLanguage } from '@/redux/modules/global/action';
import Router from '@/routers/index';
import AuthRouter from '@/routers/utils/authRouter';
import { getBrowserLang } from '@/utils/util';

const App = (props: any) => {
	const { language, assemblySize, themeConfig, setLanguage } = props;
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	// 全局使用主题
	useTheme(themeConfig);

	// 设置 antd 语言国际化
	const setAntdLanguage = () => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (language && language == 'zh') return setI18nLocale(zhCN);
		if (language && language == 'en') return setI18nLocale(enUS);
		if (getBrowserLang() == 'zh') return setI18nLocale(zhCN);
		if (getBrowserLang() == 'en') return setI18nLocale(enUS);
	};

	useEffect(() => {
		// 全局使用国际化
		console.log(language, getBrowserLang(), i18n);

		i18n.changeLanguage(language || getBrowserLang());
		setLanguage(language || getBrowserLang());
		setAntdLanguage();
	}, [language]);

	return (
		<HashRouter>
			<ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(App);

import './index.less';

import welcome from '@/assets/images/welcome01.png';

const Home = () => {
	return (
		<div className='home card'>
			<img src={welcome} alt='welcome' />
		</div>
	);
};

export default Home;

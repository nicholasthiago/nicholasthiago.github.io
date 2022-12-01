import SkillList from 'components/skill-list/skill-list.component';
import './home.styles.scss';
import style from 'styles';
import { Button } from 'react-bootstrap';


const Home = () => {
	return (
		<div className={'page-home tw-flex tw-flex-row tw-h-screen tw-m-0'}>

			<div className={'home-intro' + style.col + 'tw-flex-1 tw-mt-8 tw-px-4'}>

				<div className={ 'home-header' + style.col }>
					<h3 className={ style.h2 + 'tw-my-0'}> {'Hi! I am'}			</h3>
					<h3 className={ style.h2 + 'tw-mb-0'}> {'Nicholas Thiago'}	</h3>
				</div>

				<div className={ 'home-about' + style.col }>
					<h6 className={ style.h6 + 'tw-mb-0'}> {'Designing and Developing web and mobile applications for more than 5 years, as a Software Developer.'} </h6>
				</div>

				<div className={ 'home-actions' + style.row + 'tw-gap-2'}>
					<Button className={'act-hire'}>	{'Hire me'	} </Button>
					<Button className={'act-proj'}>	{'Projects'	} </Button>
				</div>

				<div className={ 'home-skills' + style.col }>
					<SkillList />
				</div>

			</div>

			<div className={ 'home-image tw-flex-1 tw-bg-slate-500'}></div>
		</div>
	);
};

export default ( Home );
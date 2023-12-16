import SkillList from 'components/skill-list/skill-list.component';
import './home.styles.scss';
import style from 'styles';
import { Button } from 'react-bootstrap';
import { LinkContainer as Link } from 'react-router-bootstrap';


const Home = () => {
	return (
		<div className={'page-home tw-flex tw-flex-row tw-h-screen tw-m-0'}>

			<div className={'home-intro' + style.col + 'tw-flex-1 tw-mt-8'}>

				<div className={ 'home-header' + style.col }>
					<h3 className={ style.h2 + 'tw-my-0'}> {'Hi! I am'}			</h3>
					<h3 className={ style.h2 + 'tw-mb-0'}> {'Nicholas Thiago'}	</h3>
				</div>

				<div className={ 'home-about' + style.col }>
					<h6 className={ style.h6 + 'tw-mb-0'}> {'Designing and Developing web and mobile applications for more than 5 years, as a Software Developer.'} </h6>
				</div>

				<div className={ 'home-actions' + style.col + 'tw-gap-4 tw-items-start'}>
					<Link to={'/contact'}>
						<Button className={'act-hire shadow-sm'}>	{'Hire me'	} </Button>
					</Link>
					
					<Link to={'/projects'}>
						<Button className={'act-proj shadow-sm'}>	{'Projects'	} </Button>
					</Link>
				</div>

				<div className={ 'home-skills' + style.col }>
					<SkillList />
				</div>

				<div className={ 'home-contact' + style.col }>
					<h6 className={ style.h4 + 'tw-text-slate-800 tw-font-bold' }> {'Contact'} </h6>
					<h6 className={ style.h6 }> {'nicholasxavis23@gmail.com'} </h6>
					<h6 className={ style.h6 }> {'nicholasthiago.xaviercosta@edu.sait.ca'} </h6>
				</div>

				<div className={ 'home-stats tw-bg-slate-700 tw-p-' + style.col }>
					<h6 className={ style.h4 + 'tw-text-slate-100 tw-font-bold'	 }> {'Experience'} </h6>
					<h6 className={ style.h6 + 'tw-text-slate-100 tw-font-normal'}> {'Over 5 years as'} </h6>
					<h6 className={ style.h6 + 'tw-text-slate-100 tw-font-normal'}> {'Full Stack Developer at Prometheus Systems, Brazil'} </h6>
				</div>

			</div>

			<div className={ 'home-image tw-flex-1 tw-bg-slate-500'}></div>
		</div>
	);
};

export default ( Home );
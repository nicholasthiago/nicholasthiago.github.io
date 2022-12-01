import './skill-list.styles.scss';
import style from "styles";

import { SkillItemRef, skill_ref } from "pages/home/home.reference";
import { Dropdown, DropdownButton } from "react-bootstrap";


const SkillList = () => {

	const dropToggle = style.h6 + 'tw-bg-white ';
	const dropBadge	 = style.h6 + 'tw-bg-slate-700 tw-text-slate-200 tw-rounded ';

	const skill_list = ( ref: Array <SkillItemRef> ) =>
	Object.values( ref ).map( ( skill, i ) => {
		return (
			<Dropdown.Item className={ style.row + 'tw-gap-3 tw-items-center'} key={i}>
				<span className={ dropBadge + 'tw-w-32'}> { skill.lang } </span>
				<h6 className={ style.h6 + 'tw-w-32 tw-text-start tw-m-0'}> { skill.exp } </h6>
			</Dropdown.Item>
		);
	});

	return (
		<DropdownButton
			drop={'down'}
			title={'My skills'}
			className={ dropToggle }
		> { skill_list( skill_ref )}
		</DropdownButton>
	);
};

export default ( SkillList );
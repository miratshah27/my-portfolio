import React from 'react'
import Seperator from '../../common/seperator/index'
import { SkillData } from '../../data/skills'
import './skills.css';
function Skills() {
    const data = SkillData;
    return (
        <div className='skills'>
            <Seperator />
            <labell className='section-title'>Skills</labell>
            <div className='skills-container'>
                {data.map(item => {
                    return(
                        <div className='skills-section'>
                            <label className='skills-section-title'>{item.type}</label>
                            <div className='skills-list'>
                                {item.list.map(skill => {
                                    return <div className='skill-icon'>{skill.icon}</div>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills

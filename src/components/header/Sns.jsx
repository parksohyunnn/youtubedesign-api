import React from 'react'

import { snsLink } from '../../data/header'

const Sns = () => {
    return (
        <div className='header__sns'>
            <div className='header__sns'>
                <ul className='sns'>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a
                                href={sns.url}
                                target='_blank'
                                rel='nooper noreferrer'
                                aria-label={sns.title}>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sns

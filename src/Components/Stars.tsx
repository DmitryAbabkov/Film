import React from 'react';
import Star from "./Star";

type StarsProps = {
    prop: number
}

const Stars: React.FC<StarsProps> =({ prop }) => {
    return (
        <>
            {prop != 1 && prop != 5 ? (
                <ul className='card-body-stars'>
                    {
                        Array.from({length: prop}).map((_, key) => (
                            <li key={key}><Star/></li>
                        ))
                    }
                </ul>
            ) : null
            }
        </>
    );
}

export default Stars;

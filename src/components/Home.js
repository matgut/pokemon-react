import React from 'react';
import {Link} from 'react-router-dom';

export default function Home({pokemon: results}) {
    return (
        <div>
            <div className="mt-10 p-4 flex flex-wrap">
                {
                    results &&
                    results.map((val,idx) => {
                        return (
                            <div className="ml-4 text-2xl text-blue-400">
                                <Link to={`/about/${val.idx}`}>{val.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

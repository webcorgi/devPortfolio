import React from 'react';

function Kind2({ kind2, clickButton, inputRef }) {

    
    return (
        <div className="kind2">
            <ul>
                {
                    kind2.map((kind, i) => 
                        <li 
                            key={i}
                            onClick={clickButton}
                        >
                            <input 
                                type="checkbox" 
                                name="pf_item[]" 
                                value={kind} 
                                id={`pf_${kind}`}
                                ref={e => (inputRef.current[i] = e)}
                            />
                            <label htmlFor={`pf_${kind}`}>
                                <span>{kind}</span>
                            </label>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Kind2;

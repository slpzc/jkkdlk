'use client'
import React, {useState} from 'react';

const Page = () => {

    const filters = ['Актуальные новости', 'Мероприятия', "Главное"]
    const [allFilters, setAllFilters] = useState([])

     const handleFilter = (filter) => {
        if(allFilters.includes(filter)){
            return setAllFilters(allFilters.filter(e => e !== filter))
        }
         setAllFilters([...allFilters, filter])
     }

    return (
            <div className="panel news">
                <div className="mobile-wrapper">
                    <h1 className="title">Новости</h1>
                </div>
                <div className="filters">
                    {
                        filters.map((filter, key)=> (
                            <div onClick={()=> handleFilter(filter)}
                                  key={key}
                                  className={`${ allFilters.includes(filter) ? "selected" : null } filter`}
                            > {filter} </div>
                        ))
                    }
                </div>
            </div>
    );
};

export default Page;
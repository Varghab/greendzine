import React, { useState } from 'react'

const Search = ({data, card:UserCard, emptyTitle}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setTimeout(() => {
          const filtered = data.filter(item =>
            item.Name.toLowerCase().trim().includes(query.toLowerCase().trim())
          );
          setFilteredData(filtered);
        }, 300);
      };
    
    return (
        // className="productivity-dashboard"
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search with name"
                    value={searchQuery}
                    onChange={handleChange}
                    className="search-input"
                />
            </div>
            <div className='all-users'>
                {filteredData.length>0?filteredData.map((user, id)=> <UserCard key={user.id} user={user} index={id} />):<p style={{textAlign:'center'}}>{emptyTitle}</p>}
            </div>
        </div>
    )
}

export default Search

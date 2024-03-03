import React from 'react'

const UserCard = ({user, index}) => {
    const oddClass = index % 2 === 0 ? '' : 'odd';
    return (
        <div className={`user-card-container ${oddClass}`}>
            <section>
                <div className='user-card'>
                    <span className='user-card-heading'>EMP ID</span>
                    <span>:</span>
                    <span style={{fontWeight:'bold', opacity:'0.9'}}>{user['EMP ID']}</span>
                </div>
                <div className='user-card'>
                    <span className='user-card-heading'>Name</span>
                    <span>:</span>
                    <span style={{fontWeight:'bold', opacity:'0.9'}}>{user.Name}</span>
                </div>
                <div className='user-card'>
                    <span className='user-card-heading'>DOB</span>
                    <span>:</span>
                    <span style={{color:'orange', opacity:'0.6', fontWeight:'bold'}}>{user.DOB}</span>
                </div>
                <div className='user-card'>
                    <span className='user-card-heading'>Role</span>
                    <span>:</span>
                    <span style={{color:'#36A546', opacity:'0.7', fontWeight:'bold'}}>{user.Role}</span>
                </div>
            </section>
            <div className='top-corner-number'>
                <p>{user['EMP ID']}</p>
            </div>
        </div>
    )
}

export default UserCard

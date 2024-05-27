import React from 'react'

const SubHeader = () => {
    return (
        <div className="sub__header">
            <div className="container sub__header__content">
                <p className="sub__header__description">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <select className="sub__header__language">
                    <option value="en">English</option>
                    <option value="uz">Uzbek</option>
                    <option value="ru">Russia</option>
                </select>
            </div>
        </div>
    )
}

export default SubHeader
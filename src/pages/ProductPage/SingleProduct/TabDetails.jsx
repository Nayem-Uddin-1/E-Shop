import React, { useState } from 'react'
import Desc from './Tabs/Desc';
import Container from '../../../components/common/container/Container';

function TabDetails() {

    const tabData = [
        {
            id: 1,
            title: "Description",
            content: <Desc/>
        },
        { id: 2, title: "Reviews", content: "Reviews section loading" },
        { id: 3, title: "Seller Info", content: "seller info loading" },

    ];

    const [activeTab, setActiveTab] = useState(tabData[0].title);


    console.log("Tabss", activeTab);





    return (
        <Container>
            <div className='flex gap-5 text-gray-600 font-bold ' >
                {
                    tabData.map((item, i) => (
                        <button
                            onClick={() => setActiveTab(item.title)}
                            className={`${activeTab === item.title && "border-green-700 border-b-2 text-black "}`}
                        >
                            {item.title}
                        </button>
                    ))}
            </div>

            <div>
                {
                tabData.map((item,i)=> activeTab === item.title && (
                    <div className='my-10'>
                        {item.content}
                    </div>
                ))
                }
            </div>



        </Container>
    )
}

export default TabDetails
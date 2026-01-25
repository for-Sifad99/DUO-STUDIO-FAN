import React from 'react';

const Mentions = () => {
    const mentionsData = [
        {
            brand: 'verizon',
            title: 'small business feature',
            year: '2021',
            image: 'https://images.unsplash.com/photo-1688362809005-e1d27bf427ac',
        },
        {
            brand: 'verizon',
            title: 'small business feature',
            year: '2021',
            image: 'https://images.unsplash.com/photo-1688232543149-5602b136ba11',
        },
        {
            brand: 'verizon',
            title: 'small business feature',
            year: '2021',
            image: 'https://images.unsplash.com/photo-1688103920333-117afda88518',
        },
        {
            brand: 'verizon',
            title: 'small business feature',
            year: '2021',
            image: 'https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0',
        },
        {
            brand: 'verizon',
            title: 'small business feature',
            year: '2021',
            image: 'https://images.unsplash.com/photo-1686904423955-b928225c6488',
        },
    ];

    const handleEnter = (e) => {
        e.currentTarget.style.color = 'white';
        const img = e.currentTarget.dataset.image;
    };

    const handleLeave = (e) => {
        e.currentTarget.style.color = '#52525B';
    };

    return (
        <div
            id="metions"
            className="w-full min-h-screen py-[11vw] px-[6.5vw] border-b border-zinc-700"
        >
            <div className="men-head flex items-center justify-between mb-[2vw]">
                <h3 className="text-[3.5vw] font-medium tracking-tighter uppercase">
                    <span className="text-[#EDBFFF]">Mentions</span> Clients
                </h3>
                <h6 className="text-sm font-medium px-3 py-0.5 border border-[#DADADA] rounded-full capitalize">
                    View Clients
                </h6>
            </div>
            <div className="boxes">
                {mentionsData.map((item, index) => (
                    <div
                        key={index}
                        className="box flex justify-between items-center py-[1vw] text-zinc-600 tracking-tighter capitalize border-t border-[#DADADA]"
                        data-image={item.image}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                        <h2 className="text-[1.8vw] font-medium">
                            {item.brand}
                        </h2>

                        <div className="text-[1.3vw] font-medium flex items-center justify-center gap-20">
                            <h4>{item.title}</h4>
                            <h4>{item.year}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mentions;

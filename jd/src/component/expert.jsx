import React, { useState } from 'react';
import { SearchIcon, FilterIcon } from '@heroicons/react/outline';

const experts = [
    {
        name: 'اميرة قصي',
        imageUrl: '../img/amera.png',
        role: 'خبير في المنظمات الغير ربحية',
        bio: '',
    },
    {
        name: 'موسى الموسى',
        imageUrl: '../img/musa.png',
        role: 'مؤسس مشروع لتأهيل الباحثين عن عمل.',
        bio: '',
    },
    {
        name: 'عبدالعزيز المرشدي',
        imageUrl: '../img/abdalziz.png',
        role: 'كاتب ابداعي, مشرف ومعد سير ذاتية',
        bio: '',
    },
    // Add more experts as needed
];

const Expert = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOption, setFilterOption] = useState('all');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterOption(event.target.value);
    };

    const filteredExperts = experts.filter((expert) =>
        expert.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterOption === 'all' || expert.role.toLowerCase().includes(filterOption.toLowerCase()))
    );

    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src="/Services.svg"
                alt="Background"
                className="absolute top-0 left-0 w-full h-full z-0"
            />

            {/* Main content */}
            <div className="relative z-10 bg-gray py-24 sm:py-32">
                {/* Title and Description */}
                <div className="h-14 flex-col justify-start items-center gap-2 flex">
                    <div className="text-slate-900 text-base font-normal leading-tight">حجز جلسة مع خبير</div>
                    <div className="w-96 text-center text-zinc-900 text-2xl font-bold leading-normal">خطواتك الأولى نحو الاستشارة والتوجيه الفعّال.</div>
                </div>

                {/* Space between filter and search */}
                <div className="mt-8 p-5"></div>

                {/* Filter and Search */}
                <div className="w-auto h-9 relative flex items-center justify-center space-x-3">
                    {/* Filter Dropdown */}
                    <div className="relative">
                        <FilterIcon className="w-4 h-9 fill-current text-gray-500 absolute left-3 top-2/4 transform -translate-y-2/4" />
                        <label htmlFor="filterSelect" className="sr-only">Filter Option</label>
                        <select
                            id="filterSelect"
                            value={filterOption}
                            onChange={handleFilterChange}
                            className="pl-8 h-className9 pr-3 py-1 border border-black/10 rounded-md text-sm text-gray/50 font-normal font-Cairo text-right outline-none appearance-none"
                        >
                            <option value="all">الكل</option>
                            <option value="هندسة برمجيات">هندسة برمجيات</option>
                            <option value="موارد بشرية">موارد بشرية</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    {/* Search Input */}
                    <div className="relative">
                        <SearchIcon className="w-4 h-4 fill-current text-gray-500 absolute left-3 top-2/4 transform -translate-y-2/4" />
                        <label htmlFor="searchInput" className="sr-only">Search</label>
                        <input
                            id="searchInput"
                            type="text"
                            className="w-36 h-9 px-3 py-1 border border-black/10 rounded-md text-sm text-black/50 font-normal font-Cairo text-right outline-none placeholder-gray-500"
                            placeholder="البحث"
                            onChange={handleSearch}
                            value={searchTerm}
                        />
                    </div>
                </div>

                {/* Experts Section */}
                <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:grid-cols-3" dir="rtl">
                    {filteredExperts.map((expert, index) => (
                        <div key={index} className="px-6 py-12 bg-[#69B1B0] rounded-xl flex-col justify-center items-center gap-7 inline-flex">
                            <img className="w-36 h-36 rounded-lg" src={expert.imageUrl} alt={expert.name} />
                            <div className="flex-col justify-center items-center gap-3">
                                <div className="w-64 text-center text-zinc-900 text-2xl font-bold leading-normal">{expert.name}</div>
                                <div className="w-64 text-center text-white text-sm leading-tight">{expert.role}</div>
                            </div>
                            <div className="px-4 py-2 bg-neutral-100 rounded-md justify-center items-center gap-2.5 inline-flex">
                                <a className="text-black/opacity-50 text-base leading-tight" href="https://wa.me/966530547165">أحجز الان</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Experts Button */}
                <div className="flex justify-center space-x-4 mt-4">
                    <div className="w-auto h-11 px-5 py-3 rounded-md border border-zinc-500/opacity-30 justify-center items-center gap-3 inline-flex">
                        <button className="text-zinc-500 text-base leading-tight">رؤية كل الخبراء</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;


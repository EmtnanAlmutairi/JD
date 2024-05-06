import React, { useState } from 'react';
import GridIcon from '../icons/grid-alt.svg'; // Replace '../icons/GridIcon.svg' with your actual SVG file path
import ListIcon from '../icons/list.svg'; // Replace '../icons/ListIcon.svg' with your actual SVG file path

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    title: 'Boost your conversion rate',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
];

const Blog = () => {
  const [specialty, setSpecialty] = useState('All');
  const [displayType, setDisplayType] = useState('grid');

  const filteredPosts = specialty !== 'All' ? posts.filter(post => post.category.title === specialty) : posts;

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grow shrink basis-0 text-right text-gray-900 text-2xl font-bold font-['Work Sans'] leading-7 pb-10">أحدث تدوينات الخبراء</div>
        {/* Search and Display Options */}
        <div className="flex items-center justify-between mb-8" >
          <div className="flex items-center space-x-4">
          <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-900"
          dir="rtl" // Set direction to right-to-left
          >
            <option value="All"> كل التخصصات</option>
            <option value="Marketing"> التسويق</option>
            <option value="Engineering"> الهندسة</option>
      {/* Add more specialties with icons as needed */}
    </select>
          </div>
          <div className="flex items-center space-x-4">
          <button onClick={() => setDisplayType('grid')} className="px-4 py-2 bg-slate-900 text-white rounded-md flex items-center space-x-2">
          <img src={GridIcon} alt="Grid View" className="w-5 h-5" /> {/* Use the imported SVG as an image */}
          </button>          
          <button onClick={() => setDisplayType('list')} className="px-4 py-2 bg-white text-white border border-zinc-200 rounded-md flex items-center space-x-2">
          <img src={ListIcon} alt="List View" className="w-5 h-5" /> {/* Use the imported SVG as an image */}
          </button>          
        </div>
        </div>
        
        {/* Blog Posts */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3" dir="rtl"> 
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl border border-gray-200">
              <img src={post.image} alt={post.title} className="h-60 w-full object-cover rounded-t-xl" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <time dateTime={post.datetime} className="text-gray-500 text-xs">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    {post.title}
                  </a>
                </h3>
              </div>
              <div className="p-4 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mt-4" >
        <div className="w-auto h-11 px-5 py-3 rounded-md border border-zinc-500/opacity-30 justify-center items-center gap-3 inline-flex">
            <button className="text-zinc-500 text-base font-normal font-['Calibri'] leading-tight">رؤية كل التدوينات</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;


{/**<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl border border-gray-200">
              <img src={post.image} alt={post.title} className="h-60 w-full object-cover rounded-t-xl" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <time dateTime={post.datetime} className="text-gray-500 text-xs">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    {post.title}
                  </a>
                </h3>
              </div>
              <div className="p-4 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div> */}
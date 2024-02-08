import { Dialog, Tab, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const GridButton = () => {
  const tabs1 = [
    {
      name: 'New',
      id: '1',
      data: [
        {
          id: 1,
          title: 'Total Complaints',
          value: 29,
        },
        {
          id: 2,
          title: 'In-Process',
          value: 2,
        },
        {
          id: 4,
          title: 'Resolved',
          value: 15,
        },
        {
          id: 3,
          title: 'Un-Resolved',
          value: 29,
        },
      ],
    },
    {
      name: 'Today',
      id: '2',
      data: [
        {
          id: 1,
          title: 'Total Complaints',
          value: 19,
        },
        {
          id: 2,
          title: 'In-Process',
          value: 20,
        },
        { id: 4, title: 'Resolved', value: 5 },
        {
          id: 3,
          title: 'Un-Resolved',
          value: 19,
        },
      ],
    },
    {
      name: 'Yesterday',
      id: '3',
      data: [
        {
          id: 1,
          title: 'Total Complaints',
          value: 29,
        },
        {
          id: 2,
          title: 'In-Process',
          value: 2,
        },
        { id: 4, title: 'Resolved', value: 15 },
        {
          id: 3,
          title: 'Un-Resolved',
          value: 29,
        },
      ],
    },
    {
      name: 'Last 7 Days',
      id: '4',
      data: [
        {
          id: 1,
          title: 'Total Complaints',
          value: 29,
        },
        {
          id: 2,
          title: 'In-Process',
          value: 2,
        },
        {
          id: 3,
          title: 'Un-Resolved',
          value: 29,
        },
      ],
    },
    {
      name: 'This Month',
      id: '5',
      data: [
        {
          id: 1,
          title: 'Total Complaints',
          value: 29,
        },
        {
          id: 2,
          title: 'In-Process',
          value: 2,
        },
        {
          id: 3,
          title: 'Un-Resolved',
          value: 29,
        },
      ],
    },
    {
      name: 'Closed',
      id: '6',
      data: [
        {
          id: 1,
          title: 'Total Complaints',
          value: 29,
        },
        {
          id: 2,
          title: 'In-Process',
          value: 2,
        },
        {
          id: 3,
          title: 'Un-Resolved',
          value: 29,
        },
      ],
    },
  ];

  const tabs2 = [
    {
      name: 'Refund Process',
      id: '7',
      data: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 8',
          commentCount: 29,
          shareCount: 16,
        },
      ],
    },
    {
      name: 'Refund Given',
      id: '8',
      data: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
      ],
    },
    {
      name: 'In-Process',
      id: '9',
      data: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
      ],
    },
  ];

  const [categories] = useState(tabs1);
  const [categories2] = useState(tabs2);

   const [isOpen, setIsOpen] = useState(false);

   function closeModal() {
     setIsOpen(false);
   }

   function openModal() {
     setIsOpen(true);
   }
  return (
    <>
      <div className='w-full px-2 py-2 sm:px-0'>
        <Tab.Group>
          <Tab.List className='w-full p-5 bg-white shadow-xl rounded-xl'>
            <div className=' rounded-xl grid gap-8 sm:grid-cols-2 lg:grid-cols-6'>
              {categories.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg text-sm font-medium leading-5 bg-[#e4e3e8]',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-red-500 text-white shadow'
                        : 'text-black hover:bg-white/[0.12] '
                    )
                  }>
                  {tab.name}
                </Tab>
              ))}
            </div>
            <div className='mt-5 rounded-xl grid gap-8 sm:grid-cols-2 lg:grid-cols-6'>
              {categories2.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg text-sm font-medium leading-5 bg-[#e4e3e8]',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-red-500 text-white shadow'
                        : 'text-black hover:bg-white/[0.12] '
                    )
                  }>
                  {tab.name}
                </Tab>
              ))}

              <button
                type='button'
                className='w-full rounded-md bg-red-500 px-1 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
                Add new Complain
              </button>
              <button
                type='button'
                onClick={openModal}
                className='w-full rounded-md bg-red-500 px-2 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
                Data Filter
              </button>
            </div>
          </Tab.List>
          <Tab.Panels className='mt-3 rounded-none'>
            {categories.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}>
                <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
                  {tab?.data?.map((post) => (
                    <div
                      className={`bg-red shadow-lg p-5 w-full rounded-md flex items-center justify-center flex-col 
                    ${
                      post.title.toLocaleLowerCase() === 'total complaints' &&
                      'bg-[#00d1fa]'
                    }
                      ${
                        post.title.toLocaleLowerCase() === 'in-process' &&
                        'bg-[#c6fa0066]'
                      }
                        ${
                          post.title.toLocaleLowerCase() === 'resolved' &&
                          'bg-[#00ef1f8c]'
                        }
                          ${
                            post.title.toLocaleLowerCase() === 'un-resolved' &&
                            'bg-[#fa000075]'
                          }
                    `}>
                      <h2 className='text-black text-lg font-semibold'>
                        {post.title}
                      </h2>
                      <p className='text-black block'>{post.value}</p>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}

            {categories2.map((tab, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}>
                <ul>
                  {tab?.data?.map((post) => (
                    <li
                      key={post.id}
                      className='relative rounded-md p-3 hover:bg-gray-100'>
                      <h3 className='text-sm font-medium leading-5'>
                        {post.title}
                      </h3>

                      <ul className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500'>
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href='#'
                        className={classNames(
                          'absolute inset-0 rounded-md',
                          'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg text-center font-medium leading-6 text-gray-900'>
                    Search Data
                  </Dialog.Title>
                  <div className='mt-2'>
                    <label
                      htmlFor='search'
                      className='block text-sm font-medium leading-5 text-gray-100'>
                      From Date
                      <input
                        id='search'
                        type='date'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus
                      focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm'
                        placeholder='Search'
                      />
                    </label>
                    <label
                      htmlFor='search'
                      className='block text-sm font-medium leading-5 text-gray-100'>
                      To Date
                      <input
                        id='search'
                        type='date'
                        className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus
                      focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm'
                        placeholder='Search'
                      />
                    </label>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium'
                      onClick={closeModal}>
                     Search
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GridButton;

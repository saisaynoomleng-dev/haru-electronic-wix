'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import Form from 'next/form';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const navLinks = [
    { title: 'Mobile & Wearable Tech', url: '/products?type=mobile-wearable' },
    { title: 'Drones & Cameras', url: '/products?type=drone-camera' },
    {
      title: 'Headphones & Speakers',
      url: '/products?type=headphone-speaker',
    },
    { title: 'Computers', url: '/products?type=computers' },
    { title: 'Tablets', url: '/products?type=tablets' },
    { title: 'TV & Home Cinema', url: '/products?type=tv-cinema' },
    { title: 'Accessories', url: '/products?type=accessories' },
  ];

  return (
    <header className="divide-y-[1px] divide-brand-black-100/10 px-2 py-4 mb-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt=""
              width={100}
              height={30}
              priority
              className="dark:hidden"
            />

            <Image
              src="/logo-black.png"
              alt=""
              width={100}
              height={30}
              priority
              className="hidden dark:block"
            />
          </Link>

          <ThemeSwitch />
        </div>

        <div className="flex gap-3">
          <FaRegHeart />
          <FaShoppingBag />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative">
          <button
            className={clsx(
              'block lg:hidden cursor-pointer max-lg:absolute max-lg:top-1 max-lg:z-40 max-lg:transition-colors max-lg:duration-300 max-lg:ease-in',
              navOpen && 'text-brand-white',
            )}
            onClick={() => setNavOpen((prevOpen) => !prevOpen)}
            aria-controls="#main-nav"
            aria-expanded={navOpen}
          >
            {navOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
          <nav
            id="main-nav"
            aria-label="main menu"
            role="navigation"
            className={clsx(
              'flex flex-col gap-4 items-center justify-center lg:flex-row lg:text-fs-200 lg:justify-start',
              'max-lg:fixed max-lg:inset-0 max-lg:bg-brand-blue max-lg:text-brand-white max-lg:font-semibold max-lg:transition-transform max-lg:duration-500 max-lg:ease-in-out max-lg:z-30',
              navOpen ? 'max-lg:translate-y-0' : 'max-lg:-translate-y-full',
            )}
          >
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className="max-lg:hover:text-brand-black-200/60"
                onClick={() => setNavOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <Form action="" scroll={false} className=""></Form>
      </div>
    </header>
  );
};

export default Header;

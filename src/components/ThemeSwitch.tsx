'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  if (theme === 'light') {
    return (
      <Button variant="switch" onClick={() => setTheme('dark')}>
        <FaSun className="" />
      </Button>
    );
  }

  if (theme === 'dark') {
    return (
      <Button variant="switch" onClick={() => setTheme('light')}>
        <FaMoon className="" />
      </Button>
    );
  }
};

export default ThemeSwitch;

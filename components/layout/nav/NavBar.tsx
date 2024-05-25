'use client';

import './NavBar.css';

import { ReactNode, useCallback, useMemo } from 'react';
import { Logo } from './Logo';
import { useRecoilState } from 'recoil';
import { headerState } from '../../../states/global/header-state';
import { useRouteChange } from '../../../utility-hooks/use-route-change';
import { Button } from '../../base/button/Button';
import Nav from './Nav';
import { useRouter } from 'next/navigation';

export function NavBar({ children }: { children: ReactNode }) {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const [header, setHeader] = useRecoilState(headerState);
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    router.back();
  }, [router]);

  useRouteChange({
    onRouteChange: () => {
      setHeader({});
    },
  });

  return (
    <>
      <section className="logo-wrapper">
        <Logo />
      </section>

      <main className="main-section">
        {header.title ? (
          <header className="header">
            <Button
              className="back-button"
              custom={true}
              onClick={handleBackClick}
            />

            <div className="header-title">{header.title}</div>
          </header>
        ) : null}
        {children}
      </main>

      <footer className="copyright-footer">
        <small>
          © 2022 - {currentYear} Dong Hyuk Byun. All Rights Reserved.
        </small>
      </footer>

      <Nav />

      <div className="bottom-filler"></div>
    </>
  );
}
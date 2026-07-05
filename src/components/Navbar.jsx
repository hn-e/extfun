import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { TiLeaf } from "react-icons/ti";

const navItems = [
  { label: "Events", href: "#events" },
  { label: "Download", href: "#download" },
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const NavBar = ({ isAudioPlaying, setIsAudioPlaying }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="relative flex size-full items-center justify-between p-4">
            <div className="flex items-center gap-7">
              <img src="/img/logo.png" alt="logo" className="w-10 rounded-lg" />
            </div>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="nav-hover-btn"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="absolute left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white md:hidden"
            >
              {menuOpen ? (
                <HiOutlineXMark size={20} />
              ) : (
                <TiLeaf size={20} />
              )}
            </button>

            <div className="flex items-center">
              <button
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-0.5"
              >
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isAudioPlaying,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                      "--h": `${Math.random() * 20 + 2}px`,
                    }}
                  />
                ))}
              </button>
            </div>
          </nav>
        </header>
      </div>

      <div
        className={clsx(
          "fixed inset-x-0 top-20 z-40 mx-4 overflow-hidden rounded-2xl border bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden",
          menuOpen
            ? "max-h-96 border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="flex flex-col items-center gap-5 p-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-general text-base uppercase tracking-wider text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;

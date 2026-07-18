import About from "./components/About";
import CardCarousel from "./components/CardCarousel";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useParty } from "./context/PartyContext";
import PartyDrawer from "./components/PartyDrawer";
import SEO, { BASE_URL } from "./components/SEO";
import GoogleAnalytics from "./components/GoogleAnalytics";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [closing, setClosing] = useState(false);
  const audioRef = useRef(null);

  const { party, setParty } = useParty();

  const dummyCards = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1670333351937-68cb2735a0fd?w=400&auto=format&fit=crop",
      title: "Dancing Like Nobody's Judging",
      description:
        "Spoiler: everyone is judging. Bring your best moves, a plus-one who can't dance, and a complete disregard for personal space. The floor is lava after midnight.",
      date: "Sat, 12 Jul",
      time: "9:00 PM",
      location: "The Basement, Mumbai",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121126477-17ef068309bc?w=400&auto=format&fit=crop",
      title: "Karaoke Until They Kick Us Out",
      description:
        "Singing talent not required. Enthusiasm is mandatory. There will be a tambourine, a questionable song choice from 2007, and at least one person crying during Wonderwall.",
      date: "Fri, 18 Jul",
      time: "8:00 PM",
      location: "Loud Mouth Bar, Bangalore",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627020730793-2ccb5cd55e99?w=400&auto=format&fit=crop",
      title: "Silent Disco, Loud Drama",
      description:
        "Two channels. Three love triangles. Zero ability to hear yourself sing. Pick your DJ wisely — the wrong channel could mean 45 minutes of pan flute covers and eternal shame.",
      date: "Sun, 20 Jul",
      time: "7:30 PM",
      location: "Neon Cove, Goa",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661759013744-4754d402459d?w=400&auto=format&fit=crop",
      title: "Rooftop Sunsets & Bad Decisions",
      description:
        "The view is stunning. Your life choices tonight will be highly debatable. We provide the sunset and the cocktails. You provide the stories you'll regret telling your therapist.",
      date: "Thu, 24 Jul",
      time: "6:00 PM",
      location: "Sky Deck, Delhi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=400&auto=format&fit=crop",
      title: "Board Games But Make It Boozy",
      description:
        "Monopoly has never been this cutthroat — or this drunk. Every hotel purchase requires a shot. Every 'Go to Jail' card means two. We are not liable for flipped tables or broken friendships.",
      date: "Wed, 30 Jul",
      time: "7:00 PM",
      location: "The Den, Pune",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1682681903841-1f98ce6a1175?w=400&auto=format&fit=crop",
      title: "Pajama Party (No, Seriously)",
      description:
        "Bring your fancy pajamas. Your ex might be here. There will be pillow forts, a hot chocolate station, and a strict no-shoes policy enforced by our very serious bouncer named Kevin.",
      date: "Sat, 2 Aug",
      time: "10:00 PM",
      location: "Villa 42, Jaipur",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664278686569-e2045aa5b11d?w=400&auto=format&fit=crop",
      title: "Potluck of Questionable Cooking",
      description:
        "Bring a dish. Bring antacids. Bring a signed waiver. Last month someone brought 'deconstructed cereal' which was just a box of Cheerios and warm milk. We're still recovering emotionally.",
      date: "Sun, 10 Aug",
      time: "1:00 PM",
      location: "Green House, Hyderabad",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600854109241-46990389fb97?w=400&auto=format&fit=crop",
      title: "Glow in the Dark Chaos",
      description:
        "We provide the neon paint, UV lights, and questionable life advice. You bring white clothing and a willingness to look ridiculous. Photos will surface at your wedding. You've been warned.",
      date: "Fri, 15 Aug",
      time: "9:30 PM",
      location: "Warehouse 7, Chennai",
    },
  ];

  const closeOverlay = () => {
    setClosing(true);
    setTimeout(() => setLoading(false), 300); // match duration
  };

  useEffect(() => {
    if (!audioRef.current) return;
    isAudioPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isAudioPlaying]);

  return (
    <>
      <SEO
        title="Extroverts — Discover Parties, Meet People, Go Out"
        description="Find spontaneous parties, meet like-minded people, and make every night an adventure. Available on App Store and Play Store."
        path="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Extroverts",
            operatingSystem: "ANDROID, IOS",
            applicationCategory: "SocialNetworkingApplication",
            description:
              "Discover parties, events, and meetups near you. Find like-minded people, join spontaneous hangouts, and never have a boring weekend again.",
            url: BASE_URL,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              ratingCount: "100",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Extroverts",
            url: BASE_URL,
            logo: `${BASE_URL}/img/logo.png`,
            sameAs: [`${BASE_URL}`],
          },
        ]}
      />
      <GoogleAnalytics />
      {/* AUDIO MUST LIVE FOREVER */}
      <audio ref={audioRef} src="/audio/loop.mp3" loop />

      {/* LOADING OVERLAY */}
      {loading && (
        <div
            onClick={() => {
              setIsAudioPlaying((p) => !p);
              // closeOverlay();
            }}
          className={`fixed inset-0 z-30 flex flex-col items-center justify-center
            bg-neutral-900 text-white gap-8 transition-opacity duration-300
            ${closing ? "opacity-0" : "opacity-100"}`}
        >
          {/* SOUND TOGGLE */}
          <p className="font-general text-xl text-white uppercase">
            Loading...
          </p>
          <button
            className={`flex items-center justify-center rounded-full border transition-all duration-200 p-40
              ${isAudioPlaying
                ? "border-white text-white"
                : "border-neutral-500 text-neutral-500"}
              w-32 h-32`}
          >
            {/* icon */}
            <div className="flex items-end space-x-1 h-10">
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isAudioPlaying,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s`, '--h': `${Math.random() * 20 + 2}px` }}
                />
              ))}
            </div>
          </button>
          <p className="font-general text-white uppercase">
            Enable sound for full experience
          </p>
        </div>
      )}

      {/* PARTY DRAWER */}
      {party && (
        <PartyDrawer
          party={party}
          onClose={() => setParty(null)}
        />
      )}

      {/* APP CONTENT */}
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar
          isAudioPlaying={isAudioPlaying}
          setIsAudioPlaying={setIsAudioPlaying}
        />
        <Hero closeLoader={()=>setLoading(false)} />
        <div className="flex justify-center bg-black py-3">
          <Link
            to="/vibe-test"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm uppercase tracking-wider text-white/40 transition-all duration-300 hover:border-violet-500/50 hover:text-white/70"
          >
            <span className="text-base">🎉</span>
            <span>What&rsquo;s your party vibe?</span>
            <span className="text-violet-400 transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>
        <CardCarousel cards={dummyCards} />
        <Download />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </>
  );
}


export default App;

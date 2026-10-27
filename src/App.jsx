import React, { useEffect, useMemo, useRef, useState } from 'react';

const games = [
  {
    id: 'ashen-tide',
    title: 'Ashen Tide',
    tagline: 'The ocean remembers everything.',
    description: [
      'When the sea swallows the last horizon, a lone cartographer sets sail to map the world that remains. Ashen Tide is a story-rich action RPG about the people, places, and impossible choices found at the edge of a drowned world.',
      'Navigate shifting waters, chart forgotten coastlines, and uncover a mystery that reaches far beyond the surface. Every island has a story. Every voyage leaves a mark.',
    ],
    genre: 'Action RPG',
    status: 'released',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseDate: 'October 18, 2024',
    features: ['A hand-crafted world that changes with the tide', 'Deep, responsive real-time combat', 'A heartfelt story shaped by your choices', 'Explore solo or sail with a friend'],
    art: 'from-cyan-950 via-slate-900 to-blue-950',
    accent: 'cyan',
    symbol: 'TIDE',
    screenshots: ['The Sunken Reach', 'A World Below', 'The Last Harbor', 'Into Deep Water'],
  },
  {
    id: 'iron-kingdom',
    title: 'Iron Kingdom',
    tagline: 'Build an empire. Survive its ghosts.',
    description: [
      'In a land where ancient machines sleep beneath the soil, a new age of industry threatens to wake them. Iron Kingdom is a sweeping strategy RPG about building something that lasts—and deciding what it costs.',
      'Raise a city from the frontier, command a company of unforgettable heroes, and shape the fate of a kingdom poised between its past and future.',
    ],
    genre: 'Strategy',
    status: 'released',
    platforms: ['PC', 'PlayStation'],
    releaseDate: 'May 9, 2023',
    features: ['A sprawling campaign with branching alliances', 'Build and manage a living frontier city', 'Tactical battles with terrain that matters', 'Hundreds of ways to shape your legacy'],
    art: 'from-amber-950 via-stone-900 to-red-950',
    accent: 'amber',
    symbol: 'IRON',
    screenshots: ['The Old Foundry', 'Crown of Ash', 'The Frontier', 'A Kingdom Rising'],
  },
  {
    id: 'hollow-star',
    title: 'Hollow Star',
    tagline: 'Something is listening in the dark.',
    description: [
      'A distress call pulls a salvage crew into the silent orbit of a planet that should not exist. Hollow Star is a first-person science-fiction thriller where curiosity is your greatest asset—and your most dangerous instinct.',
      'Piece together a vanished expedition through environmental storytelling, tense encounters, and a soundscape that makes every quiet moment count.',
    ],
    genre: 'Sci-Fi Thriller',
    status: 'in-development',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseDate: 'Coming 2027',
    features: ['Explore a seamless, mysterious alien environment', 'Investigate a story told through the world itself', 'Survive encounters with a patient intelligence', 'An original score built to pull you deeper'],
    art: 'from-violet-950 via-indigo-950 to-slate-950',
    accent: 'violet',
    symbol: 'HOLLOW',
    screenshots: ['Signal Lost', 'The Quiet Orbit', 'Beneath the Surface', 'Something Stirs'],
  },
  {
    id: 'wildline',
    title: 'Wildline',
    tagline: 'Find your way back to the wild.',
    description: [
      'The old world is gone, but life has found a way. In Wildline, an open-world survival adventure, you follow a family of rewilders as they rediscover a planet learning to breathe again.',
      'Build a home in the untamed, tend to the land, and meet the creatures who have made it theirs. There is no rush. The wilderness has its own plans.',
    ],
    genre: 'Adventure',
    status: 'in-development',
    platforms: ['PC', 'Switch'],
    releaseDate: 'Coming 2026',
    features: ['A vast world shaped by its living ecosystems', 'Create a home with flexible, creative building', 'Discover wildlife and restore fragile habitats', 'A gentle adventure made to be shared'],
    art: 'from-emerald-950 via-teal-950 to-slate-950',
    accent: 'emerald',
    symbol: 'WILD',
    screenshots: ['Overgrown', 'Green Again', 'A Place to Call Home', 'The Long Way'],
  },
  {
    id: 'glass-harbor',
    title: 'Glass Harbor',
    tagline: 'Every reflection hides a different truth.',
    description: [
      'In a city of mirrors, memories are currency and the truth is never free. Glass Harbor is a narrative mystery from the team behind Ashen Tide, built around a cast whose stories intertwine in unexpected ways.',
      'Follow the clues, question every reflection, and decide what the city deserves to remember.',
    ],
    genre: 'Adventure',
    status: 'released',
    platforms: ['PC', 'PlayStation', 'Xbox'],
    releaseDate: 'March 2, 2022',
    features: ['An intricate mystery with multiple perspectives', 'A richly detailed city to explore', 'Choices that change what the truth looks like'],
    art: 'from-rose-950 via-slate-900 to-fuchsia-950',
    accent: 'rose',
    symbol: 'GLASS',
    screenshots: ['The Mirror District', 'Rain on the Harbor', 'A Familiar Face', 'Behind the Glass'],
  },
  {
    id: 'northbound',
    title: 'Northbound',
    tagline: 'One last journey. One more story.',
    description: [
      'Two strangers share a train carriage on the longest night of the year. Northbound is a quiet, intimate story about the paths we take and the things we carry with us.',
      'Listen closely, make a little room, and see where the rails take you.',
    ],
    genre: 'Narrative',
    status: 'released',
    platforms: ['PC', 'Switch'],
    releaseDate: 'November 14, 2020',
    features: ['A compact, character-led journey', 'Meaningful conversations shaped by your choices', 'An original, piano-led soundtrack'],
    art: 'from-blue-950 via-slate-800 to-sky-950',
    accent: 'sky',
    symbol: 'NORTH',
    screenshots: ['Last Light', 'The Night Train', 'Passing Places', 'First Snow'],
  },
];

const newsPosts = [
  {
    id: 'hollow-star-reveal',
    title: 'Meet Hollow Star, our new sci-fi thriller',
    category: 'Announcement',
    date: 'June 12, 2025',
    excerpt: 'A signal from a silent world. A crew with nowhere else to go. Take your first look at our next story.',
    body: [
      'Today, we are thrilled to introduce Hollow Star, a first-person science-fiction thriller currently in development at Northstar Interactive.',
      'A distress call pulls a salvage crew into the silent orbit of a planet that should not exist. As you explore, you will piece together what happened to the people who came before—and what, exactly, is listening in the dark.',
      'Hollow Star is being built by a team who love slow-burn mysteries, richly realized worlds, and the kind of atmosphere that stays with you after the screen goes dark. We cannot wait to share more.',
    ],
  },
  {
    id: 'ashen-update',
    title: 'Ashen Tide: The Farwater update is live',
    category: 'Patch Notes',
    date: 'April 28, 2025',
    excerpt: 'A new coastline to chart, new stories to uncover, and a few quality-of-life improvements requested by you.',
    body: [
      'The Farwater update is available now on all platforms. This free update adds a new region to explore, a collection of side stories, and new ways to customize your ship.',
      'We have also made improvements to map readability, controller navigation, and several community-requested quality-of-life features. Thank you for continuing to make this world your own.',
    ],
  },
  {
    id: 'studio-open-house',
    title: 'A little more room to make big things',
    category: 'Studio',
    date: 'March 3, 2025',
    excerpt: 'We are growing our team and opening the doors to a few new collaborators.',
    body: [
      'Northstar is growing. We are looking for curious, kind, and exceptionally thoughtful people to join us in making games that stay with players.',
      'Our new openings span engineering, art, design, and production. We are a hybrid studio with a Berlin home base, and we welcome applications from people with many different paths into games.',
    ],
  },
  {
    id: 'craft-not-crunch',
    title: 'Making space for the work—and the people doing it',
    category: 'Dev Blog',
    date: 'January 17, 2025',
    excerpt: 'Our production team shares how we make ambitious games without making crunch part of the plan.',
    body: [
      'We believe the best creative work comes from teams who have the time and trust to do it well. That means planning honestly, protecting focus, and accepting that good ideas need space.',
      'In this studio note, our production team shares the rituals and practical decisions that help us build ambitious games at a sustainable pace.',
    ],
  },
  {
    id: 'award-season',
    title: 'Ashen Tide receives three players’ choice nominations',
    category: 'Press',
    date: 'November 21, 2024',
    excerpt: 'We are grateful to everyone who sailed with us and helped the game find its way.',
    body: [
      'Ashen Tide has been nominated in three categories at this year’s Players’ Choice Awards. The recognition is lovely, but the messages we have received from players mean even more.',
      'Thank you for exploring this world, sharing your stories, and making the voyage your own.',
    ],
  },
];

const jobs = [
  { id: 'gameplay-engineer', title: 'Senior Gameplay Engineer', department: 'Engineering', location: 'Berlin — Hybrid', type: 'Full-time', description: 'Help us build responsive, expressive gameplay systems for our next adventure.' },
  { id: 'tools-engineer', title: 'Tools & Pipeline Engineer', department: 'Engineering', location: 'Berlin — Hybrid', type: 'Full-time', description: 'Build thoughtful tools that help artists and designers do their best work.' },
  { id: 'environment-artist', title: 'Senior Environment Artist', department: 'Art', location: 'Berlin — Hybrid', type: 'Full-time', description: 'Create memorable places with a strong sense of story, scale, and atmosphere.' },
  { id: 'technical-artist', title: 'Technical Artist', department: 'Art', location: 'Remote — Europe', type: 'Full-time', description: 'Bridge art and technology to bring ambitious worlds to life.' },
  { id: 'narrative-designer', title: 'Narrative Designer', department: 'Design', location: 'Berlin — Hybrid', type: 'Full-time', description: 'Work with a multidisciplinary team to make story an essential part of play.' },
  { id: 'associate-producer', title: 'Associate Producer', department: 'Production', location: 'Berlin — Hybrid', type: 'Full-time', description: 'Help a talented, kind team find focus and do their best work together.' },
];

const stats = [
  { label: 'Founded', value: 2012, suffix: '' },
  { label: 'People', value: 180, suffix: '+' },
  { label: 'Games shipped', value: 6, suffix: '' },
  { label: 'Players reached', value: 32, suffix: 'M' },
];

const artClass = {
  'ashen-tide': 'from-cyan-950 via-slate-900 to-blue-950',
  'iron-kingdom': 'from-amber-950 via-stone-900 to-red-950',
  'hollow-star': 'from-violet-950 via-indigo-950 to-slate-950',
  wildline: 'from-emerald-950 via-teal-950 to-slate-950',
  'glass-harbor': 'from-rose-950 via-slate-900 to-fuchsia-950',
  northbound: 'from-blue-950 via-slate-800 to-sky-950',
};

function Icon({ name, className = 'h-5 w-5' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></>,
    plus: <><path d="M12 5v14" /><path d="M5 12h14" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m8 5 12 7-12 7z" fill="currentColor" />,
    up: <><path d="m18 15-6-6-6 6" /><path d="M12 9v12" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    x: <><path d="M4 4l16 16" /><path d="M20 4 4 20" /></>,
  };
  return <svg {...common}>{paths[name] || paths.globe}</svg>;
}

function Logo({ small = false }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="Northstar Interactive home">
      <span className={`relative grid ${small ? 'h-8 w-8' : 'h-10 w-10'} place-items-center`}>
        <span className="absolute inset-0 rotate-45 border border-cyan-300/80 transition-transform duration-300 group-hover:rotate-[135deg]" />
        <span className="h-2 w-2 rotate-45 bg-cyan-300" />
      </span>
      <span className="text-sm font-black uppercase tracking-[0.22em] text-white">Northstar<span className="hidden text-slate-400 sm:inline"> Interactive</span></span>
    </a>
  );
}

function Artwork({ game, large = false, label }) {
  const art = game?.art || 'from-cyan-950 via-slate-900 to-violet-950';
  const symbol = game?.symbol || 'NORTHSTAR';
  return (
    <div className={`group/art relative isolate overflow-hidden bg-gradient-to-br ${art} ${large ? 'h-64 sm:h-80' : 'aspect-[16/10]'}`} role="img" aria-label={label || `${game?.title || 'Game'} key art`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_36%,rgba(103,232,249,0.22),transparent_38%),radial-gradient(ellipse_at_80%_80%,rgba(255,255,255,0.08),transparent_32%)]" />
      <div className="absolute -right-10 top-0 h-3/4 w-2/3 rotate-12 border-l border-white/10 bg-white/[0.025] blur-[1px]" />
      <div className="absolute -bottom-16 left-1/4 h-40 w-40 rounded-full border border-white/10 bg-cyan-300/[0.04] blur-sm" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />
      <div className="absolute left-7 top-7 h-14 w-14 rotate-45 border border-white/20 sm:left-10 sm:top-10 sm:h-20 sm:w-20">
        <div className="absolute inset-2 border border-cyan-200/20" />
      </div>
      <div className="absolute right-8 top-8 text-[9px] font-semibold uppercase tracking-[0.5em] text-white/40">{symbol} / 01</div>
      {large && <div className="absolute bottom-10 left-8 text-[10px] uppercase tracking-[0.32em] text-cyan-100/70 sm:left-12">A Northstar original</div>}
      {!large && <div className="absolute bottom-0 left-0 p-5"><span className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/70">{symbol}</span></div>}
    </div>
  );
}

function Reveal({ children, reducedMotion = false, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reducedMotion);
  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return undefined;
    }
    const node = ref.current;
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);
  return <div ref={ref} className={`${reducedMotion ? '' : `transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-cyan-300">{eyebrow}</p>
      <h2 className={`text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl ${light ? 'text-slate-950' : 'text-white'}`}>{title}</h2>
      {copy && <p className={`mt-5 max-w-xl text-base leading-7 ${light ? 'text-slate-600' : 'text-slate-400'}`}>{copy}</p>}
    </div>
  );
}

function GameModal({ game, onClose, onWishlist }) {
  const [lightbox, setLightbox] = useState(-1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (lightbox >= 0) {
        if (event.key === 'Escape') setLightbox(-1);
        if (event.key === 'ArrowRight') setLightbox((lightbox + 1) % game.screenshots.length);
        if (event.key === 'ArrowLeft') setLightbox((lightbox - 1 + game.screenshots.length) % game.screenshots.length);
      } else if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [game, lightbox, onClose]);

  const release = game.status === 'released';
  return (
    <>
      <div className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-slate-950/90 p-3 backdrop-blur-md sm:p-8" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
        <div className="my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#10151f] shadow-2xl shadow-black/50">
          <div className="relative">
            <Artwork game={game} large />
            <button type="button" onClick={onClose} aria-label="Close game details" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-slate-950/60 text-white transition hover:bg-cyan-300 hover:text-slate-950"><Icon name="close" /></button>
            <div className="absolute bottom-7 left-7 sm:bottom-10 sm:left-12">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200">{game.genre}</p>
              <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">{game.title}</h2>
            </div>
          </div>
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${release ? 'bg-emerald-300/10 text-emerald-300' : 'bg-cyan-300/10 text-cyan-200'}`}>{release ? 'Released' : 'In Development'}</span>
                <span className="text-xs text-slate-500">{game.releaseDate}</span>
              </div>
              <p className="mb-6 text-lg font-medium text-slate-200">{game.tagline}</p>
              {game.description.map((paragraph) => <p key={paragraph} className="mb-4 text-sm leading-7 text-slate-400">{paragraph}</p>)}
              <h3 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white">What to expect</h3>
              <ul className="space-y-3">
                {game.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-slate-300"><span className="mt-0.5 text-cyan-300"><Icon name="check" className="h-4 w-4" /></span>{feature}</li>)}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Available on</p>
              <div className="mb-8 flex flex-wrap gap-2">{game.platforms.map((platform) => <span key={platform} className="rounded-md border border-white/10 px-3 py-2 text-xs text-slate-300">{platform}</span>)}</div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">A closer look</p>
              <div className="grid grid-cols-2 gap-3">
                {game.screenshots.map((shot, index) => (
                  <button type="button" key={shot} onClick={() => { setLoaded(false); setLightbox(index); }} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-cyan-950 text-left">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(103,232,249,0.22),transparent_55%)] transition duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-white/80">{shot}</span>
                  </button>
                ))}
              </div>
              <button type="button" onClick={() => release ? onWishlist(game, 'official') : onWishlist(game, 'wishlist')} className="mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-cyan-300 px-5 py-4 text-xs font-black uppercase tracking-[0.17em] text-slate-950 transition hover:bg-cyan-200">
                {release ? 'Visit Official Site' : 'Wishlist Now'} <Icon name="arrow" className="h-4 w-4" />
              </button>
              {release && <div className="mt-4 flex justify-center gap-3">{['Steam', 'PlayStation', 'Xbox'].filter((store) => game.platforms.includes(store === 'Steam' ? 'PC' : store)).map((store) => <span key={store} className="rounded border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-slate-400">{store}</span>)}</div>}
            </div>
          </div>
        </div>
      </div>
      {lightbox >= 0 && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setLightbox(-1); }}>
          <button type="button" onClick={() => setLightbox(-1)} aria-label="Close gallery" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10"><Icon name="close" /></button>
          <button type="button" aria-label="Previous image" onClick={() => { setLoaded(false); setLightbox((lightbox - 1 + game.screenshots.length) % game.screenshots.length); }} className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 sm:left-8"><span className="rotate-180"><Icon name="chevron" /></span></button>
          <div className={`relative flex aspect-video w-full max-w-5xl items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${artClass[game.id] || 'from-slate-800 to-slate-950'}`}>
            {!loaded && <span className="absolute z-10 animate-pulse text-[10px] uppercase tracking-[0.25em] text-white/60">Loading image</span>}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(103,232,249,0.25),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-6 left-6 z-10 text-sm font-bold uppercase tracking-[0.22em] text-white sm:bottom-10 sm:left-10">{game.screenshots[lightbox]}</p>
            <button type="button" aria-label="Finish loading preview" className="absolute inset-0" onClick={() => setLoaded(true)} onFocus={() => setLoaded(true)} />
          </div>
          <button type="button" aria-label="Next image" onClick={() => { setLoaded(false); setLightbox((lightbox + 1) % game.screenshots.length); }} className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 sm:right-8"><Icon name="chevron" /></button>
          <p className="absolute bottom-5 text-[10px] uppercase tracking-[0.2em] text-white/50">{lightbox + 1} / {game.screenshots.length} · Use arrow keys to navigate</p>
        </div>
      )}
    </>
  );
}

function Field({ label, name, value, onChange, onBlur, error, type = 'text', placeholder, required = true, as = 'input', options = [], rows = 5 }) {
  const common = {
    id: name,
    name,
    value,
    onChange,
    onBlur,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${name}-error` : undefined,
    className: `mt-2 w-full rounded-md border bg-[#0b1018] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 ${error ? 'border-red-400/70' : 'border-white/10'}`,
  };
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold text-slate-300">{label}{required && <span className="text-cyan-300"> *</span>}</label>
      {as === 'textarea' ? <textarea {...common} rows={rows} placeholder={placeholder} /> : as === 'select' ? <select {...common}>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select> : <input {...common} type={type} placeholder={placeholder} />}
      {error && <p id={`${name}-error`} className="mt-1.5 text-xs text-red-300">{error}</p>}
    </div>
  );
}

function MessageForm({ mode = 'contact', initialRole = '', onClose }) {
  const isApply = mode === 'apply';
  const [values, setValues] = useState({ name: '', email: '', topic: 'General', message: '', role: initialRole, url: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => setValues((current) => ({ ...current, role: initialRole })), [initialRole]);

  const validate = (key, current = values) => {
    if (key === 'name' && !current.name.trim()) return 'Please enter your name.';
    if (key === 'email') {
      if (!current.email.trim()) return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(current.email)) return 'Please enter a valid email address.';
    }
    if (key === 'message' && !current.message.trim()) return isApply ? 'Please add a short cover note.' : 'Please write us a message.';
    if (key === 'role' && isApply && !current.role.trim()) return 'Please tell us which role interests you.';
    if (key === 'url' && current.url.trim() && !/^https?:\/\/.+\..+/.test(current.url)) return 'Please enter a valid URL starting with https://';
    return '';
  };

  const update = (key, value) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors((previous) => ({ ...previous, [key]: validate(key, next) }));
  };

  const blur = (key) => {
    setTouched((previous) => ({ ...previous, [key]: true }));
    setErrors((previous) => ({ ...previous, [key]: validate(key) }));
  };

  const submit = (event) => {
    event.preventDefault();
    const keys = isApply ? ['name', 'email', 'role', 'url', 'message'] : ['name', 'email', 'message'];
    const nextErrors = {};
    keys.forEach((key) => { nextErrors[key] = validate(key); });
    setErrors(nextErrors);
    setTouched(Object.fromEntries(keys.map((key) => [key, true])));
    if (Object.values(nextErrors).some(Boolean)) return;
    setSending(true);
    window.setTimeout(() => { setSending(false); setSent(true); }, 850);
  };

  if (sent) return (
    <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-8 text-center">
      <span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-cyan-300/10 text-cyan-300"><Icon name="check" /></span>
      <h3 className="text-xl font-bold text-white">Thanks — we’ll be in touch!</h3>
      <p className="mt-2 text-sm text-slate-400">Your message is on its way. We appreciate you reaching out.</p>
      <button type="button" onClick={() => { setSent(false); setValues({ name: '', email: '', topic: 'General', message: '', role: initialRole, url: '' }); setTouched({}); setErrors({}); }} className="mt-5 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white">Send another</button>
      {onClose && <button type="button" onClick={onClose} className="ml-5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white">Close</button>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" value={values.name} onChange={(event) => update('name', event.target.value)} onBlur={() => blur('name')} error={errors.name} placeholder="Alex Morgan" />
        <Field label="Email address" name="email" value={values.email} onChange={(event) => update('email', event.target.value)} onBlur={() => blur('email')} error={errors.email} type="email" placeholder="alex@example.com" />
      </div>
      {isApply ? (
        <>
          <Field label="Role you’re interested in" name="role" value={values.role} onChange={(event) => update('role', event.target.value)} onBlur={() => blur('role')} error={errors.role} placeholder="e.g. Senior Gameplay Engineer" />
          <Field label="Portfolio or LinkedIn" name="url" value={values.url} onChange={(event) => update('url', event.target.value)} onBlur={() => blur('url')} error={errors.url} required={false} placeholder="https://" />
        </>
      ) : (
        <Field label="What can we help with?" name="topic" value={values.topic} onChange={(event) => update('topic', event.target.value)} onBlur={() => blur('topic')} as="select" options={[{ value: 'General', label: 'General' }, { value: 'Press', label: 'Press' }, { value: 'Business', label: 'Business' }, { value: 'Support', label: 'Support' }]} />
      )}
      <Field label={isApply ? 'A little about you' : 'Your message'} name="message" value={values.message} onChange={(event) => update('message', event.target.value)} onBlur={() => blur('message')} error={errors.message} as="textarea" placeholder={isApply ? 'Tell us what you love making…' : 'How can we help?'} />
      <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-3 rounded-md bg-cyan-300 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-70">
        {sending ? 'Sending…' : isApply ? 'Send application' : 'Send message'} {!sending && <Icon name="arrow" className="h-4 w-4" />}
      </button>
      <p className="text-center text-[10px] text-slate-600">Your information is only used to respond to your message.</p>
    </form>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sort, setSort] = useState('newest');
  const [selectedGame, setSelectedGame] = useState(null);
  const [careerFilter, setCareerFilter] = useState('All');
  const [applicationRole, setApplicationRole] = useState('');
  const [article, setArticle] = useState(null);
  const [newsCount, setNewsCount] = useState(4);
  const [backToTop, setBackToTop] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    try { return localStorage.getItem('vibe-studio-reduced-motion') === 'true'; } catch { return false; }
  });
  const [statsVisible, setStatsVisible] = useState(false);
  const [statValues, setStatValues] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroReady(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
      setBackToTop(window.scrollY > window.innerHeight);
      const ids = ['home', 'games', 'studio', 'news', 'careers', 'contact'];
      let current = 'home';
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const menu = menuRef.current;
    const focusable = () => menu?.querySelectorAll('a, button');
    focusable()?.[0]?.focus();
    const trap = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
      if (event.key === 'Tab') {
        const items = Array.from(focusable() || []);
        if (!items.length) return;
        if (event.shiftKey && document.activeElement === items[0]) {
          event.preventDefault();
          items[items.length - 1].focus();
        } else if (!event.shiftKey && document.activeElement === items[items.length - 1]) {
          event.preventDefault();
          items[0].focus();
        }
      }
    };
    document.addEventListener('keydown', trap);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', trap);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!statsRef.current || !('IntersectionObserver' in window)) {
      setStatsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return undefined;
    if (reducedMotion) {
      setStatValues(stats.map((stat) => stat.value));
      return undefined;
    }
    let frame;
    const start = performance.now();
    const duration = 1500;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStatValues(stats.map((stat) => Math.round(stat.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [statsVisible, reducedMotion]);

  const filters = ['Released', 'In Development', ...Array.from(new Set(games.map((game) => game.genre)))];
  const visibleGames = useMemo(() => {
    let result = games.filter((game) => {
      const statuses = selectedFilters.filter((filter) => filter === 'Released' || filter === 'In Development');
      const genres = selectedFilters.filter((filter) => !['Released', 'In Development'].includes(filter));
      const statusMatch = !statuses.length || statuses.some((status) => game.status === (status === 'Released' ? 'released' : 'in-development'));
      return statusMatch && (!genres.length || genres.includes(game.genre));
    });
    result = [...result].sort((a, b) => sort === 'a-z' ? a.title.localeCompare(b.title) : games.findIndex((game) => game.id === a.id) - games.findIndex((game) => game.id === b.id));
    return result;
  }, [selectedFilters, sort]);

  const toggleFilter = (filter) => setSelectedFilters((current) => current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]);
  const goTo = (id) => {
    setMobileOpen(false);
    if (id === 'news') setArticle(null);
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };
  const openApplication = (role = '') => {
    setApplicationRole(role);
    document.getElementById('application-dialog')?.showModal();
  };
  const closeApplication = () => document.getElementById('application-dialog')?.close();
  const toggleMotion = () => {
    const next = !reducedMotion;
    setReducedMotion(next);
    try { localStorage.setItem('vibe-studio-reduced-motion', String(next)); } catch {}
  };
  const signup = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletter)) {
      setNewsletterError('Enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterDone(true);
  };

  const openNews = (post) => {
    setArticle(post);
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const navLinks = [
    { id: 'games', label: 'Games' },
    { id: 'studio', label: 'Studio' },
    { id: 'careers', label: 'Careers' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0e14] font-sans text-white selection:bg-cyan-300 selection:text-slate-950">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/5 bg-[#0b0e14]/95 shadow-xl shadow-black/20 backdrop-blur-xl' : 'bg-gradient-to-b from-black/35 to-transparent'}`}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => <button type="button" key={link.id} onClick={() => goTo(link.id)} className={`text-[10px] font-bold uppercase tracking-[0.2em] transition hover:text-cyan-300 ${activeSection === link.id ? 'text-cyan-300' : 'text-slate-300'}`}>{link.label}</button>)}
            <button type="button" onClick={() => goTo('careers')} className="rounded border border-cyan-300/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950">Join us <Icon name="arrow" className="ml-2 inline h-3 w-3" /></button>
          </nav>
          <button type="button" className="grid h-11 w-11 place-items-center text-white md:hidden" aria-label="Open navigation menu" onClick={() => setMobileOpen(true)}><Icon name="menu" className="h-6 w-6" /></button>
        </div>
      </header>

      {mobileOpen && (
        <div ref={menuRef} className="fixed inset-0 z-[70] flex flex-col bg-[#0b0e14] px-7 pb-10 pt-5 md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex items-center justify-between"><Logo /><button type="button" autoFocus onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white"><Icon name="close" /></button></div>
          <nav className="my-auto flex flex-col gap-5" aria-label="Mobile navigation links">{navLinks.map((link, index) => <button type="button" key={link.id} onClick={() => goTo(link.id)} className="flex items-center justify-between border-b border-white/10 py-4 text-left text-3xl font-black uppercase tracking-tight text-white"><span><span className="mr-4 text-xs text-cyan-300">0{index + 1}</span>{link.label}</span><Icon name="arrow" className="h-5 w-5 text-cyan-300" /></button>)}</nav>
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate-600">Independent by nature. Northstar by name.</p>
        </div>
      )}

      {!article ? (
        <main>
          <section id="home" className="relative flex min-h-[760px] h-screen max-h-[1080px] items-center overflow-hidden bg-[#090d15]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(8,145,178,0.18),transparent_34%),radial-gradient(ellipse_at_28%_70%,rgba(30,64,175,0.16),transparent_35%),linear-gradient(120deg,#090d15_18%,#101a2b_52%,#0b0e14_100%)]" />
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-[68%] top-[18%] h-52 w-52 rounded-full border border-cyan-200/20 shadow-[0_0_80px_rgba(34,211,238,0.14)] sm:h-80 sm:w-80" />
              <div className="absolute left-[71%] top-[22%] h-40 w-40 rounded-full border border-cyan-100/10 sm:h-64 sm:w-64" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(transparent_96%,rgba(103,232,249,0.15)_97%),linear-gradient(90deg,transparent_96%,rgba(103,232,249,0.12)_97%)] bg-[size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent)]" />
              <span className="absolute left-[12%] top-[22%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_3px_rgba(103,232,249,0.6)]" />
              <span className="absolute left-[48%] top-[31%] h-1 w-1 rounded-full bg-white/80 shadow-[0_0_12px_3px_rgba(255,255,255,0.3)]" />
              <span className="absolute left-[80%] top-[61%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_3px_rgba(103,232,249,0.6)]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#090d15] via-[#090d15]/70 to-transparent" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8">
              <div className="max-w-3xl">
                <div className={`mb-8 flex items-center gap-4 transition-all duration-700 ${heroReady ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  <Logo />
                  <span className="h-px w-12 bg-cyan-300/50" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-200/80">Independent game studio · Berlin</span>
                </div>
                <p className={`mb-5 text-[10px] font-bold uppercase tracking-[0.36em] text-cyan-300 transition-all duration-700 delay-100 ${heroReady ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>We make worlds worth getting lost in</p>
                <h1 className={`text-5xl font-black uppercase leading-[0.94] tracking-[-0.045em] text-white transition-all duration-700 delay-200 sm:text-7xl lg:text-8xl ${heroReady ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>Stories that<br /><span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.75)]">stay with you.</span></h1>
                <p className={`mt-7 max-w-lg text-base leading-7 text-slate-300 transition-all duration-700 delay-300 sm:text-lg ${heroReady ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>We are an independent team building ambitious, deeply human games for players everywhere.</p>
                <div className={`mt-9 flex flex-col gap-3 transition-all duration-700 delay-500 sm:flex-row ${heroReady ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  <button type="button" onClick={() => goTo('games')} className="inline-flex items-center justify-center gap-3 rounded-md bg-cyan-300 px-6 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">Explore our games <Icon name="arrow" className="h-4 w-4" /></button>
                  <button type="button" onClick={() => goTo('careers')} className="inline-flex items-center justify-center gap-3 rounded-md border border-white/20 bg-white/5 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/10">Join the team <Icon name="arrow" className="h-4 w-4 text-cyan-300" /></button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-white/40 md:flex"><span>Scroll to explore</span><span className="h-12 w-px bg-gradient-to-b from-cyan-300 to-transparent" /></div>
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
          </section>

          <section id="games" className="scroll-mt-20 bg-[#0b0e14] px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-7xl">
              <Reveal reducedMotion={reducedMotion}>
                <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                  <SectionHeading eyebrow="Worlds to wander" title="Made to be played." copy="Big feelings. Unforgettable places. Find the world you want to call your own." />
                  <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <label className="sr-only" htmlFor="game-sort">Sort games</label>
                    <select id="game-sort" value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-md border border-white/10 bg-[#10151f] px-4 py-3 text-xs text-slate-300 outline-none focus:border-cyan-300"><option value="newest">Sort: Newest</option><option value="a-z">Sort: A–Z</option></select>
                    {selectedFilters.length > 0 && <button type="button" onClick={() => setSelectedFilters([])} className="text-left text-xs font-semibold text-cyan-300 hover:text-white">Clear filters ×</button>}
                  </div>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setSelectedFilters([])} className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition ${selectedFilters.length === 0 ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'}`}>All</button>
                  {filters.map((filter) => <button type="button" key={filter} aria-pressed={selectedFilters.includes(filter)} onClick={() => toggleFilter(filter)} className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition ${selectedFilters.includes(filter) ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'}`}>{filter}</button>)}
                </div>
                <p className="mb-5 text-xs text-slate-500">Showing <span className="text-white">{visibleGames.length}</span> of {games.length} games</p>
                {visibleGames.length ? (
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleGames.map((game) => (
                      <article key={game.id} className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#10151f] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]">
                        <button type="button" onClick={() => setSelectedGame(game)} className="block w-full text-left">
                          <Artwork game={game} />
                          <div className="p-5 sm:p-6">
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">{game.genre}</span>
                              <span className={`rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider ${game.status === 'released' ? 'bg-white/5 text-slate-400' : 'bg-cyan-300/10 text-cyan-200'}`}>{game.status === 'released' ? 'Released' : 'In development'}</span>
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight text-white">{game.title}</h3>
                            <p className="mt-2 text-sm text-slate-400">{game.tagline}</p>
                            <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                              <div className="flex gap-2">{game.platforms.map((platform) => <span key={platform} title={platform} className="rounded border border-white/10 px-2 py-1 text-[8px] uppercase tracking-wider text-slate-500">{platform === 'PlayStation' ? 'PS' : platform === 'Xbox' ? 'XB' : platform === 'Switch' ? 'SW' : 'PC'}</span>)}</div>
                              <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white transition group-hover:text-cyan-300">Discover <Icon name="arrow" className="h-3.5 w-3.5" /></span>
                            </div>
                          </div>
                        </button>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-white/10 py-20 text-center"><p className="text-sm text-slate-400">No games match those filters yet.</p><button type="button" onClick={() => setSelectedFilters([])} className="mt-4 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white">Clear filters</button></div>
                )}
              </Reveal>
            </div>
          </section>

          <section id="studio" className="scroll-mt-20 border-y border-white/[0.06] bg-[#0e131c] px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
              <Reveal reducedMotion={reducedMotion}>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-cyan-300">A little about us</p>
                <h2 className="max-w-xl text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-6xl">Small enough to care. <span className="text-slate-500">Big enough to dream.</span></h2>
                <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">Northstar is an independent game studio founded on a simple idea: the best games make you feel something. Since 2012, we’ve brought together curious minds from all over the world to create unforgettable places and the stories that live inside them.</p>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">We build with patience, play with purpose, and believe that a healthy team makes better work. Our games are made by people who care deeply about craft—and about each other.</p>
                <button type="button" onClick={() => goTo('careers')} className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition hover:gap-5 hover:text-white">Get to know us <Icon name="arrow" className="h-4 w-4" /></button>
              </Reveal>
              <Reveal reducedMotion={reducedMotion}>
                <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, index) => <div key={stat.label} className="rounded-xl border border-white/[0.07] bg-[#121923] p-5 sm:p-8"><p className="text-3xl font-black tracking-tight text-white sm:text-5xl">{statValues[index]}<span className="text-cyan-300">{stat.suffix}</span></p><p className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-[10px]">{stat.label}</p></div>)}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="bg-[#0b0e14] px-5 py-24 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-7xl">
              <Reveal reducedMotion={reducedMotion}>
                <SectionHeading eyebrow="How we make things" title="Good games. Good people." copy="A few things we believe in, and try to get right every day." />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ['01', 'Player first', 'We make games for the people who play them. Listening is part of the craft.'],
                    ['02', 'Craft over crunch', 'Ambitious work takes time. We make room for the work and the people doing it.'],
                    ['03', 'Worlds worth living in', 'Details matter. Every place should feel like it was here before you arrived.'],
                    ['04', 'Better, together', 'Different perspectives make richer worlds. Everyone has a seat at our table.'],
                  ].map(([number, title, copy]) => <div key={title} className="rounded-xl border border-white/[0.07] bg-[#10151f] p-6 transition hover:border-cyan-300/25 sm:p-7"><span className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">{number} /</span><h3 className="mt-8 text-lg font-black uppercase tracking-tight text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></div>)}
                </div>
              </Reveal>
            </div>
          </section>

          <section id="news" className="scroll-mt-20 border-y border-white/[0.06] bg-[#0e131c] px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-7xl">
              <Reveal reducedMotion={reducedMotion}>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <SectionHeading eyebrow="Dispatches from the studio" title="What’s happening." copy="New worlds, updates from our teams, and a few things we think you should know." />
                  {newsCount < newsPosts.length && <button type="button" onClick={() => setNewsCount(newsPosts.length)} className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300 hover:text-white">View all news <Icon name="arrow" className="h-4 w-4" /></button>}
                </div>
                {newsPosts.length === 0 ? <div className="rounded-xl border border-dashed border-white/10 py-16 text-center text-sm text-slate-400">No news yet — big things are coming.</div> : (
                  <div className="grid gap-4 lg:grid-cols-2">
                    {newsPosts.slice(0, newsCount).map((post, index) => (
                      <button type="button" key={post.id} onClick={() => openNews(post)} className={`group rounded-xl border border-white/[0.07] bg-[#111720] p-6 text-left transition hover:border-cyan-300/30 hover:bg-[#141c27] sm:p-8 ${index === 0 ? 'lg:row-span-2 lg:flex lg:flex-col lg:justify-between' : ''}`}>
                        <div>
                          <div className="mb-5 flex flex-wrap items-center gap-3"><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">{post.category}</span><span className="h-1 w-1 rounded-full bg-slate-600" /><span className="text-[10px] text-slate-500">{post.date}</span></div>
                          <h3 className={`max-w-xl font-black uppercase leading-tight tracking-tight text-white transition group-hover:text-cyan-100 ${index === 0 ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'}`}>{post.title}</h3>
                          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">{post.excerpt}</p>
                        </div>
                        <span className="mt-7 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500 transition group-hover:text-cyan-300">Read story <Icon name="arrow" className="h-3.5 w-3.5" /></span>
                      </button>
                    ))}
                  </div>
                )}
              </Reveal>
            </div>
          </section>

          <section id="careers" className="scroll-mt-20 bg-[#0b0e14] px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto max-w-7xl">
              <Reveal reducedMotion={reducedMotion}>
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                  <div>
                    <SectionHeading eyebrow="Make something meaningful" title="Your next great story starts here." copy="We’re building a kind, curious team that cares about the work and the people behind it. Come make something that matters." />
                    <p className="text-sm leading-7 text-slate-500">A thoughtful, flexible studio. Time to do your best work. People who want to see you do well.</p>
                  </div>
                  <div>
                    <div className="mb-5 flex flex-wrap gap-2">{['All', 'Engineering', 'Art', 'Design', 'Production'].map((department) => <button type="button" key={department} onClick={() => setCareerFilter(department)} className={`rounded-full border px-3.5 py-2 text-[9px] font-bold uppercase tracking-wider transition ${careerFilter === department ? 'border-cyan-300 bg-cyan-300 text-slate-950' : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'}`}>{department}</button>)}</div>
                    <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                      {jobs.filter((job) => careerFilter === 'All' || job.department === careerFilter).map((job) => <div key={job.id} className="group flex flex-col gap-4 py-5 transition sm:flex-row sm:items-center sm:justify-between sm:py-6">
                        <div><h3 className="text-base font-bold text-white transition group-hover:text-cyan-200">{job.title}</h3><p className="mt-1 text-xs text-slate-500">{job.department} <span className="mx-1.5 text-slate-700">·</span>{job.location} <span className="mx-1.5 text-slate-700">·</span>{job.type}</p></div>
                        <button type="button" onClick={() => openApplication(job.title)} className="inline-flex items-center gap-2 self-start text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition hover:text-white sm:self-auto">Apply <Icon name="arrow" className="h-3.5 w-3.5" /></button>
                      </div>)}
                    </div>
                    {jobs.filter((job) => careerFilter === 'All' || job.department === careerFilter).length === 0 && <div className="rounded-xl border border-dashed border-white/10 py-12 text-center"><p className="text-sm text-slate-400">No open roles in this department right now.</p><button type="button" onClick={() => openApplication('Talent pool')} className="mt-4 text-xs font-bold uppercase tracking-wider text-cyan-300 hover:text-white">Join our talent pool <Icon name="arrow" className="ml-1 inline h-3 w-3" /></button></div>}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="contact" className="scroll-mt-20 border-t border-white/[0.06] bg-[#0e131c] px-5 py-24 sm:px-8 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
              <Reveal reducedMotion={reducedMotion}>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.34em] text-cyan-300">Get in touch</p>
                <h2 className="text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-6xl">Have a good one for us?</h2>
                <p className="mt-6 max-w-md text-base leading-7 text-slate-400">Whether you’re a player with a question, a journalist looking for a story, or a future collaborator—we’d love to hear from you.</p>
                <div className="mt-10 space-y-6">
                  <a href="mailto:hello@northstar.games" className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-cyan-300"><span className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300"><Icon name="mail" /></span>hello@northstar.games</a>
                  <div className="flex items-center gap-4 text-sm text-slate-300"><span className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-cyan-300"><Icon name="pin" /></span>Friedrichstraße 68, 10117 Berlin, Germany</div>
                  <div className="flex gap-3 pt-2"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Northstar on LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"><Icon name="linkedin" className="h-4 w-4" /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Northstar on Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"><Icon name="instagram" className="h-4 w-4" /></a><a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Northstar on X" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"><Icon name="x" className="h-4 w-4" /></a></div>
                </div>
              </Reveal>
              <Reveal reducedMotion={reducedMotion}>
                <div className="rounded-xl border border-white/[0.07] bg-[#111720] p-5 sm:p-8"><h3 className="mb-6 text-lg font-black uppercase tracking-tight text-white">Send us a message</h3><MessageForm /></div>
              </Reveal>
            </div>
          </section>
        </main>
      ) : (
        <main className="min-h-screen px-5 pb-20 pt-32 sm:px-8">
          <article className="mx-auto max-w-[680px]">
            <button type="button" onClick={() => { setArticle(null); window.scrollTo({ top: document.getElementById('news')?.offsetTop || 0, behavior: reducedMotion ? 'auto' : 'smooth' }); }} className="mb-12 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300 hover:text-white">← Back to news</button>
            <div className="mb-5 flex items-center gap-3"><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">{article.category}</span><span className="h-1 w-1 rounded-full bg-slate-600" /><span className="text-xs text-slate-500">{article.date}</span></div>
            <h1 className="text-4xl font-black uppercase leading-[1.03] tracking-tight text-white sm:text-6xl">{article.title}</h1>
            <p className="mt-7 border-b border-white/10 pb-8 text-lg leading-8 text-slate-300">{article.excerpt}</p>
            <div className="space-y-6 py-8">{article.body.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-slate-400">{paragraph}</p>)}</div>
            <div className="mt-12 border-t border-white/10 pt-8"><p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Keep exploring</p><div className="grid gap-3 sm:grid-cols-2">{newsPosts.filter((post) => post.id !== article.id).slice(0, 2).map((post) => <button type="button" key={post.id} onClick={() => openNews(post)} className="rounded-lg border border-white/10 bg-[#10151f] p-5 text-left transition hover:border-cyan-300/30"><span className="text-[9px] font-bold uppercase tracking-wider text-cyan-300">{post.category}</span><h2 className="mt-3 text-sm font-bold leading-5 text-white">{post.title}</h2><p className="mt-2 text-[10px] text-slate-500">{post.date}</p></button>)}</div></div>
          </article>
        </main>
      )}

      <footer className="border-t border-white/[0.07] bg-[#080b10] px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div><Logo /><p className="mt-5 max-w-xs text-xs leading-6 text-slate-500">Independent by nature. Northstar by name. Making worlds worth getting lost in since 2012.</p><div className="mt-5 flex gap-2"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Northstar on LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 hover:border-cyan-300 hover:text-cyan-300"><Icon name="linkedin" className="h-4 w-4" /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Northstar on Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 hover:border-cyan-300 hover:text-cyan-300"><Icon name="instagram" className="h-4 w-4" /></a><a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Northstar on X" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 hover:border-cyan-300 hover:text-cyan-300"><Icon name="x" className="h-4 w-4" /></a></div></div>
            <div><p className="mb-5 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-500">Explore</p><div className="grid gap-3">{navLinks.map((link) => <button type="button" key={link.id} onClick={() => goTo(link.id)} className="w-fit text-xs text-slate-400 transition hover:text-cyan-300">{link.label}</button>)}</div></div>
            <div><p className="mb-5 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-500">The small print</p><div className="grid gap-3"><button type="button" onClick={() => alert('Our privacy policy is being prepared. Please contact hello@northstar.games with questions.')} className="w-fit text-xs text-slate-400 hover:text-cyan-300">Privacy</button><button type="button" onClick={() => alert('Our terms are being prepared. Please contact hello@northstar.games with questions.')} className="w-fit text-xs text-slate-400 hover:text-cyan-300">Terms</button><label className="mt-2 flex cursor-pointer items-center gap-3 text-xs text-slate-400"><input type="checkbox" checked={reducedMotion} onChange={toggleMotion} className="h-4 w-4 accent-cyan-300" />Reduce motion</label></div></div>
            <div><p className="mb-3 text-[9px] font-bold uppercase tracking-[0.24em] text-slate-500">Signals from Northstar</p><p className="mb-4 text-xs leading-5 text-slate-400">Occasional notes from our worlds. No noise, just the good stuff.</p>{newsletterDone ? <p className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-3 text-xs text-cyan-200">You’re on the list. See you out there.</p> : <form onSubmit={signup} noValidate><label htmlFor="newsletter-email" className="sr-only">Email address</label><div className="flex"><input id="newsletter-email" type="email" value={newsletter} onChange={(event) => { setNewsletter(event.target.value); setNewsletterError(''); }} placeholder="Your email address" className="min-w-0 flex-1 rounded-l-md border border-white/10 bg-[#10151f] px-3 py-3 text-xs text-white outline-none placeholder:text-slate-600 focus:border-cyan-300" /><button type="submit" aria-label="Sign up for newsletter" className="grid w-12 place-items-center rounded-r-md bg-cyan-300 text-slate-950 transition hover:bg-cyan-200"><Icon name="arrow" className="h-4 w-4" /></button></div>{newsletterError && <p className="mt-2 text-[10px] text-red-300">{newsletterError}</p>}</form>}</div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-6 text-[9px] uppercase tracking-[0.15em] text-slate-600 sm:flex-row"><p>© {new Date().getFullYear()} Northstar Interactive. All rights reserved.</p><p>Made with care in Berlin <span className="text-cyan-300">✳</span></p></div>
        </div>
      </footer>

      {backToTop && <button type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })} className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-cyan-300/30 bg-[#101720]/90 text-cyan-200 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-slate-950"><Icon name="up" /></button>}

      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} onWishlist={(game, type) => window.alert(type === 'wishlist' ? `${game.title} is on your wishlist. Thanks for your interest!` : `Thanks for exploring ${game.title}. The official game page is coming soon.`)} />}

      <dialog id="application-dialog" className="m-auto w-[calc(100%-24px)] max-w-2xl rounded-2xl border border-white/10 bg-[#10151f] p-0 text-white backdrop:bg-black/80 backdrop:backdrop-blur-sm">
        <div className="flex items-start justify-between border-b border-white/10 p-6 sm:p-8"><div><p className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-300">Careers at Northstar</p><h2 className="mt-2 text-2xl font-black uppercase tracking-tight">{applicationRole === 'Talent pool' ? 'Join our talent pool' : 'Let’s make something.'}</h2></div><button type="button" onClick={closeApplication} aria-label="Close application form" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 hover:text-white"><Icon name="close" className="h-4 w-4" /></button></div>
        <div className="p-6 sm:p-8"><MessageForm mode="apply" initialRole={applicationRole} onClose={closeApplication} /></div>
      </dialog>
    </div>
  );
}

export default App;

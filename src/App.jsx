import React, { useMemo, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CatalogSection from './components/CatalogSection';
import TimelineSection from './components/TimelineSection';
import FaqContactSection from './components/FaqContactSection';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import { categoryList, siteMetadata } from './data/jerseys';

export default function App() {
  const [activeEntry, setActiveEntry] = useState(null);

  const allEntries = useMemo(
    () =>
      categoryList.flatMap((category) =>
        category.items.map((item) => ({ item, category }))
      ),
    []
  );

  const handleSelectItem = useCallback((item, category) => {
    setActiveEntry({ item, category });
  }, []);

  const handleOpenHeroShowcase = useCallback(() => {
    const matched =
      allEntries.find((entry) => entry.item.imageUrl === siteMetadata.heroShowcaseImage) ||
      allEntries[0];
    if (matched) {
      setActiveEntry(matched);
    }
  }, [allEntries]);

  const handleNavigateModal = useCallback(
    (direction) => {
      if (!activeEntry || allEntries.length === 0) return;
      const currentIdx = allEntries.findIndex(
        (entry) => entry.item.id === activeEntry.item.id
      );
      const nextIdx = (currentIdx + direction + allEntries.length) % allEntries.length;
      setActiveEntry(allEntries[nextIdx]);
    },
    [activeEntry, allEntries]
  );

  return (
    <div className="bg-alfath-grid min-h-screen overflow-x-clip text-zinc-900">
      <Navbar />

      <main className="overflow-x-hidden">
        <HeroSection onOpenShowcase={handleOpenHeroShowcase} />
        <CatalogSection onSelectItem={handleSelectItem} />
        <TimelineSection />
        <FaqContactSection />
      </main>

      <Footer />

      <LightboxModal
        activeEntry={activeEntry}
        allEntries={allEntries}
        onClose={() => setActiveEntry(null)}
        onNavigate={handleNavigateModal}
      />
    </div>
  );
}

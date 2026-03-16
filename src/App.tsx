import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBasket, 
  Search, 
  Heart, 
  Star, 
  Terminal, 
  Brush, 
  Megaphone, 
  BookOpen, 
  Camera, 
  Home, 
  Store, 
  User, 
  ArrowRight, 
  Download, 
  ChevronRight, 
  LogOut,
  Sparkles,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { Product, View } from './types';
import { PRODUCTS } from './constants';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigateTo = (view: View, product?: Product) => {
    if (product) setSelectedProduct(product);
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-surface pb-24">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-outline-variant/10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <ShoppingBasket className="text-primary w-6 h-6" />
          <h1 className="font-headline font-extrabold text-xl tracking-tight text-on-surface">ClickProfitHub</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <Search className="w-5 h-5 text-on-surface" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <HomeView onProductClick={(p) => navigateTo('detail', p)} />
            </motion.div>
          )}
          {currentView === 'shop' && (
            <motion.div 
              key="shop"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ShopView onProductClick={(p) => navigateTo('detail', p)} />
            </motion.div>
          )}
          {currentView === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ProfileView />
            </motion.div>
          )}
          {currentView === 'detail' && selectedProduct && (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <ProductDetailView 
                product={selectedProduct} 
                onBack={() => navigateTo('home')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-t border-outline-variant/10 px-6 py-3">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <NavButton 
            active={currentView === 'home'} 
            onClick={() => navigateTo('home')} 
            icon={<Home className="w-6 h-6" />} 
            label="Home" 
          />
          <NavButton 
            active={currentView === 'shop'} 
            onClick={() => navigateTo('shop')} 
            icon={<Store className="w-6 h-6" />} 
            label="Shop" 
          />
          <NavButton 
            active={currentView === 'profile'} 
            onClick={() => navigateTo('profile')} 
            icon={<User className="w-6 h-6" />} 
            label="Profile" 
          />
        </div>
      </nav>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
    >
      <div className={active ? 'fill-current' : ''}>
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
      {active && <motion.div layoutId="nav-indicator" className="w-1 h-1 bg-primary rounded-full mt-0.5" />}
    </button>
  );
}

function HomeView({ onProductClick }: { onProductClick: (p: Product) => void }) {
  const featuredProduct = PRODUCTS.find(p => p.featured) || PRODUCTS[0];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="font-headline text-primary font-bold tracking-widest uppercase text-xs">Premium Assets</p>
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-surface tracking-tighter max-w-2xl leading-[1.1]">
            Curated digital <span className="text-primary italic">excellence</span> for creators.
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-on-surface-variant" />
          </div>
          <input 
            type="text" 
            placeholder="Search software, courses, or ebooks..."
            className="w-full bg-surface-container-high border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-12 py-5 text-on-surface placeholder:text-on-surface-variant transition-all duration-300"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <button className="primary-gradient text-on-primary px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-primary/20">Find</button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div 
          onClick={() => onProductClick(featuredProduct)}
          className="md:col-span-8 relative group overflow-hidden asymmetric-radius bg-surface-container-low aspect-[16/9] cursor-pointer"
        >
          <img 
            src={featuredProduct.image} 
            alt={featuredProduct.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
            <span className="bg-secondary text-on-secondary self-start px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Featured Course</span>
            <h3 className="font-headline text-3xl md:text-4xl text-white font-extrabold mb-2">{featuredProduct.title}</h3>
            <p className="text-white/80 max-w-lg mb-6 line-clamp-2">{featuredProduct.description}</p>
            <button className="bg-white text-primary w-fit px-8 py-3 rounded-full font-bold text-sm uppercase tracking-tighter">Access Now</button>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-secondary-container asymmetric-radius p-6 flex flex-col justify-between h-full">
            <div>
              <Sparkles className="text-secondary w-10 h-10 mb-4" />
              <h4 className="font-headline text-2xl font-extrabold text-on-surface leading-tight">Weekly Creator Bundle</h4>
              <p className="text-on-surface-variant mt-2 text-sm">Get 12 premium icons and UI kits for free this week.</p>
            </div>
            <button className="mt-8 border-2 border-secondary/20 hover:bg-secondary text-secondary hover:text-on-secondary px-6 py-2 rounded-full font-bold text-xs transition-all self-start uppercase">Claim Bundle</button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h3 className="font-headline text-2xl font-bold text-primary">Categories</h3>
          <button className="text-secondary font-bold text-sm hover:underline">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          <CategoryChip icon={<Terminal className="w-5 h-5" />} label="Development" active />
          <CategoryChip icon={<Brush className="w-5 h-5" />} label="Design" />
          <CategoryChip icon={<Megaphone className="w-5 h-5" />} label="Marketing" />
          <CategoryChip icon={<BookOpen className="w-5 h-5" />} label="E-Books" />
          <CategoryChip icon={<Camera className="w-5 h-5" />} label="Assets" />
        </div>
      </section>

      {/* Recent Drops */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="font-headline text-3xl font-extrabold">Recent Drops</h3>
          <div className="h-px flex-1 bg-outline-variant/30"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map(product => (
            <div key={product.id}>
              <ProductCard product={product} onClick={() => onProductClick(product)} />
            </div>
          ))}
        </div>
      </section>

      {/* Promo Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="primary-gradient p-10 asymmetric-radius text-on-primary flex flex-col justify-center space-y-4">
          <h3 className="font-headline text-4xl font-extrabold leading-tight">Become a Top Seller</h3>
          <p className="text-on-primary/80 text-lg max-w-md">Join over 50,000 creators making a living by sharing their digital knowledge and assets.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold w-fit mt-4 hover:bg-surface-container-lowest transition-all">Start Selling Today</button>
        </div>
        <div className="bg-surface-container p-10 asymmetric-radius flex items-center justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-headline text-4xl font-extrabold text-on-surface leading-tight">Elite Membership</h3>
            <p className="text-on-surface-variant text-lg mt-4 max-w-xs">Get unlimited access to all premium content for one monthly price.</p>
            <button className="mt-8 bg-on-surface text-surface px-8 py-3 rounded-full font-bold hover:bg-primary transition-colors">Learn More</button>
          </div>
          <Star className="w-40 h-40 text-primary/10 absolute -right-8 -bottom-8 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>
      </section>
    </div>
  );
}

function ShopView({ onProductClick }: { onProductClick: (p: Product) => void }) {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
          Curated <span className="text-primary italic">Assets</span> <br/> for the Modern Creator.
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          Hand-picked digital products designed to elevate your workflow and aesthetic precision.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          <button className="px-6 py-2.5 rounded-full bg-secondary-container text-secondary font-bold text-sm shadow-sm">All Products</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-all">UI Kits</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-all">3D Assets</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-all">Mockups</button>
          <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-all">Fonts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <div key={product.id}>
              <ProductCard product={product} onClick={() => onProductClick(product)} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="space-y-12">
      {/* User Hero */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-surface-container-low p-8 asymmetric-radius">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-sm">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxSg0coHGR8QAM7CgTyt7X8WUCvPKVHuYxgtCd6XBe1j67uZn2j8XXtYh-vPKxChTm3NBQDPEEPbIY41D6BmE8CFUOfg_VZT8nQfJfPVzVWBOP13b0xNForIGPzUsvrsuRRFrJwX0HSc21fktwUPsKoORpXWHMTn_0i9tlxr8dJs3L-LryTTEczLLsm-fmwBjElcFLWjkxACL3GJo5MyqPEZwjyMj5EqHdHeKTOzwFMWkksdIdz0KyNeHxq9Qo48DbVW7MPBp5EIQ" 
              alt="User Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-0 right-0 primary-gradient p-2 rounded-full border-4 border-surface-container-low text-white">
            <Star className="w-4 h-4 fill-current" />
          </button>
        </div>
        <div className="text-center md:text-left space-y-2">
          <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface">Alex Rivera</h2>
          <p className="text-on-surface-variant font-medium">Pro Curator • Member since 2023</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            <span className="px-3 py-1 bg-secondary-container text-secondary text-xs font-bold rounded-full uppercase">Premium</span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface text-xs font-bold rounded-full uppercase">12 Assets</span>
          </div>
        </div>
        <div className="md:ml-auto">
          <button className="primary-gradient text-on-primary px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20">Edit Profile</button>
        </div>
      </section>

      {/* Library */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-2xl font-bold text-primary">My Library</h3>
          <button className="text-secondary font-bold text-sm flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.slice(4, 7).map(product => (
            <div key={product.id} className="bg-surface-container-lowest asymmetric-radius p-6 flex flex-col gap-4 group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="aspect-square bg-surface-container overflow-hidden asymmetric-radius">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-secondary tracking-widest uppercase">{product.category}</p>
                <h4 className="font-headline font-bold text-lg text-on-surface">{product.title}</h4>
                <button className="w-full mt-4 bg-secondary text-on-secondary py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Account Settings */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-headline text-2xl font-bold text-primary">Account</h3>
          <div className="space-y-2">
            <SettingsItem icon={<User className="w-5 h-5" />} label="Personal Information" />
            <SettingsItem icon={<CreditCard className="w-5 h-5" />} label="Payment Methods" />
            <SettingsItem icon={<ShieldCheck className="w-5 h-5" />} label="Security & Privacy" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-headline text-2xl font-bold text-primary">Help & Support</h3>
          <div className="space-y-2">
            <SettingsItem icon={<HelpCircle className="w-5 h-5" />} label="FAQ & Documentation" />
            <SettingsItem icon={<MessageSquare className="w-5 h-5" />} label="Contact Support" />
          </div>
          <button className="w-full mt-6 p-4 border-2 border-outline-variant/30 rounded-full font-bold text-primary flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
            <LogOut className="w-5 h-5" /> Log Out
          </button>
        </div>
      </section>
    </div>
  );
}

function ProductDetailView({ product, onBack }: { product: Product, onBack: () => void }) {
  return (
    <div className="space-y-12 pb-12">
      <button onClick={onBack} className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold">
        <ChevronRight className="w-5 h-5 rotate-180" /> Back to Market
      </button>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="asymmetric-radius overflow-hidden h-[400px] bg-surface-container-low group relative">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {product.newRelease && (
            <div className="absolute top-6 left-6">
              <span className="bg-secondary-container text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">New Release</span>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-headline text-xl font-medium">{product.category}</p>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
              {product.title}
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="bg-surface-container-lowest p-8 asymmetric-radius shadow-xl shadow-on-surface/5 border border-outline-variant/10">
            <div className="mb-8">
              <span className="text-sm text-on-surface-variant uppercase tracking-widest">Lifetime Access</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-headline text-4xl font-extrabold text-on-surface">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-on-surface-variant line-through text-lg">${product.originalPrice}</span>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full primary-gradient text-on-primary py-4 rounded-full font-bold text-base shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Get Access Now
              </button>
              <button className="w-full bg-transparent text-secondary font-semibold py-4 rounded-full border border-secondary/10 hover:bg-secondary/5 transition-colors">
                Try Live Demo
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Compatibility</h4>
              <div className="flex flex-wrap gap-2">
                <Badge icon={<Brush className="w-3 h-3" />} label="Figma" />
                <Badge icon={<Terminal className="w-3 h-3" />} label="React" />
                <Badge icon={<Star className="w-3 h-3" />} label="Tailwind" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <h3 className="font-headline text-3xl font-bold tracking-tight">Editorial Design Logic</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Unlike standard UI kits, this product is built on an editorial foundation. We've removed the noise of 1px borders and replaced them with tonal hierarchy and intentional white space. Every component follows a strict "Curated" radius logic to ensure visual harmony across your entire project.
          </p>
        </div>
        <div className="asymmetric-radius overflow-hidden bg-surface-container h-64">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2tsy8jk0Df-D6F-BrptYibWCAgFm5pd2StT_GqDrsZLuZrIpz79YEiBziaZl2777-BvcH_dbYsvBL73tXz8nLdQnjulEATQ6GhTodwYuctlc_AfkZq9PQeo9wvAPHdjHlWLvFYKOoZyBRrH53QWQVBh3XBJl6N8gBfdkMK-B0mGbWmk0dsIMrg6W-inDJKLY6HfWTXDtFPfMPhgXsdxw5u-1KBdZR6R3rrGjo7iu0roqeh4CkdeXfI3rzqmRweEvqLM5a5fOBzDQ" 
            alt="Design Detail"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product, onClick }: { product: Product, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-surface-container-lowest asymmetric-radius overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-primary/5">
        <div className="relative aspect-square overflow-hidden bg-surface-container">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="p-5 space-y-3">
          <div className="flex justify-between items-start">
            <h4 className="font-headline font-bold text-on-surface leading-snug group-hover:text-primary transition-colors">{product.title}</h4>
            <span className="text-secondary font-extrabold text-lg">${product.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-surface-container-highest text-on-surface-variant text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-wider">{product.category}</span>
            <div className="flex items-center text-primary">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-[10px] font-bold text-on-surface-variant ml-1">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryChip({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex-none px-8 py-4 asymmetric-radius flex items-center gap-3 cursor-pointer transition-all ${active ? 'bg-secondary-container text-secondary' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'}`}>
      {icon}
      <span className="font-bold whitespace-nowrap">{label}</span>
    </div>
  );
}

function SettingsItem({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl group cursor-pointer hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-highest text-primary">
          {icon}
        </div>
        <span className="font-semibold">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-on-surface-variant" />
    </div>
  );
}

function Badge({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full">
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}

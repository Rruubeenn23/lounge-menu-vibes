import Header from "@/components/Header";
import MenuSection from "@/components/MenuSection";
import MenuItem from "@/components/MenuItem";
import FlavorGrid from "@/components/FlavorGrid";
import Footer from "@/components/Footer";
import {
  cachimbasClasicas,
  cachimbasPremium,
  mezclasCasa,
  bebidasSinAlcohol,
  bebidasEspeciales,
} from "@/data/menuData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container">
        {/* Cachimbas Clásicas */}
        <MenuSection 
          title={cachimbasClasicas.title} 
          subtitle={cachimbasClasicas.subtitle}
        >
          {cachimbasClasicas.items.map((item) => (
            <MenuItem 
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              tag={item.tag}
            />
          ))}
        </MenuSection>

        {/* Cachimbas Premium */}
        <MenuSection 
          title={cachimbasPremium.title} 
          subtitle={cachimbasPremium.subtitle}
        >
          {cachimbasPremium.items.map((item) => (
            <MenuItem 
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              tag={item.tag}
            />
          ))}
        </MenuSection>

        {/* Sabores Disponibles */}
        <MenuSection 
          title="Sabores Disponibles" 
          subtitle="Elige tu favorito o crea tu mezcla"
        >
          <FlavorGrid />
        </MenuSection>

        {/* Mezclas Especiales */}
        <MenuSection 
          title={mezclasCasa.title} 
          subtitle={mezclasCasa.subtitle}
        >
          {mezclasCasa.items.map((item) => (
            <MenuItem 
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              tag={item.tag}
            />
          ))}
        </MenuSection>

        {/* Separator */}
        <div className="flex items-center justify-center py-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>

        {/* Bebidas */}
        <MenuSection 
          title="Bebidas" 
          subtitle="Acompaña tu experiencia"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sin Alcohol */}
            <div className="space-y-2">
              <h3 className="text-gold text-sm font-medium uppercase tracking-wider mb-4 px-4">
                {bebidasSinAlcohol.title}
              </h3>
              {bebidasSinAlcohol.items.map((item) => (
                <MenuItem 
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>

            {/* Especiales */}
            <div className="space-y-2">
              <h3 className="text-gold text-sm font-medium uppercase tracking-wider mb-4 px-4">
                {bebidasEspeciales.title}
              </h3>
              {bebidasEspeciales.items.map((item) => (
                <MenuItem 
                  key={item.name}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  tag={item.tag}
                />
              ))}
            </div>
          </div>
        </MenuSection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

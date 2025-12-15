import { flavors } from "@/data/menuData";

const FlavorGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {flavors.map((flavor) => (
        <div
          key={flavor.name}
          className="flex flex-col items-center gap-2 py-4 px-3 rounded-lg bg-muted/30 border border-border/50 hover:border-gold/30 hover:bg-muted/50 transition-all duration-300"
        >
          <span className="text-2xl">{flavor.icon}</span>
          <span className="text-xs text-muted-foreground text-center">{flavor.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FlavorGrid;

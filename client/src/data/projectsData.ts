// Project data structure for the gallery system
// All images must be in .jpg format

export type ProjectImage = {
  url: string;
  alt: string;
};

export type ProjectDetail = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  imageCount: number; // Number of images for this project
};

// Helper function to generate image URLs based on folder structure
export function generateProjectImages(category: string, projectId: string, imageCount: number, projectTitle: string): ProjectImage[] {
  return Array.from({ length: imageCount }, (_, i) => ({
    url: `/images/${category}/${projectId}/${i + 1}.jpg`,
    alt: `${projectTitle} - Bild ${i + 1}`
  }));
}

export type CategoryData = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  projects: ProjectDetail[];
};

// Main projects data - organized by 3 broader categories
export const projectsData: Record<string, CategoryData> = {
  "hardgjorda-ytor": {
    slug: "hardgjorda-ytor",
    title: "Hårdgjorda ytor",
    description: "Plattläggning, trädäck, uteplatser och murar för din trädgård",
    thumbnail: "/images/hardgjorda-ytor/plattlaggning-1/1.jpg",
    projects: [
      {
        id: "plattlaggning-1",
        title: "Komplett trädgårdsanläggning",
        description: "Omfattande projekt med trädäck, plattläggning och flera rabatter",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-1/1.jpg",
        imageCount: 19
      },
      {
        id: "plattlaggning-2",
        title: "Bakgårdsplattläggning med rabatter",
        description: "Stilren innergård med modern plattläggning och trädgårdsintegrering",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-2/1.jpg",
        imageCount: 18
      },
      {
        id: "plattlaggning-3",
        title: "Komplett trädgårdsprojekt",
        description: "Plattläggning, gräsmatta och rabatter i en helhetslösning",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-3/1.jpg",
        imageCount: 13
      },
      {
        id: "plattlaggning-4",
        title: "Uppfart med upphöjda planteringar",
        description: "Stor uppfart med integrerade planteringslådor och stenmur",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-4/1.jpg",
        imageCount: 7
      },
      {
        id: "plattlaggning-5",
        title: "Plattläggning runt hela byggnaden",
        description: "Omfattande plattläggning runt hela huset med entré och flera zoner",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-5/1.jpg",
        imageCount: 18
      },
      {
        id: "plattlaggning-6",
        title: "Entré gångväg",
        description: "Rak entréväg med stora plattor från grind till dörr",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-6/1.jpg",
        imageCount: 20
      },
      {
        id: "plattlaggning-7",
        title: "Plattläggning och grusytor",
        description: "Kombinerat projekt med plattor och grus runt fastighet",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-7/1.jpg",
        imageCount: 16
      },
      {
        id: "plattlaggning-8",
        title: "Uppfart med parkeringsyta",
        description: "Stor uppfart med stenkanter och dekorativa element",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-8/1.jpg",
        imageCount: 21
      },
      {
        id: "plattlaggning-9",
        title: "Uppfart med dekorativ mönsterläggning",
        description: "Parkeringsyta med mönsterlagd plattläggning i flera nyanser",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-9/1.jpg",
        imageCount: 15
      },
      {
        id: "plattlaggning-10",
        title: "Modern bakgårdsterrass",
        description: "Stilren terrassplattläggning med integrerade rabatter",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-10/1.jpg",
        imageCount: 9
      },
      {
        id: "plattlaggning-11",
        title: "Gångväg med plattor",
        description: "Vacker gångväg med plattläggning",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-11/1.jpg",
        imageCount: 4
      },
      {
        id: "plattlaggning-mur-1",
        title: "Stenmur med plantering",
        description: "Naturstenmur med integrerad plantering",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-mur-1/1.jpg",
        imageCount: 3
      },
      {
        id: "plattlaggning-tradack-1",
        title: "Trädäck och plattläggning",
        description: "Kombinerat projekt med både trädäck och plattläggning",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-tradack-1/1.jpg",
        imageCount: 8
      },
      {
        id: "trappgang-1",
        title: "Trappgång till entré",
        description: "Trappgång med plattor till husets entré",
        thumbnail: "/images/hardgjorda-ytor/trappgang-1/1.jpg",
        imageCount: 4
      },
      {
        id: "uteplats-1",
        title: "Uteplats med grillplats",
        description: "Cirkulär grillplats med gångväg och upphöjda murar",
        thumbnail: "/images/hardgjorda-ytor/uteplats-1/1.jpg",
        imageCount: 8
      },
    ]
  },

  "tradgard-markarbete": {
    slug: "tradgard-markarbete",
    title: "Trädgård & Markarbete",
    description: "Rabatter, planteringar och gräsläggning för en vacker trädgård",
    thumbnail: "/images/tradgard-markarbete/grasplantering-1/1.jpg",
    projects: [
      {
        id: "grasplantering-1",
        title: "Gräsmatta runt nybygge",
        description: "Komplett gräsplantering med markberedning runt ny fastighet",
        thumbnail: "/images/tradgard-markarbete/grasplantering-1/1.jpg",
        imageCount: 8
      },
      {
        id: "grasplantering-2",
        title: "Ny gräsmatta",
        description: "Omfattande gräsplantering med markbearbetning",
        thumbnail: "/images/tradgard-markarbete/grasplantering-2/1.jpg",
        imageCount: 5
      },
      {
        id: "grasplantering-rabatt-1",
        title: "Gräsmatta med rabatt",
        description: "Gräsplantering kombinerat med rabattanläggning",
        thumbnail: "/images/tradgard-markarbete/grasplantering-rabatt-1/1.jpg",
        imageCount: 6
      },
      {
        id: "rabatt-1",
        title: "Rabatt med perenner",
        description: "Färgglad rabatt med fleråriga växter",
        thumbnail: "/images/tradgard-markarbete/rabatt-1/1.jpg",
        imageCount: 2
      },
      {
        id: "rabatt-2",
        title: "Planteringsrabatt",
        description: "Rabatt med buskage och plantering",
        thumbnail: "/images/tradgard-markarbete/rabatt-2/1.jpg",
        imageCount: 2
      },
    ]
  },

  "bygg-renovering": {
    slug: "bygg-renovering",
    title: "Bygg & Renovering",
    description: "Staket, växthus och andra konstruktioner för din fastighet",
    thumbnail: "/images/bygg-renovering/pool-1/1.jpg",
    projects: [
      {
        id: "pool-1",
        title: "Poolinstallation",
        description: "Installation av pool med tillhörande markarbete",
        thumbnail: "/images/bygg-renovering/pool-1/1.jpg",
        imageCount: 11
      },
      {
        id: "staket-1",
        title: "Metallstaket",
        description: "Grönt metallstaket för avgränsning av tomt",
        thumbnail: "/images/bygg-renovering/staket-1/1.jpg",
        imageCount: 9
      },
      {
        id: "staket-2",
        title: "Staket i impregnerat trä",
        description: "Hållbart staket i impregnerat trä",
        thumbnail: "/images/bygg-renovering/staket-2/1.jpg",
        imageCount: 1
      },
      {
        id: "tak-1",
        title: "Takarbete på kommersiell byggnad",
        description: "Renovering av tak på kommersiell fastighet",
        thumbnail: "/images/bygg-renovering/tak-1/1.jpg",
        imageCount: 7
      },
      {
        id: "vaxthus-1",
        title: "Växthus installation",
        description: "Montering av växthus med grund och förberedelser",
        thumbnail: "/images/bygg-renovering/vaxthus-1/1.jpg",
        imageCount: 3
      },
    ]
  }
};

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return projectsData[slug];
}

// Helper function to get project by category and project id with generated images
export function getProjectById(categorySlug: string, projectId: string) {
  const category = getCategoryBySlug(categorySlug);
  const project = category?.projects.find(p => p.id === projectId);

  if (!project) return undefined;

  // Return project with generated images
  return {
    ...project,
    images: generateProjectImages(categorySlug, projectId, project.imageCount, project.title)
  };
}

// Get all categories as an array
export function getAllCategories(): CategoryData[] {
  return Object.values(projectsData);
}

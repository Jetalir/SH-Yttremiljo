// Project data structure for the gallery system
//
// HOW TO ADD IMAGES:
// 1. Create folder structure: public/images/{category}/{project-id}/
// 2. Add images numbered as: 1.jpg, 2.jpg, 3.jpg, etc.
// 3. In the project data below, set imageCount to the number of images
//
// Example folder structure:
//   public/images/hardgjorda-ytor/projekt-1/1.jpg
//   public/images/hardgjorda-ytor/projekt-1/2.jpg
//   public/images/hardgjorda-ytor/projekt-1/3.jpg
//   → Set imageCount: 3 in the data
//
// Images are automatically generated using the generateProjectImages() function
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
// Images should be organized as: /images/{category}/{projectId}/1.jpg, 2.jpg, etc.
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
        title: "Plattläggning med moderna plattor",
        description: "Stor plattläggning med moderna plattor",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-1/1.jpg",
        imageCount: 36
      },
      {
        id: "plattlaggning-2",
        title: "Plattläggning 2",
        description: "Stor plattläggning med moderna plattor",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-2/1.jpg",
        imageCount: 24
      },
      {
        id: "plattlaggning-3",
        title: "Modern uteplats",
        description: "Stor plattläggning med moderna plattor",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-3/1.jpg",
        imageCount: 13
      },
      {
        id: "plattlaggning-4",
        title: "Modern uteplats",
        description: "Stor plattläggning med moderna plattor",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-4/1.jpg",
        imageCount: 17
      },
      {
        id: "plattlaggning-5",
        title: "Modern uteplats",
        description: "Stor plattläggning med moderna plattor",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-5/1.jpg",
        imageCount: 1
      },
      {
        id: "uteplats-1",
        title: "Lyxig uteplats",
        description: "Uteplats med flera funktioner",
        thumbnail: "/images/hardgjorda-ytor/uteplats-1/1.jpg",
        imageCount: 1
      },
      {
        id: "plattlaggning-mur-1",
        title: "Stenmur med plantering",
        description: "Naturstenmur med plantering",
        thumbnail: "/images/hardgjorda-ytor/plattlaggning-mur-1/1.jpg",
        imageCount: 6
      },
    ]
  },

  "tradgard-markarbete": {
    slug: "tradgard-markarbete",
    title: "Trädgård & Markarbete",
    description: "Rabatter, planteringar och gräsläggning för en vacker trädgård",
    thumbnail: "/images/tradgard-markarbete/rabatt-1/1.jpg",
    projects: [
      {
        id: "rabatt-1",
        title: "Rabatt med perenner",
        description: "Färgglad rabatt med fleråriga växter",
        thumbnail: "/images/tradgard-markarbete/rabatt-1/1.jpg",
        imageCount: 1
      },
      {
        id: "rabatt-2",
        title: "Rabatt med perenner",
        description: "Färgglad rabatt med fleråriga växter",
        thumbnail: "/images/tradgard-markarbete/rabatt-2/1.jpg",
        imageCount: 1
      },
      {
        id: "grasplantering-2",
        title: "Ny gräsmatta",
        description: "Gräsplantering för stor trädgård",
        thumbnail: "/images/tradgard-markarbete/grasplantering-2/1.jpg",
        imageCount: 7
      },
    ]
  },

  "bygg-renovering": {
    slug: "bygg-renovering",
    title: "Bygg & Renovering",
    description: "Staket, växthus och andra konstruktioner för din fastighet",
    thumbnail: "/images/bygg-renovering/staket-1/1.jpg",
    projects: [
      {
        id: "staket-1",
        title: "Modernt staket i trä",
        description: "Modernt staket i trä",
        thumbnail: "/images/bygg-renovering/staket-1/1.jpg",
        imageCount: 1
      },
      {
        id: "staket-2",
        title: "Modernt staket i trä",
        description: "Modernt staket i trä",
        thumbnail: "/images/bygg-renovering/staket-2/1.jpg",
        imageCount: 1
      },
      {
        id: "vaxthus-1",
        title: "Växthus installation",
        description: "Modernt växthus i trädgård",
        thumbnail: "/images/bygg-renovering/vaxthus-1/1.jpg",
        imageCount: 1
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

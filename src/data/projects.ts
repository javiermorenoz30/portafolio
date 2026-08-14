export type ProjectCategory = 'photo' | 'design' | 'web' | 'video';

export interface Project {
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  image: string;
  href: string;
  alt: string;
}

export const projects: Project[] = [
  { title:'NOCTURNA', category:'photo', categoryLabel:'Fotografía', role:'Editorial / Portrait', image:'/assets/media/project-01.svg', href:'/fotografia/', alt:'Nocturna, proyecto de fotografía editorial de Javier Moreno' },
  { title:'NOVA IDENTITY', category:'design', categoryLabel:'Diseño', role:'Brand Identity', image:'/assets/media/project-02.svg', href:'/diseno-grafico/', alt:'Nova Identity, proyecto de identidad visual de Javier Moreno' },
  { title:'MOTION / 01', category:'video', categoryLabel:'Video', role:'Direction / Edit', image:'/assets/media/project-03.svg', href:'/video/', alt:'Motion 01, proyecto audiovisual de Javier Moreno' },
  { title:'MONOLITH WEB', category:'web', categoryLabel:'Web', role:'UI / Front-end', image:'/assets/media/project-04.svg', href:'/diseno-web/', alt:'Monolith Web, proyecto de diseño web de Javier Moreno' },
  { title:'CHROMA', category:'photo', categoryLabel:'Fotografía', role:'Product / Art Direction', image:'/assets/media/project-05.svg', href:'/fotografia/', alt:'Chroma, proyecto de fotografía de producto de Javier Moreno' },
  { title:'AFTERIMAGE', category:'design', categoryLabel:'Diseño', role:'Campaign / Social', image:'/assets/media/project-06.svg', href:'/diseno-grafico/', alt:'Afterimage, campaña de diseño visual de Javier Moreno' },
  { title:'OBJECTS / 24', category:'photo', categoryLabel:'Fotografía', role:'Still Life', image:'/assets/media/project-07.svg', href:'/fotografia/', alt:'Objects 24, proyecto de still life de Javier Moreno' },
  { title:'VOID / DIGITAL', category:'web', categoryLabel:'Web', role:'Web Experience', image:'/assets/media/project-08.svg', href:'/diseno-web/', alt:'Void Digital, proyecto de experiencia web de Javier Moreno' }
];

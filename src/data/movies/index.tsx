export const projects: Project[] = [
  {
    title: '',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: '',
    source: '',
    tags: [],
    type: '个人',
  },
  {
    title: '',
    description: '基于 ',
    preview: '/img/project/nest-vben-admin.png',
    website: '',
    source: '',
    tags: [],
    type: '个人',
  },





]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type MovieType = '个人' | 'web' | 'app' | 'toy' | 'other'

export type Movie = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
  type: MovieType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)

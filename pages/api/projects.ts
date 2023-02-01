import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  image: string,
  title: string,
  technologies: string[],
  url: string,
  sourceCode: string,
  description: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if(req.method !== 'GET') return res.status(405).end()
  const projects = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'Proyecto 1',
      technologies: ['React', 'Next', 'Tailwind'],
      url: 'https://google.com',
      sourceCode: 'https://github.com',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
    {
      image: 'https://picsum.photos/200/300',
      title: 'Proyecto 2',
      technologies: ['Javascript', 'HTML', 'CSS'],
      url: 'https://google.com',
      sourceCode: 'https://github.com',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    },
  ]
  res.status(200).json(projects)
}

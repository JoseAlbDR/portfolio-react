import TagCloud from '@frank-mayer/react-tag-cloud'
import './TagCanvas.scss'
function TagCanvas() {
  return (
    <TagCloud
      options={{
        radius: 200,
        maxSpeed: 'fast',
      }}
      onClickOptions={{ passive: true }}
      // style={{ maxidth: '100%', height: '100%' }}
    >
      {[
        'Angular',
        'VSCode',
        'TypeScript',
        'React',
        'RTK',
        'React Query',
        'React Router',
        'SPA',
        'HTML',
        'CSS',
        'JavaScript',
        'JSON',
        'EJS',
        'JQuery',
        'Supabase',
        'AWS',
        'Node',
        'Express',
        'Nest',
        'OpenAI',
        'Prisma',
        'PostgreSQL',
        'Docker',
        'GitHub Actions',
        'DevOps',
        'Mongoose',
        'MongoDB',
        'RabbitMQ',
      ]}
    </TagCloud>
  )
}

export default TagCanvas

import TagCloud from '@frank-mayer/react-tag-cloud'
import './TagCanvas.scss'
function TagCanvas() {
  return (
    <TagCloud
      options={{
        radius: 200,
        maxSpeed: 'fast',
      }}
      onClick={(tag, ev) => alert(tag)}
      onClickOptions={{ passive: true }}
      // style={{ maxidth: '100%', height: '100%' }}
    >
      {[
        'VSCode',
        // 'TypeScript',
        'React',
        'Redux',
        'RTK',
        'React Query',
        'React Router',
        'Angular',
        'SPA',
        'ESLint',
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
      ]}
    </TagCloud>
  )
}

export default TagCanvas

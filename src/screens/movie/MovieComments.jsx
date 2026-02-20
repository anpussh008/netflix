import { COMMENTS } from './comments.data'

export function MovieComments({ movieId }) {
  const movieComments = COMMENTS[movieId] || []

  if (!movieComments.length) {
    return <p className="text-gray-400 mt-6">Комментариев пока нет.</p>
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Комментарии</h2>

      <ul className="space-y-4">
        {movieComments.map(comment => (
          <li
            key={comment.id}
            className="bg-neutral-800 p-4 rounded-lg"
          >
            <p className="text-sm text-gray-400">{comment.name}</p>
            <p className="text-white text-sm">{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
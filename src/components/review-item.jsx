import { Star } from 'lucide-react'


export function ReviewItem({ review, onClick }) {
  return (
    <div
      className="w-full justify-start text-left hover:bg-blue-50 transition-colors duration-200 p-4"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-800">{review.title}</h3>
          <p className="text-sm text-gray-500 truncate">{review.content}</p>
          <div className="text-xs text-gray-400 mt-1">
            {review.author} • {review.date}
          </div>
        </div>
      </div>
    </div>
  )
}


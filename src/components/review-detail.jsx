import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Star, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react'

export function ReviewDetail({ review, onBack }) {
  return (
    <Card className="bg-white shadow-xl mb-16 md:mb-0">
      <CardHeader className="pb-2">
        <Button variant="ghost" onClick={onBack} className="mb-2">
          <ArrowLeft size={16} className="mr-2" />
          Back to all reviews
        </Button>
        <CardTitle className="text-2xl text-gray-800">{review.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-gray-600">{review.rating}/5</span>
        </div>
        <p className="text-gray-700 mb-4">{review.content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>{review.author}</span>
          <span>{review.date}</span>
        </div>
        <div className="flex items-center space-x-4 border-t pt-4">
          <Button variant="outline" size="sm" className="flex items-center">
            <ThumbsUp size={16} className="mr-2" />
            Helpful
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <ThumbsDown size={16} className="mr-2" />
            Not Helpful
          </Button>
          <Button variant="outline" size="sm" className="flex items-center">
            <MessageCircle size={16} className="mr-2" />
            Comment
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


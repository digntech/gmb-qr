import { Card, CardContent } from '@/components/ui/card'
import { ReviewItem } from './review-item'

// Mock data for reviews
const reviews = [
  { id: 1, title: 'Exceptional Service!', rating: 5, content: 'The customer support team went above and beyond to assist me. Truly impressed!', author: 'Emily Johnson', date: '2023-06-15' },
  { id: 2, title: 'Great Product, Room for Improvement', rating: 4, content: 'The product is fantastic overall, but there are a few minor issues that could be addressed.', author: 'Michael Chen', date: '2023-06-14' },
  { id: 3, title: 'Disappointed with Quality', rating: 2, content: 'Expected better quality for the price. The product didnt meet my expectations.', author: 'Sarah Thompson', date: '2023-06-13' },
  { id: 4, title: 'Amazing Features!', rating: 5, content: 'The features of this product are incredible. It has significantly improved my workflow.', author: 'David Rodriguez', date: '2023-06-12' },
  { id: 5, title: 'Mixed Feelings', rating: 3, content: 'The product has potential, but the user interface is a bit clunky. Some features are great, others are not.', author: 'Alex Turner', date: '2023-06-11' },
  { id: 6, title: 'Great Customer Service, But...', rating: 4, content: 'The customer support was excellent, but the product itself had some performance issues.', author: 'Olivia Smith', date: '2023-06-10' },
  { id: 7, title: 'Love the Design, Hate the Bugs', rating: 3, content: 'The product looks fantastic, but its riddled with bugs that constantly crash the app.', author: 'Noah Lee', date: '2023-06-09' },
  { id: 8, title: 'A Step in the Right Direction', rating: 4, content: 'The latest update improved performance, but theres still room for improvement in terms of features.', author: 'Ava Miller', date: '2023-06-08' },
  { id: 9, title: 'Potential, But Needs Work', rating: 3, content: 'The idea behind the product is great, but the execution is lacking. It needs more polish.', author: 'Ethan Brown', date: '2023-06-07' },
  { id: 10, title: 'A Bittersweet Experience', rating: 3, content: 'Im torn. Some aspects of the product are fantastic, but others are quite disappointing.', author: 'Zoe Davis', date: '2023-06-06' }
];

export function ReviewList({ onSelectReview }) {
  return (
    <Card className="bg-white shadow-xl">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} onClick={() => onSelectReview(review)} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


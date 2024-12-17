import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { QrCode, Pencil, BarChart, Scan, Map, IndianRupee, ReceiptIndianRupee, MapPinned, ChevronRightCircle, ChevronRight, SquarePercent, FileText, TicketCheck } from 'lucide-react'
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';

export default function ToolCards() {
  const tools = [
    {
      title: "GMB Review QR Generator",
      description: "Generate QR codes to effortlessly direct customers to your Google My Business page for reviews. Boost your online reputation, increase visibility, and drive more business.",
      icon: MapPinned,
      link: "/gmb",
      categories: ["SALES", "Reputation"],
    },
    {
      title: "Social Media QR Generator",
      description: "Quickly share your social media profiles with a custom QR code. Boost your online presence, drive traffic, and simplify connections.",
      icon: QrCode,
      categories: ["Marketing", "Engagement"],
      link: "/social",
    },
    {
      title: "UPI Payment QR generator",
      description: "Generate unique QR codes for instant UPI payments. Simplify transactions, accelerate payments, and enhance customer experience.",
      icon: ReceiptIndianRupee,
      categories: ["Revenue", "Sales"],
      link: "/upi",
    },
    {
      title: "Food Menu QR Generator",
      description: "Display your restaurant menu digitally and easily with a QR code. Enhance customer experience and increase order efficiency.",
      icon: FileText, // Assuming you have an icon for a menu book
      categories: ["Marketing", "Sales"],
      link: "#",
    },
    {
      title: "Offers QR Generator",
      description: "Promote special offers and discounts with a QR code. Drive customer engagement and boost sales.",
      icon: SquarePercent, // Assuming you have an icon for a discount tag
      categories: ["Marketing", "Sales"],
      link: "#",
    },
    {
      title: "Event Ticket QR Generator",
      description: "Generate QR codes for easy event ticket entry and management. Streamline check-in and enhance the event experience.",
      icon: TicketCheck, // Assuming you have an icon for a ticket
      categories: ["Marketing", "Sales"],
      link: "#",
    },
  ]

  return (
    (<section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Tools</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <tool.icon className="h-12 w-12 mb-4 " color='#5d17ea' />
                <CardTitle>{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">{tool.description}</CardDescription>
                <div className="flex items-center gap-4">

                  { tool.link === ("#") ? <Button disabled>Coming Soon</Button> :(
                    <Link
                    href={tool.link}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                  
                      <Button className="w-auto">{tool.link == ("/gmb") ? "Start" : "Start Free"} <ChevronRight /> </Button>
                  </Link>)}
                </div>
              </CardContent>
              <CardFooter>
                {tool.categories.map((category, i) => (
                  <Badge
                    key={i}
                    variant="primary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 uppercase mx-1"
                  >
                    <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary " />
                    {category}
                  </Badge>
                ))}

              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}


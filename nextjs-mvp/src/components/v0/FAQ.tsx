/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fHNU553brWd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Collapsible, CollapsibleTrigger, CollapsibleChevron, CollapsibleContent } from "@/components/ui/collapsible"

export default function FAQ() {
  return (
    <div className="space-y-4">
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">What is the refund policy?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase,
              you can return it for a full refund within 30 days of the delivery date.
            </p>
            <p>
              To initiate a return, please contact our customer support team with your order number and a brief
              explanation of why you\'d like to return the item. We\'ll provide you with a return shipping label and
              instructions on how to send the item back to us.
            </p>
            <p>
              Once we receive the item, we\'ll process the refund within 5-7 business days. Please note that the refund
              will be issued to the original payment method used for the purchase.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">How do I track my order?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              You can track the status of your order by logging into your account on our website and navigating to the
              "Orders" section. There, you\'ll find the current status of your order, as well as the estimated delivery
              date.
            </p>
            <p>
              If you don\'t have an account or can\'t find your order information, you can also contact our customer
              support team with your order number, and they\'ll be happy to provide you with the latest update on your
              shipment.
            </p>
            <p>
              Please note that it may take 1-2 business days for your order status to be updated after it\'s been
              shipped. If you have any further questions, don\'t hesitate to reach out to us.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">What payment methods do you accept?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              We accept a variety of payment methods, including Visa, Mastercard, American Express, Discover, and
              PayPal. You can choose your preferred payment method during the checkout process.
            </p>
            <p>
              All transactions are processed securely through our payment gateway, ensuring the safety and
              confidentiality of your financial information. We take the security of our customers' data very seriously
              and employ the latest encryption technologies to protect your information.
            </p>
            <p>
              If you have any questions or concerns about our payment processing, please don't hesitate to contact our
              customer support team. They'll be happy to assist you with any information you need.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <CollapsibleTrigger className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-medium">How long does shipping take?</h3>
          <div className="h-5 w-5 text-gray-500 transition-transform duration-300 group-[data-state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="px-6 pb-4 pt-0">
          <div className="prose text-gray-600 dark:text-gray-400">
            <p>
              The shipping time for your order will depend on your location and the shipping method you choose at
              checkout. We offer several shipping options, including:
            </p>
            <ul>
              <li>Standard Shipping: 5-7 business days (free for orders over $50)</li>
              <li>Expedited Shipping: 2-3 business days (additional charge applies)</li>
              <li>Next-Day Shipping: 1 business day (additional charge applies)</li>
            </ul>
            <p>
              Please note that these are estimated delivery times and may vary depending on your location and other
              factors. If you have any questions or concerns about your order's delivery, feel free to contact our
              customer support team.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
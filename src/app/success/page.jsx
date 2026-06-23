import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { CircleCheck } from "@gravity-ui/icons"

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  const { status, customer_details, amount_total, id } = session
  const customerEmail = customer_details?.email

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    return (
      <main className="w-full min-h-[85vh] flex items-center justify-center p-4 bg-[#FAF7F0] font-sans">
        <div 
          className="w-full max-w-md bg-white border rounded-xl p-8 text-center transition-all"
          style={{
            borderColor: "#E3DDCB",
            boxShadow: "0 4px 20px -2px rgba(27,36,48,0.03), 0 12px 40px -12px rgba(27,36,48,0.08)"
          }}
        >
          {/* Success Icon Wrapper */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
              <CircleCheck className="text-emerald-600 w-7 h-7" />
            </div>
          </div>

          {/* Heading */}
          <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#B08D57]">
            Payment Successful
          </p>
          <h1 className="text-3xl font-serif font-bold text-[#1B2430] mt-1.5 tracking-tight">
            Thank you, Reader!
          </h1>
          
          <p className="text-sm text-zinc-500 font-serif mt-3 max-w-sm mx-auto leading-relaxed">
            We appreciate your business! A confirmation and access link has been dispatched to{' '}
            <span className="text-[#1B2430] font-semibold font-sans break-all">{customerEmail}</span>.
          </p>

          {/* Minimal Order Summary Box */}
          <div className="mt-6 p-4 rounded-lg bg-zinc-50/50 border border-zinc-200/60 text-left space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Order ID:</span>
              <span className="font-mono text-zinc-600 text-[11px] max-w-[180] truncate" title={id}>
                {id}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-zinc-200/40 pt-2.5">
              <span className="text-zinc-400">Amount Paid:</span>
              <span className="font-mono font-bold text-zinc-800 text-sm">
                ${(amount_total / 100).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Help & Support Footer */}
          <p className="text-[11px] text-zinc-400 mt-6">
            Have questions? Contact support at{' '}
            <a 
              href="mailto:orders@example.com" 
              className="text-[#B08D57] hover:underline font-medium transition-all"
            >
              orders@example.com
            </a>
          </p>

          {/* Navigation Action */}
          <div className="mt-8 pt-5 border-t border-[#E3DDCB]">
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full h-11 text-sm font-medium tracking-wide rounded-sm text-[#FAF7F0] bg-[#1B2430] hover:bg-zinc-800 transition-colors shadow-sm"
            >
              Back to Bookstore
            </Link>
          </div>
        </div>
      </main>
    )
  }
}
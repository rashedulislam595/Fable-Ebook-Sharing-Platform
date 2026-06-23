import { getEbookById } from "@/lib/api/ebooks";
import { getUserSession } from "@/lib/core/session";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { ebookId, buyerId } = await req.json();

        if (!ebookId) {
            return NextResponse.json(
                { error: "Ebook ID is required" },
                { status: 400 }
            );
        }

        const ebook = await getEbookById(ebookId);

        if (!ebook) {
            return NextResponse.json(
                { error: "Ebook not found" },
                { status: 404 }
            );
        }

        const user = await getUserSession()
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.email,
            mode: "payment",
            payment_method_types: ["card"],

            line_items: [
                {
                    price_data: {
                        currency: "usd",

                        product_data: {
                            name: ebook.title,
                            images: ebook.coverImage
                                ? [ebook.coverImage]
                                : [],
                        },

                        unit_amount: Math.round(
                            Number(ebook.price) * 100
                        ),
                    },

                    quantity: 1,
                },
            ],

            metadata: {
                ebookId: ebook._id.toString(),
                writerId: ebook.writerId?.toString() || "",
                buyerId: user?.id,
            },

            success_url: `${process.env.BETTER_AUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,

            cancel_url: `${process.env.BETTER_AUTH_URL}/ebooks/${ebook._id}`,
        });

        return NextResponse.json({
            success: true,
            url: session.url,
        });

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}

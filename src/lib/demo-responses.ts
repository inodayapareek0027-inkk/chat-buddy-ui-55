export type Role = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
}

export const SUGGESTIONS = [
  "What products do you offer?",
  "What are your pricing plans?",
  "What is your refund policy?",
  "How long does shipping take?",
  "Do you provide warranties?",
  "How can I contact support?",
];

const PRICING = `Here's an overview of our **pricing plans** — all billed monthly, cancel anytime.

| Plan | Price | Best for | Seats |
| --- | --- | --- | --- |
| Starter | $19 /mo | Solo founders | 1 |
| Growth | $49 /mo | Small teams | 5 |
| Business | $129 /mo | Scaling companies | 20 |
| Enterprise | Custom | Large orgs | Unlimited |

**What's included in every plan**

- Unlimited conversations and message history
- Analytics dashboard with CSAT tracking
- Email support with a 24-hour response target

**Good to know**

1. Annual billing saves you 20%.
2. You can switch plans at any time and we prorate the difference.
3. Non-profits and students get an extra 30% off.

Want me to compare two specific plans side by side?`;

const REFUND = `Our **refund policy** is designed to be simple and low-friction.

- **30-day money-back guarantee** on all new subscriptions
- Refunds are issued to the original payment method
- Processing takes **5–7 business days** after approval

**How to request a refund**

1. Open **Billing → Invoices** in your account.
2. Select the invoice and click *Request refund*.
3. Add a short reason (optional, but it helps us improve).

> Annual plans cancelled after 30 days receive a prorated credit for the unused months.

You can read the full terms on our [refund policy page](#). Would you like me to start a refund request for you?`;

const SHIPPING = `Here are our current **shipping timelines**:

| Method | Delivery | Cost |
| --- | --- | --- |
| Standard | 3–5 business days | Free over $50 |
| Express | 1–2 business days | $12 |
| International | 7–14 business days | Calculated at checkout |

**A few details**

- Orders placed before **2:00 PM local time** ship the same day.
- Tracking numbers are emailed as soon as the carrier scans your parcel.
- We currently ship to 42 countries.

If you have an order number handy, I can look up its status for you.`;

const WARRANTY = `Yes — every product includes a **standard 2-year limited warranty**.

**Covered**

- Manufacturing defects
- Component failure under normal use
- Battery capacity dropping below 70% within the term

**Not covered**

- Accidental damage, liquid damage, or unauthorized repairs
- Normal cosmetic wear

You can extend coverage to **4 years** with *Care+* at checkout. Want me to walk you through filing a claim?`;

const PRODUCTS = `We offer three product lines, all built on the same platform:

1. **Support Suite** — shared inbox, live chat, and macros for customer teams.
2. **Knowledge Base** — a hosted help center with search and article analytics.
3. **Automation Studio** — no-code workflows to triage and route conversations.

**Common add-ons**

- Multilingual auto-translation
- Voice and SMS channels
- Advanced reporting exports

Which of these would you like to explore further?`;

const CONTACT = `You can reach a human on our support team any time:

- **Email:** support@example.com (24-hour response target)
- **Live chat:** available Mon–Fri, 8:00–20:00 UTC
- **Phone:** +1 (555) 018-2200 for Business and Enterprise plans

**Before you reach out**

1. Have your account email or order number ready.
2. Note any error message you saw, word for word.
3. Screenshots always speed things up.

Would you like me to escalate this conversation to a specialist?`;

const GENERIC = `Thanks for reaching out — happy to help with that.

Here's what I can assist with right away:

- **Products & features** — what's included and how things work
- **Billing** — pricing, invoices, plan changes, refunds
- **Orders** — shipping timelines, tracking, returns
- **Policies** — warranties, privacy, and terms

Could you share a little more detail about what you're trying to do? If it's related to a specific order or account, an order number or the email on file helps me give you an exact answer.`;

export function getDemoResponse(input: string): string {
  const text = input.toLowerCase();
  if (/(price|pricing|cost|plan)/.test(text)) return PRICING;
  if (/refund/.test(text)) return REFUND;
  if (/shipping|deliver/.test(text)) return SHIPPING;
  if (/warrant|guarantee/.test(text)) return WARRANTY;
  if (/product|offer|feature/.test(text)) return PRODUCTS;
  if (/contact|support team|human|agent|reach/.test(text)) return CONTACT;
  return GENERIC;
}

export function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

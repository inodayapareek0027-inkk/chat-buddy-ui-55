# Chat Companion UI

# AI Customer Support Chat Interface

Create a modern AI Customer Support chatbot interface.

This project is *frontend only*. Do NOT implement any backend, AI model, API, authentication, database, RAG, vector search, or file upload functionality.

The goal is to create a polished, production-quality chat UI that can later be connected to an AI backend.

## Layout

* Full-screen responsive chatbot

* ChatGPT-inspired layout

* Clean white background

* Blue accent color

* Rounded corners

* Soft shadows

* Modern typography

* Responsive on desktop, tablet, and mobile

## Header

Display:

* AI Customer Support

* Green "Online" status

* Simple chatbot icon

## Welcome Screen

Show an empty-state card with:

*Title*

Welcome to AI Customer Support

*Description*

Ask questions about products, pricing, shipping, refunds, warranties, or company policies.

Display clickable suggestion chips:

* What products do you offer?

* What are your pricing plans?

* What is your refund policy?

* How long does shipping take?

* Do you provide warranties?

* How can I contact support?

Clicking a suggestion should populate the chat with that question and display a realistic demo response.

## Chat Messages

User messages:

* Right aligned

* Blue message bubble

Assistant messages:

* Left aligned

* White bubble with subtle border

Support:

* Markdown formatting

* Bullet lists

* Numbered lists

* Tables

* Links

* Long responses

## Chat Input

Bottom fixed input area containing:

* Multi-line text box

* Placeholder:

  "Ask a question..."

* Send button

* Enter to send

* Shift + Enter for a new line

## Demo Behaviour

This is a UI prototype only.

When the user sends a message:

* Show a typing indicator for about 2 seconds.

* Then display a realistic placeholder support response.

* If the message contains words like "price", "pricing", or "cost", return a demo pricing response.

* If it contains "refund", return a demo refund policy.

* If it contains "shipping", return a demo shipping response.

* Otherwise return a generic customer support reply.

Do not connect to any API.

## Extra UI Features

Include:

* Copy message button

* Regenerate button

* Auto-scroll

* Smooth message animations

* Loading/typing indicator

* Timestamp below messages

* Hover effects

* Nice transitions

## Design Style

The interface should feel similar to ChatGPT or Claude:

* Minimal

* Spacious

* Professional

* Fast

* Clean

* Premium

## Technical Requirements

Use:

* React

* TypeScript

* Tailwind CSS

* shadcn/ui

Organize the code into reusable components:

* ChatHeader

* ChatWindow

* MessageBubble

* SuggestionChips

* TypingIndicator

* ChatInput

Build only the chatbot interface. Do not create any login page, signup page, dashboard, admin panel, settings page, analytics page, or marketing website

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://chat-buddy-ui-55.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/22027f9b-aa4b-4ef0-8e14-ce75b083b357).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

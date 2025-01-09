# Modern FiveM Community Website

A sleek, modern, and responsive website template for FiveM communities built with Next.js 13, Tailwind CSS, and TypeScript.

![Hero Section Preview](https://img.goodfon.com/original/4714x1659/c/ea/grand-theft-auto-v-gta-5-game-city-street-gta-v.jpg)

## Features

- 🎨 Modern UI with dark theme
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🔄 Dynamic content sections
- 🤝 Team showcase
- 📜 Rules page with Markdown support
- 🌐 Social media integration
- 💬 Discord widget
- 🎮 Getting started guide
- 🤝 Partners showcase

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Basic knowledge of React and Next.js

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fivem-community-site.git
cd fivem-community-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Basic Configuration

1. Update site metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Community Name',
  description: 'Your Community Description',
};
```

2. Modify the hero section in `components/ui/hero-title.tsx`:
```typescript
<FlipWords
  words={[
    "Your",
    "Custom",
    "Words",
    "Here"
  ]}
/>
```

### Team Members

Edit `components/ui/team/data.ts` to update team members:
```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Member Name",
    role: "Role Title",
    image: "image-url",
    bio: "Member bio",
    social: {
      discord: "username",
      twitter: "handle",
      github: "username"
    }
  },
  // Add more team members
];
```

### Server Rules

Update the rules in `public/rules.md` using Markdown format.

### Social Media

1. Update Discord widget in `components/ui/social-feed/discord-widget.tsx`:
```typescript
src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
```

2. Modify Twitter feed in `components/ui/social-feed/social-feed.tsx`:
```typescript
<TwitterFeed username="your_twitter_handle" />
```

### Partners

Edit `components/ui/partners/partner-data.ts` to update partner logos:
```typescript
export const partnerLogos = [
  "logo-url-1",
  "logo-url-2",
  // Add more logos
];
```

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run start
```

## Deployment

The site is configured for static exports and can be deployed to any static hosting service:

1. Build the site:
```bash
npm run build
```

2. Deploy the `out` directory to your hosting service.

## License

This project is licensed under the MIT License

## Support

For support, message me on the forums or on [X](https://x.com/codevibing)

## Credits

- Hero image from [GoodFon](https://goodfon.com/)
- Icons from [FontAwesome](https://fontawesome.com/) and [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
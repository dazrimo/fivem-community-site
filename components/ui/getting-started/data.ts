import { type IconName } from './types';

export const steps = [
  {
    id: 1,
    title: 'Download GTA 5',
    description:
      'Purchase and download Grand Theft Auto V from your preferred platform',
    icon: 'gamepad-2' as IconName,
    link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
  },
  {
    id: 2,
    title: 'Download FiveM',
    description: 'Install FiveM client to connect to our roleplay server',
    icon: 'download' as IconName,
    link: 'https://fivem.net/',
  },
  {
    id: 3,
    title: 'Join our Discord',
    description: 'Connect with the community and get the latest updates',
    icon: 'message-square' as IconName,
    link: 'https://discord.gg/hn6G9Qf4a3',
  },
  {
    id: 4,
    title: 'Start Playing',
    description: 'Connect to our server and begin your roleplay journey',
    icon: 'play' as IconName,
    link: 'fivem://connect/play.example.com',
  },
];

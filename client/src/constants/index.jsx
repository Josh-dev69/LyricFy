import { FaChromecast, FaUserShield, FaSearch, FaMobileAlt, FaDatabase } from 'react-icons/fa';

import { FaGithub, FaTwitter } from 'react-icons/fa';

export const features = [
    {
        icon: <FaChromecast />,
        title: "User-Friendly Interface",
        description: "Enjoy a seamless and intuitive experience designed for music lovers. Navigate with ease and find what you need in seconds."
    },
    {
        icon: <FaUserShield />,
        title: "Data Security",
        description: "Ensure User's data is secure with robust encryption and access controls."
    },
    {
        icon: <FaSearch />,
        title: "Easy Search",
        description: "Effortlessly find lyrics for any song in our vast database. Simply type in the title or artist, and let the magic happen."
    },
    
    {
        icon: <FaMobileAlt />,
        title: "Mobile Access",
        description: "Access your Favorite Lyrics on the go with our mobile-friendly interface."
    },
    {
        icon: <FaDatabase />,
        title: "Save Data",
        description: "Create your personalized collection of favorite songs. Access your saved lyrics anytime, anywhere."
    },
];

export const footerLinks = [
    {
        name: 'GitHub',
        icon: FaGithub,
        href: 'https://github.com/Josh-dev69',
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        href: 'https://twitter.com/AlohEbube',
    },
    {
        name: 'Privacy Policy',
        href: '/privacy',
    },
    {
        name: 'Terms of Service',
        href: '/terms',
    },
];

export const DB_CONFIG = {
    API_URL: 'http://localhost:3000',
    API_VERSION: 'v1',
};

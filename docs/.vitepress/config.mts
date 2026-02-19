import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "RhythmNator Editor",
    description: "Create and edit rhythmic patterns synchronized with audio tracks.",

    // Multi-language support
    locales: {
        root: {
            label: 'English',
            lang: 'en'
        },
        fr: {
            label: 'Français',
            lang: 'fr',
            link: '/fr/',
            themeConfig: {
                nav: [
                    { text: 'Accueil', link: '/fr/' },
                    { text: 'Documentation', link: '/fr/intro' }
                ],
                sidebar: [
                    {
                        text: 'Introduction',
                        items: [
                            { text: 'Présentation', link: '/fr/intro' },
                            { text: 'Démarrage', link: '/fr/getting-started' }
                        ]
                    },
                    {
                        text: 'Interface',
                        items: [
                            { text: 'Accueil', link: '/fr/interface-home' },
                            { text: 'Éditeur', link: '/fr/interface-editor' }
                        ]
                    },
                    {
                        text: 'Tutoriels et Guides',
                        items: [
                            {
                                text: 'Guides',
                                items: [
                                    { text: 'Lancement de projet', link: '/fr/guide-launch' },
                                    { text: 'BPM', link: '/fr/guide-bpm' },
                                    { text: 'Zone de travail', link: '/fr/guide-sheet' },
                                    { text: 'Note', link: '/fr/guide-event-keys' },
                                    { text: 'Groupes', link: '/fr/guide-groups' },
                                    { text: 'Actions', link: '/fr/guide-actions' },
                                    { text: 'Gestion de projet', link: '/fr/guide-project-management' }
                                ]
                            },
                            {
                                text: 'Tutoriel',
                                items: [
                                    { text: 'Créer un jeu type Guitar', link: '/fr/tutorial-guitar' }
                                ]
                            }
                        ]
                    }
                ],
                docFooter: {
                    prev: 'Page précédente',
                    next: 'Page suivante'
                }
            }
        }
    },

    themeConfig: {
        logo: '/logo.png',
        siteTitle: 'RhythmNator Editor',
        search: {
            provider: 'local'
        },

        // Default theme config (English)
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/intro' }
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'Presentation', link: '/intro' },
                    { text: 'Getting Started', link: '/getting-started' }
                ]
            },
            {
                text: 'Interface',
                items: [
                    { text: 'Home', link: '/interface-home' },
                    { text: 'Editor', link: '/interface-editor' }
                ]
            },
            {
                text: 'Tutorials and Guides',
                items: [
                    {
                        text: 'Guides',
                        items: [
                            { text: 'Launch project', link: '/guide-launch' },
                            { text: 'BPM', link: '/guide-bpm' },
                            { text: 'Work Zone', link: '/guide-sheet' },
                            { text: 'Note', link: '/guide-event-keys' },
                            { text: 'Groups', link: '/guide-groups' },
                            { text: 'Actions', link: '/guide-actions' },
                            { text: 'Project management', link: '/guide-project-management' }
                        ]
                    },
                    {
                        text: 'Tutorial',
                        items: [
                            { text: 'Make a game like Guitar', link: '/tutorial-guitar' }
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/Alios5/RN-Editor' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2026 RhythmNator'
        }
    }
})

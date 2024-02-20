export type SiteConfig = typeof navData;

export const navData = {
    brandName: "Image Influx",
    exploreMenu: [
        {
            label: "Discover Photos",
            href: "/images"
        },
        {
            label: "Discover Videos",
            href: "/videos"
        },
        {
            label: "Popular Searches",
            href: "/"
        },
        {
            label: "Leaderboard",
            href: "/"
        }
    ],
    userMenu: [
        {
            label: "Your Profile",
            href: "/"
        },
        {
            label: "Your Collections",
            href: "/"
        },
        {
            label: "Settings",
            href: "/"
        },
        {
            label: "Logout",
            href: "/"
        }
    ]
}
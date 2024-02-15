"use client";
import { Tab, Tabs } from '@nextui-org/tabs'
import React from 'react'

export default function UserProfileTabs() {
    return (
        <Tabs
            fullWidth
            variant='underlined'
            color='success'
            aria-label="Dynamic tabs"
            classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#22d3ee]",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:text-[#06b6d4]"
            }}
        >
            <Tab
                key="images"
                title="Images"
            >
                Images
            </Tab>
            <Tab
                key="videos"
                title="Videos"
            >
                Videos
            </Tab>
            <Tab
                key="statistics"
                title="Statistics"
            >
                Statistics
            </Tab>
            <Tab
                key="followers"
                title="Followers"
            >
                Followers
            </Tab>
            <Tab
                key="followings"
                title="Followings"
            >
                Followings
            </Tab>
        </Tabs>
    )
}

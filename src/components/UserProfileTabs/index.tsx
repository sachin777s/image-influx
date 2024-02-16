"use client";
import { Tab, Tabs } from '@nextui-org/tabs'
import React from 'react'
import Images from './Images';
import Videos from './Videos';
import Followings from './Followings';
import Followers from './Followers';

export default function UserProfileTabs() {
    return (
        <Tabs
            fullWidth
            variant='underlined'
            color='success'
            aria-label="Dynamic tabs"
            classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[var(--primary-color)]",
                tab: "max-w-fit px-0 h-12",
                tabContent: "group-data-[selected=true]:green"
            }}
        >
            <Tab
                key="images"
                title="Images"
            >
                <Images />
            </Tab>
            <Tab
                key="videos"
                title="Videos"
            >
                <Videos />
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
                className='w-full'
            >
                <Followers />
            </Tab>
            <Tab
                key="followings"
                title="Followings"
                className='w-full'
            >
                <Followings />
            </Tab>
        </Tabs>
    )
}

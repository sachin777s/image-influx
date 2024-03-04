import { Avatar } from '@nextui-org/avatar'
import { Button } from "@nextui-org/button"
import { Input } from '@nextui-org/input'
import React from 'react'

export default function EditProfile() {
    return (
        <section className='mt-6 flex flex-col items-center'>
            <h1 className='text-4xl sm:text-5xl'>Profile Settings</h1>
            <div className='mt-8 flex flex-col items-center gap-4'>
                <Avatar src='' className='w-[130px] h-[130px]' />
                <Button radius='sm' className='bg-[var(--primary-color)] text-white'>Change Image</Button>
            </div>
            <form className='mt-12 min-w-[20rem] w-[35%] flex flex-col items-center gap-4'>
                <Input
                    variant='bordered'
                    size="sm" type="text"
                    label="First Name"
                />
                <Input
                    variant='bordered'
                    size="sm"
                    type="text"
                    label="Sur Name"
                />
                <Input
                    readOnly
                    variant='bordered'
                    size="sm"
                    type="email"
                    label="Email"
                    value={"user@example.com"}
                />
                <Button
                    type='submit'
                    className='bg-[var(--primary-color)] text-white'
                >Update</Button>
            </form>
        </section>
    )
}

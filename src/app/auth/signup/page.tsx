import { Input } from '@nextui-org/input'
import {Button} from "@nextui-org/button"

export default function page() {
    return (
        <section className=''>
            <h1 className='text-center text-3xl'>Login </h1>
            <div className='mt-8 mx-auto max-w-[28rem] flex flex-col items-center gap-4'>
                <div className='w-full flex flex-col sm:flex-row items-center gap-4'>
                    <Input
                        key="1"
                        type="text"
                        label="First Name"
                        labelPlacement={"inside"}
                    // description={"Something wrong in data"}
                    />
                    <Input
                        key="1"
                        type="text"
                        label="Last Name"
                        labelPlacement={"inside"}
                    // description={"Something wrong in data"}
                    />
                </div>
                <Input
                    key="1"
                    type="email"
                    label="Email"
                    labelPlacement={"inside"}
                // description={"Something wrong in data"}
                />
                <Input
                    key="1"
                    type="password"
                    label="Password"
                    labelPlacement={"inside"}
                // description={"Something wrong in data"}
                />
                <Input
                    key="1"
                    type="password"
                    label="Confirm Password"
                    labelPlacement={"inside"}
                // description={"Something wrong in data"}
                />
                <Button className='bg-[var(--primary-color)]'>Submit</Button>
            </div>

        </section>
    )
}

import Image from "@/components/Media/ImageSection/Image"

export default function Images() {
    return (
        <section className="mt-12 columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-4 gap-4">
            <Image title="Nature Image" src="cld-sample-5" alt="..." />
            <Image title="Nature Image" src="cld-sample-4" alt="..." />
            <Image title="Nature Image" src="cld-sample-3" alt="..." />
            <Image title="Nature Image" src="cld-sample-2" alt="..." />
            <Image title="Nature Image" src="cld-sample-1" alt="..." />
            <Image title="Nature Image" src="sample" alt="..." />
        </section>
    )
}

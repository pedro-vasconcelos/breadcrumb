import { Link, usePage } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import DemoBreadcrumbsItem from '@/components/felix/demo-breadcrumbs-item';
import { SlashIcon } from '@heroicons/react/20/solid';

export default function Welcome() {

    // const { locale } = usePage<CustomPageProps>().props

    return (
        <div className="p-10">
            {/*{locale}*/}
            <Breadcrumb>
                <BreadcrumbList className="sm:gap-0">
                    <DemoBreadcrumbsItem name="Request" image="/request.png"></DemoBreadcrumbsItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <DemoBreadcrumbsItem name="nightwatch.app"  image="/nightwatch.png"></DemoBreadcrumbsItem>
                    <BreadcrumbSeparator>
                        <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <div className="flex items-center gap-x-2">
                                <div
                                    className="inner-shadow relative !size-5 shrink-0 rounded-md border border-weak bg-default"
                                    >
                                    <div className="absolute inset-0 flex items-center justify-center"><span
                                        className="size-3 rounded-[3px]" style={{ backgroundColor: 'rgb(0, 145, 255)' }}><span
                                        className="sr-only">blue</span></span></div>
                                </div>
                                <Link href={route('password.request')}>production</Link>
                            </div>
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

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
import DemoBreadcrumbsEnv from '@/components/felix/demo-breadcrumbs-env';

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
                        <DemoBreadcrumbsEnv name="main"></DemoBreadcrumbsEnv>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function DemoBreadcrumbsEnv({name = ''}) {
    return (
        <>
            <BreadcrumbItem className="cursor-pointer rounded-[var(--radius-sm)] px-1.5 py-1 font-medium text-[#11181c] hover:bg-[#f1f3f5]">
                <BreadcrumbLink href="/">
                    <span className="flex items-center gap-x-2">
                        <div className="relative inline-grid shrink-0 rounded bg-[#f2fbf1] align-middle *:col-start-1 *:row-start-1 *:rounded">
                            <div
                                className="inner-shadow relative !size-5 shrink-0 rounded-[var(--radius-sm)] border border-weak bg-default"
                            >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="size-3 rounded-[3px]" style={{ backgroundColor: 'rgb(0, 145, 255)' }}></span>
                                    </div>
                            </div>
                        </div>
                        {name}
                    </span>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem className="rounded-[var(--radius-sm)] px-0.5 py-1.5 outline-hidden hover:bg-[#f1f3f5]">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 outline-hidden">
                        <ChevronUpDownIcon className="size-4 text-[#11181c]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem>Documentation</DropdownMenuItem>
                        <DropdownMenuItem>Themes</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </BreadcrumbItem>
        </>
    );
}

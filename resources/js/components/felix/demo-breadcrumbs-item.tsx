import { BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function DemoBreadcrumbsItem({name = '', image = ''}) {
    return (
        <>
            <BreadcrumbItem className="cursor-pointer rounded-[var(--radius-sm)] px-1.5 py-1 font-medium text-[#11181c] hover:bg-[#f1f3f5]">
                <BreadcrumbLink href="/">
                    <span className="flex items-center gap-x-2">
                        <div className="relative inline-grid shrink-0 rounded bg-[#f2fbf1] align-middle *:col-start-1 *:row-start-1 *:rounded">
                            <Avatar className="size-5 rounded-[var(--radius-sm)]">
                                <AvatarImage src={image} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="relative border border-[black]/5"></span>
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

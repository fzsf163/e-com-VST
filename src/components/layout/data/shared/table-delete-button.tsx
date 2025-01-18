import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Table } from '@tanstack/react-table'; // Assuming you're using TanStack Table
import { CircleAlert, Trash } from 'lucide-react';
  
  interface DeleteRowsDialogProps<TData> {
    table: Table<TData>;
    handleDelete: () => void;
  }
  
  export function DeleteRowsDialog<TData>({
    table,
    handleDelete,
  }: DeleteRowsDialogProps<TData>) {
    return (
      <>
        {/* Delete button */}
        {table.getSelectedRowModel().rows.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className='ml-auto' variant='outline'>
                <Trash
                  className='-ms-1 me-2 opacity-60'
                  size={16}
                  strokeWidth={2}
                  aria-hidden='true'
                />
                Delete
                <span className='-me-1 ms-3 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70'>
                  {table.getSelectedRowModel().rows.length}
                </span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className='flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4'>
                <div
                  className='flex size-9 shrink-0 items-center justify-center rounded-full border border-border'
                  aria-hidden='true'
                >
                  <CircleAlert className='opacity-80' size={16} strokeWidth={2} />
                </div>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete{' '}
                    {table.getSelectedRowModel().rows.length} selected{' '}
                    {table.getSelectedRowModel().rows.length === 1
                      ? 'row'
                      : 'rows'}
                    .
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </>
    );
  }
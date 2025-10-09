import { AiOutlineLinux } from 'react-icons/ai';

import { cn } from '@/lib/utils';

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
	return (
		<AiOutlineLinux
			role="status"
			aria-label="Loading"
			className={cn('size-4 animate-spin', className)}
			{...props}
		/>
	);
}

export { Spinner };

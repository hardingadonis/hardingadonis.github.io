import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { educationData } from '@/data/educationData';

const Education = () => {
	return (
		<section id="education" className="flex flex-col gap-6 py-6">
			<h3 className="text-2xl font-semibold text-primary text-center">
				Education
			</h3>
			<Accordion type="multiple" className="flex flex-col gap-4">
				{educationData
					.slice()
					.reverse()
					.map((edu) => (
						<AccordionItem
							key={edu.id}
							value={`edu-${edu.id}`}
							className="border-b last:border-b-0"
						>
							<AccordionTrigger className="w-full p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
								<div className="flex-grow flex flex-col justify-center text-left">
									<div className="flex w-full items-center justify-between">
										<span className="text-sm font-semibold">{edu.college}</span>
										<span className="text-xs text-gray-500 tabular-nums">
											{edu.duration}
										</span>
									</div>
									<div className="text-xs mt-1">{edu.major}</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="bg-gray-50 dark:bg-zinc-900 rounded-b-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
								<div className="text-xs text-muted-foreground">
									GPA: {edu.gpa}
								</div>
							</AccordionContent>
						</AccordionItem>
					))}
			</Accordion>
		</section>
	);
};

export default Education;

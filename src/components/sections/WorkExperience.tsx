import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { workExperienceData } from '@/data/workExperienceData';

const WorkExperience = () => {
	return (
		<section id="work-experience" className="flex flex-col gap-6 py-6">
			<h3 className="text-2xl font-semibold text-primary text-center">
				Work Experience
			</h3>
			<Accordion type="multiple" className="flex flex-col gap-4">
				{workExperienceData
					.slice()
					.reverse()
					.map((we) => (
						<AccordionItem
							key={we.id}
							value={`we-${we.id}`}
							className="border-b last:border-b-0"
						>
							<AccordionTrigger className="w-full p-4 flex items-center gap-4 bg-white dark:bg-zinc-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
								<div className="flex-none">
									<Avatar className="size-12 border bg-zinc-100 dark:bg-zinc-700">
										<AvatarImage
											src={we.companyLogoURL}
											alt={we.companyName}
											className="object-contain"
										/>
										<AvatarFallback>{we.companyLogoFallback}</AvatarFallback>
									</Avatar>
								</div>
								<div className="flex-grow flex flex-col justify-center text-left">
									<div className="flex items-center justify-between">
										<div className="text-sm font-semibold flex items-center gap-1">
											{we.companyName}
										</div>
										<div className="text-xs text-gray-500 tabular-nums">
											{we.duration}
										</div>
									</div>
									<div className="text-xs mt-1">{we.position}</div>
								</div>
							</AccordionTrigger>
							<AccordionContent className="bg-gray-50 dark:bg-zinc-900 rounded-b-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-200 space-y-2">
								{we.teamsize && (
									<div className="text-xs text-muted-foreground">
										Team size: {we.teamsize}
									</div>
								)}

								{we.technicalStack && (
									<div className="flex flex-wrap gap-2 text-xs">
										{we.technicalStack.map((tech, idx) => (
											<span
												key={idx}
												className="bg-primary/10 text-primary px-2 py-0.5 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
								)}

								{we.workDescription && (
									<ul className="list-disc list-inside space-y-1 text-sm">
										{we.workDescription.map((desc, idx) => (
											<li key={idx}>{desc}</li>
										))}
									</ul>
								)}
							</AccordionContent>
						</AccordionItem>
					))}
			</Accordion>
		</section>
	);
};

export default WorkExperience;

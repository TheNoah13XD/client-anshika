// components
import IconButton from "@/components/ui/IconButton";

export default function Home() {
  return (
		<>
			<div className="display-f justify-b h-full">
				<div className="display-f flex-column justify-b pt-8 pb-12">
					<p className="index-headline">we are not new here, but <br /> we're constantly evolving!</p>
					<p className="index-detail">Embark on a captivating journey where fashion meets art, showcasing elegance, creativity, and the embodiment of individuality.</p>
				</div>
				<div className="index-thumbnail">
					<img src="/index-thumbnail.png" alt="index-thumbnail" className="thumbnail" />
					<IconButton icon="north_east" className="index-btn" />
				</div>
			</div>
		</>
	)
}

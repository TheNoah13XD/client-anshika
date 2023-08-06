import Button from "@/components/ui/Button";
import { MaterialSymbol } from "material-symbols";

export default function Home() {
  return (
		<>
			<div className="display-f">
				<Button type="filled" icon="settings">Filled</Button>
				<Button type="elevated">elevated</Button>
				<Button type="tonal">tonal</Button>
				<Button type="outlined">outlined</Button>
				<Button type="text">text</Button>
			</div>
		</>
	)
}

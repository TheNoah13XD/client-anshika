import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import { MaterialSymbol } from "material-symbols";

export default function Home() {
  return (
		<>
			<div className="display-f mt-8">
				<Button type="filled" icon="settings">Filled</Button>
				<Button type="elevated" icon="settings">elevated</Button>
				<Button type="tonal" icon="settings">tonal</Button>
				<Button type="outlined" icon="settings">outlined</Button>
				<Button type="text" icon="settings">text</Button>
			</div>

			<div className="display-f mt-4">
				<IconButton type="filled" icon="north_east" />
				<IconButton type="tonal" icon="north_east" />
				<IconButton type="outlined" icon="north_east" />
				<IconButton type="text" icon="north_east" />
			</div>
		</>
	)
}

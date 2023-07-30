import Button from "@/components/Button"

export default function Home() {
  return (
		<>
			<div className="display-f p-4">
				<Button type="filled" icon="settings">Filled</Button>
				<Button type="elevated">elevated</Button>
				<Button type="tonal">tonal</Button>
				<Button type="outlined">outlined</Button>
				<Button type="text">text</Button>
			</div>
		</>
	)
}

function SNSLinkWithIcon({
	href,
	alt,
	imageSrc,
}: { href: string; alt: string; imageSrc: string }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="mx-2">
			<img src={imageSrc} width={50} height={50} alt={alt} />
		</a>
	);
}

// 各種 SNS Link 用コンポーネント

function SNSLinkComponent() {
	return (
		<div className="flex flex-row w-full justify-center items-center">
			<SNSLinkWithIcon
				href="https://github.com/dorimiamn"
				alt="GitHub"
				imageSrc="static/github-mark.png"
			/>
			<SNSLinkWithIcon
				href="https://x.com/dorimiamn"
				alt="X"
				imageSrc="static/logo-black-x.png"
			/>
			<SNSLinkWithIcon
				href="https://qiita.com/dorimiamn"
				alt="Qiita"
				imageSrc="static/qiita-icon.png"
			/>
			<SNSLinkWithIcon
				href="https://misskey.kyoupro.com/@dorimiamn"
				alt="Misskey Kyoupro"
				imageSrc="static/misskey_icon.png"
			/>
		</div>
	);
}

export function Profile() {
	return (
		<>
			<SNSLinkComponent />
		</>
	);
}

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

// プロフィール情報用コンポーネント
function MyProfileComponent() {
	return (
		<div className="container w-4/6 mx-auto my-10">
			<div className="flex flex-row">
				<img
					className="rounded-full object-contain m-auto"
					src="static/profile_icon_square.jpg"
					width={100}
					height={100}
					alt="dorimiamn's icon"
				/>
				<div className="flex flex-col w-5/6 mx-4 my-0">
					<h1 className="text-4xl mt-1 mb-4 text-center">dorimiamn</h1>
					<SNSLinkComponent />
				</div>
			</div>
		</div>
	);
}

// スキル表示用のブロックコンポーネント
function CardBlockComponent({
	name,
	comments,
}: { name: string; comments: string }) {
	return (
		<div className="grid lg:grid-cols-3 my-3">
			<h3 className="text-2xl break-words md:mr-6 mt-0 mb-3 md:my-auto whitespace-pre-wrap">
				{name}
			</h3>
			<p className="col-span-2 text-base break-words mb-0 mt-auto whitespace-pre-wrap">
				{comments}
			</p>
		</div>
	);
}

// スキル(使える言語やフレームワーク)
function MySkillComponent() {
	return (
		<div className="container w-4/6 mx-auto my-10">
			<div className="flex flex-col">
				<h2 className="text-3xl my-6">Skills</h2>
				<CardBlockComponent
					name="C++"
					comments="競技プログラミングで使っています。Highest は 905 です。業プロの書き方はできない。"
				/>
				<CardBlockComponent
					name="Python"
					comments="大学の授業やインターンで使っています。型を意識して使っています。"
				/>
				<CardBlockComponent
					name="TypeScript"
					comments="バイトや個人で使っています。最近型の楽しさがなんとなくわかってきた。"
				/>
				<CardBlockComponent
					name="Hono + JSX"
					comments="このサイトの作成に使用。Hono と Cloudflare に習熟したい！"
				/>
			</div>
		</div>
	);
}

// 資格を表示するコンポーネント
// TODO: 資格名が二段組になってしまうのを修正する
function QualificationComponent() {
	return (
		<div className="container w-4/6 mx-auto my-10">
			<div className="flex flex-col">
				<h2 className="text-3xl my-6">Qualifications</h2>
				<CardBlockComponent name="ITパスポート" comments="2019 年に取得。" />
				<CardBlockComponent
					name="基本情報技術者試験"
					comments="2021 年に取得。"
				/>
				<CardBlockComponent
					name="応用情報技術者試験"
					comments="2021 年に取得。"
				/>
				<CardBlockComponent
					name="登録セキスぺ"
					comments="2024 年春季試験にて情報処理安全確保支援士試験に合格、2024 年 10 月に登録セキスぺに登録。"
				/>
				<CardBlockComponent name="G 検定" comments="2022 年に取得。" />
				<CardBlockComponent name="色彩検定 3 級" comments="2024 年に取得。" />
				<CardBlockComponent name="色彩検定 UC 級" comments="2024 年に取得。" />
			</div>
		</div>
	);
}

// 成果物表示用のブロックコンポーネント
function WorksBlockComponent({
	name,
	comments,
	link,
}: { name: string; comments: string; link: string }) {
	return (
		<div className="grid grid-cols-3s my-3">
			<h3 className="text-2xl break-words mr-6 mt-0 mb-auto whitespace-pre-wrap">
				{name}
			</h3>
			<div className="col-span-2  mb-0 mt-auto">
				<p className="text-base break-words whitespace-pre-wrap">
					{comments}
					<br />
					<a href={link} target="_blank" rel="noopener noreferrer">
						{link}
					</a>
				</p>
			</div>
		</div>
	);
}

// 成果物の紹介欄
function WorkComponent() {
	return (
		<div className="container w-4/6 mx-auto my-10">
			<div className="flex flex-col">
				<h2 className="text-3xl my-6">Works</h2>
				<WorksBlockComponent
					name="dorimiamn's Portfolio"
					comments="このサイトです。"
					link="https://dorimiamn-dev.pages.dev/"
				/>
			</div>
		</div>
	);
}

export default function Profile() {
	return (
		<>
			<MyProfileComponent />
			<MySkillComponent />
			<QualificationComponent />
			<WorkComponent />
		</>
	);
}

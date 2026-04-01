// app/routes/index.tsx
// `createRoute()` helps you create handlers
import { createRoute } from 'honox/factory'
import { Header } from '../components/header'

// プロフィール情報用コンポーネント
function MyProfileComponent() {
	return (
		<div class="container w-4/6 mx-auto my-10">
			<div class="flex flex-row">
				<img
					class="rounded-full object-contain m-auto"
					src="/profile_icon_square.jpg"
					width={100}
					height={100}
					alt="dorimiamn's icon"
				/>
				<div class="flex flex-col w-5/6 mx-4 my-0">
					<h1 class="text-4xl mt-1 mb-4 text-center">dorimiamn</h1>
					{/* <SNSLinkComponent /> */}
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
		<div class="grid lg:grid-cols-3 my-3">
			<h3 class="text-2xl wrap-break-word md:mr-6 mt-0 mb-3 md:my-auto whitespace-pre-wrap">
				{name}
			</h3>
			<p class="col-span-2 text-base wrap-break-word mb-0 mt-auto whitespace-pre-wrap">
				{comments}
			</p>
		</div>
	);
}

// スキル(使える言語やフレームワーク)
function MySkillComponent() {
	return (
		<div class="container w-4/6 mx-auto my-10">
			<div class="flex flex-col">
				<h2 class="text-3xl my-6">Skills</h2>
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
		<div class="container w-4/6 mx-auto my-10">
			<div class="flex flex-col">
				<h2 class="text-3xl my-6">Qualifications</h2>
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
		<div class="grid grid-cols-3s my-3">
			<h3 class="text-2xl wrap-break-word mr-6 mt-0 mb-auto whitespace-pre-wrap">
				{name}
			</h3>
			<div class="col-span-2  mb-0 mt-auto">
				<p class="text-base wrap-break-word whitespace-pre-wrap">
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
		<div class="container w-4/6 mx-auto my-10">
			<div class="flex flex-col">
				<h2 class="text-3xl my-6">Works</h2>
				<WorksBlockComponent
					name="dorimiamn's Portfolio"
					comments="このサイトです。"
					link="https://dorimiamn.dev"
				/>
        <WorksBlockComponent 
          name="観光農園のブランドサイト"
          comments="観光農園のブランドサイトを制作、運営しています。HonoX で作成し Cloudflare でホスティングしています。サイト自体は公開されていますが、リンクは宣伝になってしまうので非公開です。気になる方は私に直に聞いてください！"
          link=""
        />
			</div>
		</div>
	);
}

export default createRoute((c) => {
  return c.render(
    <>
      <Header />
      <main class="md:mx-32">
        <MyProfileComponent />
        <MySkillComponent />
        <QualificationComponent />
        <WorkComponent />
      </main>
    </>
  )
})
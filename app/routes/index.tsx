// app/routes/index.tsx
// `createRoute()` helps you create handlers
import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <>
      <main class="md:mx-32">
        <div class="flex flex-row w-fit items-center justify-center gap-4 mx-auto my-32 p-4 border-2 border-green-100 rounded-xl">
          <img
            class="rounded-full object-contain"
            src="/profile_icon_square.jpg"
            width={80}
            height={80}
            alt="dorimiamn's icon"
          />
          <div class="flex flex-col">
            <span class="text-4xl">dorimiamn</span>
            {/* <SNSLinkComponent /> */}
          </div>
        </div>
      </main>
    </>,
  );
});

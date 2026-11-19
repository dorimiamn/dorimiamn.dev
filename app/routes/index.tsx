// app/routes/index.tsx
// `createRoute()` helps you create handlers
import { createRoute } from "honox/factory";
import ProfileCard from "../islands/profile-card";

export default createRoute((c) => {
  return c.render(
    <>
      <main class="md:mx-32">
        <div class="w-fit mx-auto my-32 rotate-0 origin-bottom-left motion-safe:animate-tilt-in">
          <ProfileCard />
        </div>
      </main>
    </>,
  );
});

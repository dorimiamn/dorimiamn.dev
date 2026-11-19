import { useRef } from "hono/jsx";

const MAX_TILT_DEG = 10;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ProfileCard() {
  const rectRef = useRef<DOMRect | null>(null);

  const handlePointerEnter = (e: PointerEvent) => {
    rectRef.current = (e.currentTarget as HTMLElement).getBoundingClientRect();
  };

  const handlePointerMove = (e: PointerEvent) => {
    const rect = rectRef.current;
    if (e.pointerType !== "mouse" || !rect) return;

    const x = clamp((e.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
    const y = clamp((e.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);

    const area = e.currentTarget as HTMLElement;
    area.style.setProperty("--tilt-x", `${-y * 2 * MAX_TILT_DEG}deg`);
    area.style.setProperty("--tilt-y", `${x * 2 * MAX_TILT_DEG}deg`);
  };

  const handlePointerLeave = (e: PointerEvent) => {
    const area = e.currentTarget as HTMLElement;
    area.style.removeProperty("--tilt-x");
    area.style.removeProperty("--tilt-y");
  };

  return (
    <div
      class="tilt-area"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div class="tilt-card flex flex-row items-center justify-center gap-4 p-4 border-2 border-gray-50 rounded-xl">
        <img
          class="rounded-full object-contain"
          src="/profile_icon_square.jpg"
          width={80}
          height={80}
          alt="dorimiamn's icon"
        />
        <div class="flex flex-col">
          <span class="text-4xl text-gray-50">dorimiamn</span>
        </div>
      </div>
    </div>
  );
}

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'ft-root',
  template: `
    <div class="flex min-h-screen flex-col items-center justify-center p-5">
      <h1 class="font-medium text-slate-900 ~text-2xl/4xl">
        Fluid for Tailwind CSS
      </h1>
      <p class="text-slate-600 ~text-base/lg ~mt-1/3">
        (Try resizing the window)
      </p>
      <a
        href="https://fluid.tw"
        target="_blank"
        class="block w-fit rounded-full bg-slate-900 px-4 py-2 text-white ~text-sm/base ~mt-4/6 hover:bg-slate-700"
      >
        Read the docs &rarr;
      </a>
    </div>
  `,
})
export class AppComponent {}

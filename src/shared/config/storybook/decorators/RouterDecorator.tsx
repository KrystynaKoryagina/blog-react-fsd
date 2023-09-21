import { BrowserRouter } from 'react-router-dom';
import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

// interface RouterDecoratorOpts {
//   initialEntries?: string[]
//   path?: string
// }

// export const RouterDecorator = (options?: RouterDecoratorOpts) => (Story: StoryFn) => {
//   // <BrowserRouter>
//   //   <Suspense fallback={<div>Loading</div>}>
//   //     <Story />
//   //   </Suspense>
//   // </BrowserRouter>;
//   const initialEntries = options?.initialEntries || ['/'];
//   const path = options?.path || '';

//   return (
//     <MemoryRouter initialEntries={initialEntries}>
//       <Routes>
//         <Route path={path} element={<Story />} />
//       </Routes>
//     </MemoryRouter>
//   );
// };

export const RouterDecorator = (Story: StoryFn) => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}>
      <Story />
    </Suspense>
  </BrowserRouter>
);

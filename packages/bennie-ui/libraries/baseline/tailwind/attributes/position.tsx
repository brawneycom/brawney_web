export const variants = {
  base: {
    position: ["static", "fixed", "absolute", "relative", "sticky"],
    index: ["z-0", 'z-10', 'z-20', 'z-30', 'z-40', 'z-50', 'z-auto'],
    inset: {
      all: [
        ...['inset-px', 'inset-auto', 'inset-full'],
        ...['inset-1/2', 'inset-1/3', 'inset-2/3', 'inset-1/4', 'inset-2/4', 'inset-3/4'],
        ...['inset-0.5', 'inset-1.5', 'inset-2.5', 'inset-3.5' ],
        ...["inset-0","inset-1","inset-2","inset-3","inset-4","inset-5","inset-6","inset-7","inset-8","inset-9"],
        ...["inset-10","inset-11","inset-12","inset-14","inset-16","inset-20","inset-24","inset-28","inset-32", "inset-36","inset-40"],
        //...["inset-44","inset-48","inset-52","inset-56","inset-60","inset-64","inset-72","inset-80","inset-96"]
        ],
      x: [
        ...['inset-x-px', 'inset-x-auto',  'inset-x-full'],
        ...['inset-x-1/2', 'inset-x-1/3', 'inset-x-2/3', 'inset-x-1/4', 'inset-x-2/4', 'inset-x-3/4'],
        ...['inset-x-0.5', 'inset-x-1.5', 'inset-x-2.5', 'inset-x-3.5' ],
        ...["inset-x-0","inset-x-1","inset-x-2","inset-x-3","inset-x-4","inset-x-5","inset-x-6","inset-x-7","inset-x-8","inset-x-9"],
        ...["inset-x-10","inset-x-11","inset-x-12","inset-x-14","inset-x-16","inset-x-20","inset-x-24","inset-x-28","inset-x-32", "inset-x-36","inset-x-40"],
        //...["inset-x-44","inset-x-48","inset-x-52","inset-x-56","inset-x-60","inset-x-64","inset-x-72","inset-x-80","inset-x-96"]
      ],
      y: [
        ...['inset-y-px', 'inset-y-auto', 'inset-y-full'],
        ...['inset-y-1/2', 'inset-y-1/3', 'inset-y-2/3', 'inset-y-1/4', 'inset-y-2/4', 'inset-y-3/4'],
        ...['inset-y-0.5', 'inset-y-1.5', 'inset-y-2.5', 'inset-y-3.5' ],
        ...["inset-y-0","inset-y-1","inset-y-2","inset-y-3","inset-y-4","inset-y-5","inset-y-6","inset-y-7","inset-y-8","inset-y-9"],
        ...["inset-y-10","inset-y-11","inset-y-12","inset-y-14","inset-y-16","inset-y-20","inset-y-24","inset-y-28","inset-y-32", "inset-y-36","inset-y-40"],
        //...["inset-y-44","inset-y-48","inset-y-52","inset-y-56","inset-y-60","inset-y-64","inset-y-72","inset-y-80","inset-y-96"]
      ],
      top: [
        ...['top-px', 'top-auto', 'top-full'],
        ...['top-1/2', 'top-1/3', 'top-2/3', 'top-1/4', 'top-2/4', 'top-3/4'],
        ...['top-0.5', 'top-1.5', 'top-2.5', 'top-3.5' ],
        ...["top-0","top-1","top-2","top-3","top-4","top-5","top-6","top-7","top-8","top-9"],
        ...["top-10","top-11","top-12","top-14","top-16","top-20","top-24","top-28","top-32", "top-36","top-40"],
        //...["top-44","top-48","top-52","top-56","top-60","top-64","top-72","top-80","top-96"]
      ],
      bottom: [
        ...['bottom-px', 'bottom-auto', 'bottom-full'],
        ...['bottom-1/2', 'bottom-1/3', 'bottom-2/3', 'bottom-1/4', 'bottom-2/4', 'bottom-3/4'],
        ...['bottom-0.5', 'bottom-1.5', 'bottom-2.5', 'bottom-3.5' ],
        ...["bottom-0","bottom-1","bottom-2","bottom-3","bottom-4","bottom-5","bottom-6","bottom-7","bottom-8","bottom-9"],
        ...["bottom-10","bottom-11","bottom-12","bottom-14","bottom-16","bottom-20","bottom-24","bottom-28","bottom-32", "bottom-36","bottom-40"],
        //...["bottom-44","bottom-48","bottom-52","bottom-56","bottom-60","bottom-64","bottom-72","bottom-80","bottom-96"]
      ],
      start: [
        ...['start-px', 'start-auto', 'start-full'],
        ...['start-1/2', 'start-1/3', 'start-2/3', 'start-1/4', 'start-2/4', 'start-3/4'],
        ...['start-0.5', 'start-1.5', 'start-2.5', 'start-3.5' ],
        ...["start-0","start-1","start-2","start-3","start-4","start-5","start-6","start-7","start-8","start-9"],
        ...["start-10","start-11","start-12","start-14","start-16","start-20","start-24","start-28","start-32", "start-36","start-40"],
        //...["start-44","start-48","start-52","start-56","start-60","start-64","start-72","start-80","start-96"]
      ],
      end: [
        ...['end-px', 'end-auto', 'end-full'],
        ...['end-1/2', 'end-1/3', 'end-2/3', 'end-1/4', 'end-2/4', 'end-3/4'],
        ...['end-0.5', 'end-1.5', 'end-2.5', 'end-3.5' ],
        ...["end-0","end-1","end-2","end-3","end-4","end-5","end-6","end-7","end-8","end-9"],
        ...["end-10","end-11","end-12","end-14","end-16","end-20","end-24","end-28","end-32", "end-36","end-40"],
        //...["end-44","end-48","end-52","end-56","end-60","end-64","end-72","end-80","end-96"]
      ],
      left: [
        ...['left-px', 'left-auto', 'left-full'],
        ...['left-1/2', 'left-1/3', 'left-2/3', 'left-1/4', 'left-2/4', 'left-3/4'],
        ...['left-0.5', 'left-1.5', 'left-2.5', 'left-3.5' ],
        ...["left-0","left-1","left-2","left-3","left-4","left-5","left-6","left-7","left-8","left-9"],
        ...["left-10","left-11","left-12","left-14","left-16","left-20","left-24","left-28","left-32", "left-36","left-40"],
        //...["left-44","left-48","left-52","left-56","left-60","left-64","left-72","left-80","left-96"]
      ],
      right: [
        ...['right-px', 'right-auto', 'right-full'],
        ...['right-1/2', 'right-1/3', 'right-2/3', 'right-1/4', 'right-2/4', 'right-3/4'],
        ...['right-0.5', 'right-1.5', 'right-2.5', 'right-3.5' ],
        ...["right-0","right-1","right-2","right-3","right-4","right-5","right-6","right-7","right-8","right-9"],
        ...["right-10","right-11","right-12","right-14","right-16","right-20","right-24","right-28","right-32", "right-36","right-40"],
        //...["right-44","right-48","right-52","right-56","right-60","right-64","right-72","right-80","right-96"]
      ],
    }
  },
  medium: {
    position: ["md:static", "md:fixed", "md:absolute", "md:relative", "md:sticky"]
  },
  large: {
    position: ["lg:static", "lg:fixed", "lg:absolute", "lg:relative", "lg:sticky"]
  },
};

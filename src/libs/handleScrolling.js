/*-- Give the section that occupies the largest area of ​​the screen a special style --*/

/*- get the position of elements on the page -*/
export const handleScrolling = () => {
  const CHILDREN = document.querySelectorAll(".animated"); //[...MAIN.children];

  let APPEARANCE_ON_PAGE = [];
  let DISAPPEARED_FROM_PAGE = [];

  const HTML = document.documentElement;
  function mostViewed() {
    APPEARANCE_ON_PAGE = [];
    DISAPPEARED_FROM_PAGE = [];
    CHILDREN.forEach((i) => {
      APPEARANCE_ON_PAGE.push(i.offsetTop - window.innerHeight);
      DISAPPEARED_FROM_PAGE.push(i.offsetTop + i.offsetHeight);
    });
    const ELE = [];
    const VISIBILE_AREA = [];

    APPEARANCE_ON_PAGE.forEach((i, x) => {
      if (
        APPEARANCE_ON_PAGE[x] <= HTML.scrollTop &&
        DISAPPEARED_FROM_PAGE[x] >= HTML.scrollTop
      ) {
        let ele_height = Math.abs(
          APPEARANCE_ON_PAGE[x] + window.innerHeight - DISAPPEARED_FROM_PAGE[x]
        );

        if (HTML.scrollTop - APPEARANCE_ON_PAGE[x] <= ele_height) {
          VISIBILE_AREA.push(HTML.scrollTop - APPEARANCE_ON_PAGE[x]);
        } else if (DISAPPEARED_FROM_PAGE[x] - HTML.scrollTop <= ele_height) {
          VISIBILE_AREA.push(
            Math.abs(HTML.scrollTop - DISAPPEARED_FROM_PAGE[x])
          );
        } else {
          VISIBILE_AREA.push(ele_height);
        }
        ELE.push(x);
      }
    });

    return ELE[VISIBILE_AREA.indexOf(Math.max(...VISIBILE_AREA))];
  }

  let prevSection = mostViewed();

  let m = mostViewed();
  if (prevSection !== m) {
    CHILDREN[prevSection].classList.remove("active");
    CHILDREN[m].classList.add("active");
    prevSection = m;
  }
};

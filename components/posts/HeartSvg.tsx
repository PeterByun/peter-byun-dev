import { heartRed } from '../../styles/variables';
import { SvgAttributes } from '../../types/dom-types';

type SvgProps = SvgAttributes;

export const HeartSvg = (props: SvgProps) => {
  return (
    <svg
      version="1.1"
      id="heart"
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={150}
      x="0"
      y="0"
      viewBox="-50 -50 400 400"
      fill={heartRed}
      {...props}
    >
      <path
        d="M294.626,88.215c-2.388-17.766-9.337-34.209-20.099-47.555c-9.956-12.346-22.871-21.525-36.365-25.844
	c-10.026-3.201-19.906-4.824-29.374-4.824c-24.577,0-46.313,10.811-62.147,30.678c-17.638-20.154-38.392-30.355-61.812-30.357
	c-8.839,0-18.06,1.516-27.408,4.502c-13.505,4.32-26.423,13.498-36.382,25.844C10.274,54.004,3.322,70.449,0.934,88.215
	c-3.858,28.701,4.289,60.008,23.562,90.533c22.278,35.285,59.255,69.889,109.904,102.848c3.989,2.598,8.617,3.971,13.381,3.971
	c4.764,0,9.392-1.373,13.383-3.973c50.646-32.957,87.623-67.561,109.9-102.848C290.335,148.221,298.482,116.916,294.626,88.215z"
      />
    </svg>
  );
};

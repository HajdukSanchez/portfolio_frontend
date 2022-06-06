import { keyframes } from 'styled-components';

const jummping = keyframes`
  from {
		transform: translateY(-0.5rem) rotate(90deg);
  }
  to {
		transform: translateY(0.5rem) rotate(90deg);
  }
	`;

const leftToRight = keyframes`
  from {
		transform: translateX(-0.5rem) ;
  }
  to {
		transform: translatex(0.0rem) ;
  }
	`;

export { jummping, leftToRight };
